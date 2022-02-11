import React, { useContext, useEffect, useRef } from "react";
import { getGhClientId } from "../../../util/misc";
import { checkDevVsProdUrl } from "../../pages/oauth";
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
            `https://github.com/login/oauth/authorize?client_id=${getGhClientId()}&redirect_uri=${checkDevVsProdUrl()}/oauth&state=${
              stateRef.current
            }`
          );
        }}
      >
        sign in with github to comment
      </button>
    </div>
  );
}

export default Signin;
