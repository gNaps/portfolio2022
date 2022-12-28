import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-16">
        <p
          className={`${styles.text} ${
            theme === "dark" ? styles.textDark : ""
          }`}
        >
          © napsryu ✦ Gabriele Napoli
        </p>
        <div
          className={`flex gap-3 ${styles.text} ${
            theme === "dark" ? styles.textDark : ""
          }`}
        >
          <Link href="/about">about</Link>
          <Link href="/work">work</Link>
          <Link href="/story">story</Link>
          <Link href="/timeline">timeline</Link>
          <Link href="/links">links</Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 mt-7 pb-5">
        <Image
          src={`/decorator-rx-${theme}.svg`}
          alt="decorator"
          width={147}
          height={14}
        />
        <p
          className={`${styles.quote} ${
            theme === "dark" ? styles.quoteDark : ""
          }`}
        >
          Thank you
        </p>
        <Image
          src={`/decorator-lx-${theme}.svg`}
          alt="decorator"
          width={147}
          height={14}
        />
      </div>
    </>
  );
};

export default Footer;
