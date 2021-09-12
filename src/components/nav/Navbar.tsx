import React, { ReactElement, useState } from "react";
import Avatar from "../avatars/Avatar";
import uri from "../../../public/favicon/icon-512x512.png";
import NavItem from "./NavItem";
import { Search } from "../svg/collection.svg";
import NavInput from "./NavInput";

export interface Props {
  theme: ThemeType;
}

function Navbar({ theme = "dark" }: Props): ReactElement {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`w-full flex justify-between items-center p-2 overflow-hidden ${
        theme === "dark" ? "bg-primary-dark" : "bg-primary-light"
      }`}
    >
      <Avatar
        imageUri={(uri.src as unknown) as string}
        alt="Branding logo image of the letter m"
        size="lg"
      />
      <div className="flex justify-between items-center">
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
    </div>
  );
}

export default Navbar;
