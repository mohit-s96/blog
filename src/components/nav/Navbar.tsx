import React, { ReactElement } from "react";
import Avatar from "../avatars/Avatar";
import uri from "../../../public/favicon/icon-512x512.png";
import NavItem from "./NavItem";
import { Search } from "../svg/collection.svg";

export interface Props {
  theme: "light" | "dark";
}

function Navbar({ theme = "dark" }: Props): ReactElement {
  return (
    <div
      className={`w-full flex justify-between items-center p-2 ${
        theme === "dark" ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      <Avatar
        imageUri={(uri as unknown) as string}
        alt="Branding logo image of the letter m"
        size="lg"
      />
      <div className="flex justify-between items-center">
        <NavItem theme={theme} size="md" children="Search" Icon={Search} />
        <NavItem theme={theme} size="md" children="About me" />
      </div>
    </div>
  );
}

export default Navbar;
