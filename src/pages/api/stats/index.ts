import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { useCors } from "../../../../lib/middleware/corsMW";
import rateLimit from "../../../../lib/middleware/limitMW";
import { getUri } from "../../../../util/misc";
const analyticsData = google.analyticsdata("v1beta");

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);
    await limiter.check(res, 60, "CACHE_TOKEN"); // 60 requests per minute

    const startDate = (req.query.startDate as string) || "2021-10-10";

    const slug = req.query.slug;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    google.options({ auth });

    const response = await analyticsData.properties.runReport({
      property: `properties/${process.env.GA_PROP_ID}`,
      requestBody: {
        dateRanges: [
          {
            startDate,
            endDate: "2023-08-01",
          },
        ],
        dimensions: [
          {
            name: "pagePath",
          },
        ],
        metrics: [
          {
            name: "eventCount",
          },
        ],
        dimensionFilter: {
          filter: {
            fieldName: "eventName",
            stringFilter: {
              value: "page_view",
            },
          },
        },
      },
    });

    const slugMap = (response.data.rows || []).reduce((acc, curr) => {
      if (curr.dimensionValues?.[0].value) {
        acc[curr.dimensionValues[0].value] = curr.metricValues![0].value!;
      }
      return acc;
    }, {} as Record<string, string>);

    const pageViews = slugMap[slug as string];

    const countRes = await fetch(
      //trim the /blog from slug with slice
      `${getUri("query")}/api/comment/${slug.slice(6)}/count`
    );

    const count = await countRes.json();

    return res.status(200).json({
      pageViews,
      count: 2,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
