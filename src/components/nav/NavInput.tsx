import React, { ReactElement, useState } from "react";
import { ThemeType } from "../../../types/globalTypes";

interface Props {
  active: boolean;
  theme: ThemeType;
  callback?: () => any;
}

function NavInput({ active, theme, callback = () => {} }: Props): ReactElement {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        tabIndex={1}
        type="text"
        value={value}
        className={`${
          active ? "w-60 p-2" : "w-0"
        } transition-all duration-200 rounded-lg outline-none focus-visible:outline-none ${
          theme === "light"
            ? "text-primary-text-dark bg-accent-low-opa placeholder-white"
            : "text-secondary-text-light bg-primary-light"
        }`}
        placeholder="Search for something..."
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => callback()}
      />
    </div>
  );
}

export default NavInput;
