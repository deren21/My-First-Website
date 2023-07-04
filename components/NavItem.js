import classNames from "classnames";

export default function NavItem({ href, scheme, children }) {
  const schemes = {
    light: "text-white opacity-60 hover:opacity-100",
    dark: "text-black",
  };
  const pickedScheme = schemes[scheme];
  return (
    <li>
      <a
        href={href}
        className={classNames("text-lg transition font-semibold", pickedScheme)}
      >
        {children}
      </a>
    </li>
  );
}
