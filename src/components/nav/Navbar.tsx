import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Avatar from "../avatars/Avatar";
import NavItem from "./NavItem";
import { BrandingImage, GithubIcon, Search } from "../svg/collection.svg";
import NavInput from "./NavInput";
import { ThemeType } from "../../../types/globalTypes";
import ToggleTheme from "../util-components/toggle";
import Link from "next/link";
import { PRIMARY_ACCENT_LIGHT } from "../../../constants";

export interface Props {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  setSearchVisible: Dispatch<SetStateAction<boolean>>;
}

function Navbar({ theme, setTheme, setSearchVisible }: Props): ReactElement {
  const [active, setActive] = useState(false);

  const changeSearchVisible = () => {
    setSearchVisible((visible) => !visible);
  };

  return (
    <nav
      className={`w-full flex justify-between items-center p-2 overflow-hidden bg-white dark:bg-primary-dark sticky top-0 z-10`}
    >
      <Avatar alt="Branding logo image of the letter m" size="md">
        <Link href="/" passHref>
          <a>
            <BrandingImage color={PRIMARY_ACCENT_LIGHT} />
          </a>
        </Link>
      </Avatar>
      <div className="flex justify-between items-center">
        <NavItem
          theme={theme}
          size="md"
          children={<a href="https://twitter.com/_msx47">twitter</a>}
          wrapperClassname="hidden md:block"
          className="outline-none border-b-2 font-bold border-primary-accent-light hover:bg-primary-accent-light transition-all mx-2 duration-200 hover:text-white focus-visible:bg-primary-accent-light focus-visible:text-white"
        />
        <NavItem
          theme={theme}
          size="md"
          wrapperClassname="hidden md:block"
          children={<a href="https://github.com/msx47">github</a>}
          className="outline-none border-b-2 font-bold border-primary-accent-light hover:bg-primary-accent-light transition-all mx-2 duration-200 hover:text-white focus-visible:bg-primary-accent-light focus-visible:text-white"
        />
        <NavItem
          theme={theme}
          size="md"
          children={
            <span>
              search <span className="hidden xl:inline">[ctrl + k]</span>
            </span>
          }
          callback={changeSearchVisible}
          className="outline-none border-b-2 font-bold border-primary-accent-light hover:bg-primary-accent-light transition-all mx-2 duration-200 hover:text-white focus-visible:bg-primary-accent-light focus-visible:text-white"
          // Icon={Search}
          //    callback={() => setActive(!active)}
        />
        <ToggleTheme setTheme={setTheme} />
        {/* <NavInput
          active={active}
          theme={theme}
          callback={() => setActive(false)}
        /> */}
        {/* <NavItem theme={theme} size="md" children="about me" /> */}
      </div>
    </nav>
  );
}

export default Navbar;
