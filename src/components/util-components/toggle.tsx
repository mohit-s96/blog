import { useTheme } from "next-themes";
import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { flushSync } from "react-dom";
import { ThemeType } from "../../../types/globalTypes";
import { BindOptions } from "../../../types/keyTypes";
import useGlobalKeyBind from "../../hooks/useGlobalKeyBind";
import { NightIcon, SunIcon } from "../svg/collection.svg";

interface Props {
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

function ToggleTheme({}: Props): ReactElement | null {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    if (theme === "system") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        // dark mode
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const options: BindOptions = useMemo(
    () => ({
      options: [
        {
          keys: ["t"],
          specialKey: "Alt",
          callback: () => {
            handleChange();
          },
        },
      ],
    }),
    [handleChange]
  );
  useGlobalKeyBind(options);
  if (!loaded) return null;
  return (
    <button
      onClick={handleChange}
      className="cursor-pointer"
      aria-label="theme-toggle"
      aria-keyshortcuts="alt + t"
    >
      {theme === "dark" ? (
        <NightIcon className="mx-2 hover:scale-150 transition-all duration-500" />
      ) : (
        <SunIcon
          className="w-6 mx-2 hover:scale-150 transition-all duration-500"
          color="#FFDD25"
        />
      )}
    </button>
  );
}

export default ToggleTheme;
