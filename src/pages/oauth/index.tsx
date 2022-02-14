import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import { getUri } from "../../../util/misc";

export function checkDevVsProdUrl() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:4218"
    : "https://mohits.dev";
}

const Index = () => {
  const [status, setStatus] = useState(0);
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");

    window.opener.postMessage("loaded", window.opener.origin);
    window.addEventListener(
      "message",
      (event) => {
        // Do we trust the sender of this message?
        if (typeof event.data === "string" && event.data.startsWith("state:")) {
          if (event.origin !== checkDevVsProdUrl()) {
            setStatus(1);
            return;
          }

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
                setStatus(1);
              });
          } else {
            setStatus(1);
          }
        }
      },
      false
    );
  }, []);
  return (
    <Layout
      render={(theme) => {
        return (
          <>
            <div className="2xl:w-7/12 xl:w-8/12 md:w-10/12 w-95-res mx-auto text-center">
              {status === 0 ? (
                <>
                  <div className="top-loader-line"></div>
                  <p className="text-primary-accent-light p-2 font-bold">
                    authorizing...
                  </p>
                </>
              ) : status === 1 ? (
                <p className="text-red-600 font-bold p-2">
                  oops...something went wrong. close this tab and try again
                </p>
              ) : null}
            </div>
            <div className="mt-8">
              <Footer theme={theme} />
            </div>
          </>
        );
      }}
    />
  );
};

export default Index;
