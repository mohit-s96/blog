import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { ThemeType } from "../../../types/globalTypes";
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

  return (
    <div>
      <div onClick={handleChange} className="cursor-pointer">
        {dark ? (
          <NightIcon className="w-6 mx-2 hover:scale-150 transition-all duration-500" />
        ) : (
          <SunIcon
            className="w-6 mx-2 hover:scale-150 transition-all duration-500"
            color="#FFDD25"
          />
        )}
      </div>
    </div>
  );
}

export default ToggleTheme;
