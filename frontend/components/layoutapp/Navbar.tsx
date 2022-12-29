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
import { useTheme } from "next-themes";

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <>
      <nav
        className={`mx-auto mt-8 p-3 flex justify-between gap-12 ${styles.nav}`}
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
          <li className={router.pathname === "/work" ? `${styles.active}` : ""}>
            <Link href="/work">work</Link>
          </li>
          <li className={router.pathname == "/story" ? `${styles.active}` : ""}>
            <Link href="/story">story</Link>
          </li>
          <li
            className={router.pathname == "/timeline" ? `${styles.active}` : ""}
          >
            <Link href="/timeline">timeline</Link>
          </li>
          <div className="dropdown">
            <label tabIndex={0} className="m-1 flex items-center gap-1">
              more
              <BiChevronDown />
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content menu mt-4 p-2 rounded  ${
                theme === "dark" || resolvedTheme === "dark"
                  ? "bg-black"
                  : "bg-white"
              }`}
            >
              <li>
                <Link href="/bookshelf">bookshelf</Link>
              </li>
              <li>
                <Link href="/stack">stack</Link>
              </li>
              <li>
                <Link href="/links">links</Link>
              </li>
              <li>
                <Link href="/CV_Gabriele_Napoli_2022.pdf" passHref={true}>
                  <a target={"_blank"} rel="noreferrer">
                    curriculum
                  </a>
                </Link>
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
          <Link href="https://github.com/gNaps" passHref={true}>
            <a target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
          </Link>
          <Link href="https://www.instagram.com/napsryu" passHref={true}>
            <a target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gabriele-napoli-a87529185"
            passHref={true}
          >
            <a target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
          </Link>
          <RxDividerVertical className="opacity-25 text-xl" />
          {theme === "light" ? (
            <FiMoon onClick={() => setTheme("dark")} />
          ) : (
            <FiSun onClick={() => setTheme("light")} />
          )}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="m-1 flex items-center gap-1">
              <FiMenu />
            </label>
            <ul
              tabIndex={0}
              className={`dropdown-content menu mt-4 p-2 rounded  ${
                theme === "dark" || resolvedTheme === "dark"
                  ? "bg-black"
                  : "bg-white"
              }`}
            >
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/work">work</Link>
              </li>
              <li>
                <Link href="/story">story</Link>
              </li>
              <li>
                <Link href="/timeline">timeline</Link>
              </li>
              <li>
                <Link href="/bookshelf">bookshelf</Link>
              </li>
              <li>
                <Link href="/stack">stack</Link>
              </li>
              <li>
                <Link href="/links">links</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
