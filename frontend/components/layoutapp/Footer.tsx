import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 my-16">
        <p className={styles.text}>© napsryu ✦ Gabriele Napoli</p>
        <div className={`flex gap-3 ${styles.text}`}>
          <Link href="/about">about</Link>
          <Link href="/work">work</Link>
          <Link href="/story">story</Link>
          <Link href="/timeline">timeline</Link>
          <Link href="/links">links</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
