import React, { ReactElement, useEffect } from "react";

function useAnimateOnMount(
  ref: React.MutableRefObject<any>,
  className: string,
  dependency: any
) {
  useEffect(() => {
    setTimeout(() => {
      ref.current.className = ref.current.className.concat(` ${className}`);
    }, 0);
  }, [dependency]);
}

export default useAnimateOnMount;
