import { NextApiRequest, NextApiResponse } from "next";
import { useCors } from "../../../../lib/middleware/corsMW";
import { useAuth } from "../../../../lib/middleware/authMW";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useCors(req, res);

    // await useAuth(req, res);

    const { code } = req.body;

    if (!code) {
      throw "invalid request";
    }

    const data = await fetch(
      `https://github.com/login/oauth/access_token?client_id=Iv1.b7f0e9e6521133a2&client_secret=${process.env.GH_CLIENT_SECRET}&code=${code}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    );

    // console.dir(data.body);

    const user = await data.json();

    console.log(user);

    const userdata = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${user.access_token}`,
      },
    });

    const resuser = await userdata.json();
    console.log(resuser);

    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);

    res.status(400).json({ error: "something went wrong" });
  }
};

export default handler;
