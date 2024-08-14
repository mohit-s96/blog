import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import Avatar from "../avatars/Avatar";
import NavItem from "./NavItem";
import { BrandingImage } from "../svg/collection.svg";
import { ThemeType } from "../../../types/globalTypes";
import ToggleTheme from "../util-components/toggle";
import Link from "next/link";
import { PRIMARY_ACCENT_LIGHT } from "../../../constants";

export interface Props {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  setSearchVisible: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
}

function Navbar({
  theme,
  setTheme,
  setSearchVisible,
  visible,
}: Props): ReactElement {
  const changeSearchVisible = () => {
    setSearchVisible((visible) => !visible);
  };

  const initialMounted = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (initialMounted.current && !visible) {
      buttonRef.current?.focus();
    }
    if (!initialMounted.current) {
      initialMounted.current = true;
    }
  }, [visible]);

  return (
    <nav
      className={`w-full flex justify-between items-center p-2 overflow-hidden bg-white dark:bg-primary-dark sticky top-0 z-10`}
    >
      <Avatar alt="Branding logo image of the letter m" size="md">
        <Link href="/" passHref>
          <a aria-label="home page">
            <BrandingImage color={PRIMARY_ACCENT_LIGHT} />
          </a>
        </Link>
      </Avatar>
      <div className="flex justify-between items-center">
        <NavItem
          theme={theme}
          size="md"
          renderButton={false}
          children={
            <a
              referrerPolicy="no-referrer"
              className="outline-none border-b-2 font-bold border-primary-accent-light hover:bg-primary-accent-light transition-all mx-2 duration-200 hover:text-white focus-visible:bg-primary-accent-light focus-visible:text-white"
              href="https://twitter.com/techwagie"
            >
              twitter
            </a>
          }
          wrapperClassname="hidden md:block"
        />
        <NavItem
          theme={theme}
          size="md"
          wrapperClassname="hidden md:block"
          renderButton={false}
          children={
            <a
              referrerPolicy="no-referrer"
              className="outline-none border-b-2 font-bold border-primary-accent-light hover:bg-primary-accent-light transition-all mx-2 duration-200 hover:text-white focus-visible:bg-primary-accent-light focus-visible:text-white"
              href="https://github.com/mohit-s96"
            >
              github
            </a>
          }
        />
        <NavItem
          theme={theme}
          size="md"
          children={
            <span>
              search <span className="hidden xl:inline">[ctrl + k]</span>
            </span>
          }
          buttonRef={buttonRef}
          onClick={changeSearchVisible}
          className="outline-none border-b-2 font-bold border-primary-accent-light hover:bg-primary-accent-light transition-all mx-2 duration-200 hover:text-white focus-visible:bg-primary-accent-light focus-visible:text-white"
          aria-keyshortcuts="control or command + k"
          aria-label="open search modal"
        />
        <ToggleTheme setTheme={setTheme} />
      </div>
    </nav>
  );
}

export default Navbar;
