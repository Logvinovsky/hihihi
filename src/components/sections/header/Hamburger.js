import "./Hamburger-menu.scss";
import links from "./Hamburger-links.json";
// import { useLayoutEffect } from "react";

export default function Hamburger() {
  return (
    <div className="menu__content">
      <div className="menu_scroll">
        <HamburgerLinks />
      </div>
    </div>
  );
}

function HamburgerLinks() {
  return links.map((link) => {
    if (link.hr) {
      return <hr className="menu__hr" />;
    } else {
      return (
        <a href={link.href} key={link.text} className={"menu__link"}>
          {link.text}
        </a>
      );
    }
  });
}
