import styles from "./IndexHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

const IndexHeader = () => {
  return (
    <>
      <div className="flex items-center gap-3 mt-5">
        <Image
          src="/avatar-home.png"
          alt="Gabriele Napoli"
          width={90}
          height={90}
          layout={"fixed"}
        />
        <div>
          <h1 className={styles.title}>Gabriele Napoli</h1>
          <p className={styles.subtitle}>I am a Javascript lover</p>
        </div>
      </div>
      <p className="my-3">
        Five years of experience in web development. I am a full-stack
        Javascript and I love what I do. I spend my free time learning and
        developing personal and open source projects.
      </p>
      <p className={styles.subtitle}>
        Doing what I love at{" "}
        <Link href="/">
          <a className={styles.specialLinks}>@ScuolaZoo</a>
        </Link>{" "}
        company
      </p>
    </>
  );
};

export default IndexHeader;
