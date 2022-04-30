import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav className="mt-12 mb-24">
        <ul className={`list-none flex justify-center gap-10 ${styles.navbar}`}>
          <li className={router.pathname === "/" ? `${styles.active}` : ""}>
            <Link href="/">Gabriele Napoli</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/project") ? `${styles.active}` : ""
            }
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={router.pathname === "/about" ? `${styles.active}` : ""}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={router.pathname == "/resume" ? `${styles.active}` : ""}
          >
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
