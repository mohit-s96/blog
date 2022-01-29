import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import { useRouter } from "next/router";

type Props = {};

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    console.log(window.opener);

    window.opener.postMessage("loaded", window.opener.origin);
    window.addEventListener(
      "message",
      (event) => {
        // console.log("slave", event);

        // Do we trust the sender of this message?
        if (event.origin !== "http://localhost:5000") return;
        const message = (event.data as string).split(":");
        if (message[0] === "state") {
          fetch(`/api/auth`, {
            method: "POST",
            body: JSON.stringify({ code }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            });
        }
        // event.source?.postMessage(
        //   "hi there yourself!  the secret response " + "is: rheeeeet!",
        //   event.origin as any
        // );
      },
      false
    );
    // console.log(router);

    // console.log(url);

    // if (!code || !state) return;
  }, []);
  return (
    <>
      <Layout
        render={(theme) => {
          return (
            <>
              <div className="2xl:w-7/12 xl:w-8/12 md:w-10/12 w-95-res mx-auto">
                hi hello
              </div>
              <div className="mt-8">
                <Footer theme={theme} />
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default Index;
