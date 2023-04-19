import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navbar.jsx";

const MENU_LIST = [
  { text: "Profile", href: "/profile" },
  { text: "Notifications", href: "/notifs" },
  { text: "Saved", href: "/saved" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
      <Link href={"/"}>
          <a>
            <div className="" src="/menu.svg"></div>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <h1 className="logo">P.</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;