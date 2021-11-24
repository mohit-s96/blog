import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ThemeType } from "../../types/globalTypes";
import { useTheme } from "next-themes";
import Navbar from "./nav/Navbar";
import useGlobalKeyBind from "../hooks/useGlobalKeyBind";
import { BindOptions } from "../../types/keyTypes";

type Props = {
  // children: React.ReactNode;
  render: (
    theme: ThemeType,
    searhcVisible: boolean,
    setSearchVisible: Dispatch<SetStateAction<boolean>>
  ) => ReactNode;
};

const Layout = ({ render }: Props) => {
  const { theme, setTheme } = useTheme();
  const [searchVisible, setSearchVisible] = useState(false);

  const options: BindOptions = {
    options: [
      {
        keys: ["k"],
        specialKey: "Control",
        callback: () => {
          setSearchVisible(true);
        },
      },
      {
        keys: ["escape"],
        callback: () => {
          setSearchVisible(false);
        },
      },
    ],
  };
  useGlobalKeyBind(options);
  return (
    <>
      <div className={`dark:bg-primary-bg-dark bg-white`}>
        <Navbar
          theme={theme as ThemeType}
          setSearchVisible={setSearchVisible}
          setTheme={setTheme as Dispatch<SetStateAction<ThemeType>>}
        />
        {render(theme as ThemeType, searchVisible, setSearchVisible)}
      </div>
    </>
  );
};

export default Layout;
