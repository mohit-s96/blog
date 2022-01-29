import React, { useEffect } from "react";

type Props = {};

function Comments({}: Props) {
  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data === "loaded") {
        e.source?.postMessage("state:123456789", location.origin as any);
      }
    });
  }, []);
  return (
    <div
      style={{
        // background: "red",
        height: "10vh",
        width: "50%",
        transform: "translateY(-100%)",
      }}
    >
      <button
        className="p-2 bg-green-600 text-white"
        onClick={() => {
          //   window &&

          //   const ref = window.open("http://localhost:5000/oauth?code=123456789");

          //   ref?.addEventListener("DOMContentLoaded", () => {
          //     ref?.postMessage("hello", location.origin);
          //   });

          //   setTimeout(() => {
          //   }, 5000);

          window.open(
            "https://github.com/login/oauth/authorize?client_id=Iv1.b7f0e9e6521133a2&redirect_uri=http://localhost:5000/oauth&state=123456789"
          );
        }}
      >
        sign in with github
      </button>
    </div>
  );
}

export default Comments;
