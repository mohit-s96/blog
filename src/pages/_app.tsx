import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { pageview } from "../../lib/utils/gtag";
import "../../styles/index.css";
import "../../styles/prism.css";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url, document.title);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
