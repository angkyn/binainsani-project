import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const links = [
  { path: "/", name: "home" },
  { path: "/academic", name: "academic" },
  { path: "/documentation", name: "documentation" },
  { path: "/contact", name: "contact" },
];

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavProps) => {
  const path = usePathname();
  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
