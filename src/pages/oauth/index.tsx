import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import { useRouter } from "next/router";
import { getUri } from "../../../util/misc";

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
        // Do we trust the sender of this message?
        if (typeof event.data === "string" && event.data.startsWith("state:")) {
          if (event.origin !== "http://localhost:5000") return;
          console.log(event.data);

          const message = (event.data as string).split(":");
          if (message[0] === "state" && message[1] === state) {
            fetch(`${getUri("query")}/api/auth`, {
              method: "POST",
              body: JSON.stringify({ code }),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              credentials: "include",
            })
              .then((res) => res.json())
              .then((res) => {
                if (res.message)
                  event.source?.postMessage("success", event.origin as any);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      },
      false
    );
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
