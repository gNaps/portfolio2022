import { FiInstagram, FiMail } from "react-icons/fi";
import Image from "next/image";
import styles from "../../styles/Hello.module.scss";
import { useTheme } from "../../context/ThemeContext";

const Hello = () => {
  const theme = useTheme();
  return (
    <>
      <div
        className={`${styles.container} ${
          theme === "dark" ? styles.containerDark : ""
        } rounded-lg flex flex-col-reverse md:flex-row items-center justify-center gap-0 md:gap-5 p-3 my-5`}
      >
        <div>
          <h1 className={styles.title}>Say Hi!</h1>
          <p className="py-2 max-w-xs">
            Want to create something awesome? Or, you have any question? Drop an
            email.
          </p>
          <span className={styles.redColor}>gabriele.nap@gmail.com</span>
        </div>
        <Image
          src="/hello.svg"
          alt="say hi!"
          width={275}
          height={275}
          layout={"fixed"}
        />
      </div>
    </>
  );
};

export default Hello;
