//* link (next JS)
import Link from "next/link";
//* next hooks
import { usePathname } from "next/navigation";
//* motion
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my project" },
  { path: "/contact", name: "contact" },
];
const Nav = ({ containerStyle, linkStyle, underlineStyle }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link, index) => {
        return (
          <Link
            className={`capitalize ${linkStyle}`}
            key={index}
            href={link.path}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyle}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
