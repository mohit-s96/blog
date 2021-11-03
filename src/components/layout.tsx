import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { ThemeType } from "../../types/globalTypes";
import { useTheme } from "next-themes";
import Navbar from "./nav/Navbar";
import Prism from "prismjs";

type Props = {
  // children: React.ReactNode;
  render: (theme: ThemeType) => ReactNode;
};

function getTheme(): ThemeType {
  return (localStorage?.getItem("theme") as ThemeType) || "light";
}

const Layout = ({ render }: Props) => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    //@ts-ignore
    Prism.manual = true;
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className={`dark:bg-primary-bg-dark bg-primary-bg-light`}>
        <Navbar
          theme={theme as ThemeType}
          setTheme={setTheme as Dispatch<SetStateAction<ThemeType>>}
        />
        {render(theme as ThemeType)}
      </div>
    </>
  );
};

export default Layout;
