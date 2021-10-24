import { ReactNode, useEffect, useState } from "react";
import { ThemeType } from "../../types/globalTypes";
import Navbar from "./nav/Navbar";
import Prism from "prismjs";

type Props = {
  // children: React.ReactNode;
  render: (theme: ThemeType) => ReactNode;
};

const Layout = ({ render }: Props) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  useEffect(() => {
    //@ts-ignore
    Prism.manual = true;
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div
        className={`${
          theme === "dark" ? "bg-primary-bg-dark" : "bg-primary-bg-light"
        }`}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="">{render(theme)}</main>
      </div>
    </>
  );
};

export default Layout;
