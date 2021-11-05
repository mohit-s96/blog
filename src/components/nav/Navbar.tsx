import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Avatar from "../avatars/Avatar";
import NavItem from "./NavItem";
import { BrandingImage, Search } from "../svg/collection.svg";
import NavInput from "./NavInput";
import { ThemeType } from "../../../types/globalTypes";
import ToggleTheme from "../util-components/toggle";
import Link from "next/link";

export interface Props {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
}

function Navbar({ theme, setTheme }: Props): ReactElement {
  const [active, setActive] = useState(false);
  return (
    <nav
      className={`w-full flex justify-between items-center p-2 overflow-hidden bg-white dark:bg-primary-dark sticky top-0 z-10 border-b-2 border-gray-300 shadow-sm`}
    >
      <Avatar alt="Branding logo image of the letter m" size="md">
        <Link href="/" passHref>
          <a>
            <BrandingImage color={"rgb(106, 39, 159)"} />
          </a>
        </Link>
      </Avatar>
      <div className="flex justify-between items-center">
        <ToggleTheme setTheme={setTheme} />
        {/* <NavItem
          theme={theme}
          size="md"
          children="Search"
          Icon={Search}
          callback={() => setActive(!active)}
        /> */}
        <NavInput
          active={active}
          theme={theme}
          callback={() => setActive(false)}
        />
        <NavItem theme={theme} size="md" children="about me" />
      </div>
    </nav>
  );
}

export default Navbar;
