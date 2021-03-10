import links from "./Nav-links.json";

export default function Nav() {
  return (
    <ul className="nav__ul">
      {links.map((link) => {
        return (
          <li key={link.text}>
            <a href={link.href} className={"nav__link"}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}