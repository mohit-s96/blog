import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { useCors } from "../../../../lib/middleware/corsMW";
import rateLimit from "../../../../lib/middleware/limitMW";
import { getUri } from "../../../../util/misc";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);
    await limiter.check(res, 60, "CACHE_TOKEN"); // 60 requests per minute

    const startDate = req.query.startDate || "2021-10-10";

    const slug = req.query.slug;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    const analytics = google.analytics({
      auth,
      version: "v3",
    });

    const response = await analytics.data.ga.get({
      "end-date": "today",
      ids: `ga:${process.env.GOOGLE_ANALYTICS_VIEW_ID as any}`,
      metrics: "ga:pageviews",
      dimensions: "ga:pagePath",
      filters: `ga:pagePath==${slug}`,
      "start-date": startDate as string,
    });

    const pageViews = response?.data?.totalsForAllResults!["ga:pageviews"];

    const countRes = await fetch(
      //trim the /blog from slug with slice
      `${getUri("query")}/api/comment/${slug.slice(6)}/count`
    );

    const count = await countRes.json();

    return res.status(200).json({
      pageViews,
      count: count.message,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({ statusCode: 500, message: (err as any).message });
  }
};

export default handler;
