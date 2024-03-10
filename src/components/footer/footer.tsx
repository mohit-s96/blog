import React from "react";
import { PRIMARY_ACCENT_LIGHT } from "../../../constants";
import { ThemeType } from "../../../types/globalTypes";
import NavItem from "../nav/NavItem";
import { NextJsIcon, TailwindIcon, VercelIcon } from "../svg/collection.svg";

type Props = {
  theme: ThemeType;
};

function Footer({ theme }: Props) {
  return (
    <footer className="mt-8 md:mt-0">
      <div className="flex justify-center p-0">
        <span className="text-primary-text-light dark:text-light-gray font-bold p-0">
          made by mohit
        </span>
      </div>
      <div className="flex justify-center p-1">
        <a
          className="text-sm font-bold text-primary-accent-light p-1"
          href="https://twitter.com/_msx47"
        >
          twitter
        </a>
        <a
          className="text-sm text-primary-accent-light font-bold p-1"
          href="https://github.com/mohit-s96"
        >
          github
        </a>
      </div>
      <div className="flex justify-center p-0">
        <NavItem
          renderButton={false}
          children={
            <a
              aria-label="nextjs website"
              href="https://nextjs.org/"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener"
            >
              <NextJsIcon
                color={theme === "dark" ? "#ffffff" : PRIMARY_ACCENT_LIGHT}
              />
            </a>
          }
          size="sm"
          theme={theme}
          wrapperClassname="mx-4 p-2"
        />
        <NavItem
          renderButton={false}
          children={
            <a
              aria-label="tailwind website"
              href="https://tailwindcss.com/"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener"
            >
              <TailwindIcon
                color={theme === "dark" ? "#ffffff" : PRIMARY_ACCENT_LIGHT}
              />
            </a>
          }
          size="sm"
          theme={theme}
          wrapperClassname="mx-4 p-2"
        />
        <NavItem
          renderButton={false}
          children={
            <a
              aria-label="vercel website"
              href="https://vercel.com/"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener"
            >
              <VercelIcon
                color={theme === "dark" ? "#ffffff" : PRIMARY_ACCENT_LIGHT}
              />
            </a>
          }
          size="sm"
          theme={theme}
          wrapperClassname="mx-4 p-2"
        />
      </div>
    </footer>
  );
}

export default Footer;
