import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.scss";
import { BiChevronDown } from "react-icons/bi";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiSun,
  FiMoon,
  FiMenu,
} from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { useTheme, useToggleTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const router = useRouter();
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <>
      <nav
        className={`mx-auto mt-8 p-3 flex justify-between gap-12 ${
          styles.nav
        } ${theme === "dark" ? "dark" : ""}`}
      >
        <ul
          className={`list-none hidden md:flex justify-center items-center gap-6 ${styles.navbar}`}
        >
          <li className={router.pathname === "/" ? `${styles.active}` : ""}>
            <Link href="/">gn</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/about") ? `${styles.active}` : ""
            }
          >
            <Link href="/about">about</Link>
          </li>
          <li
            className={router.pathname === "/about" ? `${styles.active}` : ""}
          >
            <Link href="/about">work</Link>
          </li>
          <li
            className={router.pathname == "/resume" ? `${styles.active}` : ""}
          >
            <Link href="/resume">story</Link>
          </li>
          <li
            className={router.pathname == "/resume" ? `${styles.active}` : ""}
          >
            <Link href="/resume">timeline</Link>
          </li>
          <div className="dropdown">
            <label tabIndex={0} className="m-1 flex items-center gap-1">
              more
              <BiChevronDown />
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content menu mt-4 p-2 rounded bg-black`}
            >
              <li>
                <a>booshelf</a>
              </li>
              <li>
                <a>stack</a>
              </li>
              <li>
                <a>links</a>
              </li>
            </ul>
          </div>
        </ul>
        <ul
          className={`list-none md:hidden justify-center items-center gap-6 ${styles.navbar}`}
        >
          <li className={router.pathname === "/" ? `${styles.active}` : ""}>
            <Link href="/">GN</Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-3 text-lg">
          <FiGithub />
          <FiInstagram />
          <FiLinkedin />
          <RxDividerVertical className="opacity-25 text-xl" />
          {theme === "light" ? (
            <FiMoon onClick={() => toggleTheme("dark")} />
          ) : (
            <FiSun onClick={() => toggleTheme("light")} />
          )}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="m-1 flex items-center gap-1">
              <FiMenu />
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content menu mt-4 p-2 rounded  ${
                theme === "dark" ? "bg-black" : "bg-white"
              }`}
            >
              <li>
                <a>about</a>
              </li>
              <li>
                <a>work</a>
              </li>
              <li>
                <a>story</a>
              </li>
              <li>
                <a>timeline</a>
              </li>
              <li>
                <a>booshelf</a>
              </li>
              <li>
                <a>stack</a>
              </li>
              <li>
                <a>links</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
