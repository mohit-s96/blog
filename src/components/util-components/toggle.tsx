import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
  useMemo,
} from "react";
import { ThemeType } from "../../../types/globalTypes";
import { BindOptions } from "../../../types/keyTypes";
import useGlobalKeyBind from "../../hooks/useGlobalKeyBind";
import { NightIcon, SunIcon } from "../svg/collection.svg";

interface Props {
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

function ToggleTheme({ setTheme }: Props): ReactElement {
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    if (dark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setDark(!dark);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
    }
  }, []);

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

  return (
    <button onClick={handleChange} className="cursor-pointer">
      {dark ? (
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
