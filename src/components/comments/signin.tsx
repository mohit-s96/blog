import React, { useContext, useEffect, useRef } from "react";
import { GithubAuthContext } from "./provider";

type Props = {};

function getRandomState() {
  return Math.random() * Date.now();
}

function Signin({}: Props) {
  const { loading, fetchResource } = useContext(GithubAuthContext);

  const stateRef = useRef(getRandomState());

  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.data === "loaded") {
        e.source?.postMessage(
          "state:" + stateRef.current,
          location.origin as any
        );
      }
      if (e.data === "success") {
        (e.source as Window).close();
        fetchResource();
      }
    });
  }, []);
  return (
    <div className="text-center p-2">
      <button
        disabled={loading}
        className="p-2 bg-primary-accent-light text-white"
        onClick={() => {
          window.open(
            `https://github.com/login/oauth/authorize?client_id=Iv1.b7f0e9e6521133a2&redirect_uri=http://localhost:5000/oauth&state=${stateRef.current}`
          );
        }}
      >
        sign in with github to comment
      </button>
    </div>
  );
}

export default Signin;
