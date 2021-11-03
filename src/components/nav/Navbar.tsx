import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Avatar from "../avatars/Avatar";
import uri from "../../../public/favicon/icon-512x512.png";
import NavItem from "./NavItem";
import { Search } from "../svg/collection.svg";
import NavInput from "./NavInput";
import { ThemeType } from "../../../types/globalTypes";
import ToggleTheme from "../util-components/toggle";

export interface Props {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

function Navbar({ theme, setTheme }: Props): ReactElement {
  const [active, setActive] = useState(false);
  return (
    <nav
      className={`w-full flex justify-between items-center p-2 overflow-hidden bg-primary-bg-light dark:bg-primary-dark sticky top-0 z-10 border-b-2 border-gray-300 shadow-sm`}
    >
      <Avatar
        imageUri={(uri.src as unknown) as string}
        alt="Branding logo image of the letter m"
        size="md"
      />
      <div className="flex justify-between items-center">
        <ToggleTheme setTheme={setTheme} />
        <NavItem
          theme={theme}
          size="md"
          children="Search"
          Icon={Search}
          callback={() => setActive(!active)}
        />
        <NavInput
          active={active}
          theme={theme}
          callback={() => setActive(false)}
        />
        <NavItem theme={theme} size="md" children="About me" />
      </div>
    </nav>
  );
}

export default Navbar;
