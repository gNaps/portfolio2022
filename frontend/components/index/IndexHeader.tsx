import { HomeProps } from "../../api/models/HomeProps";
import styles from "./IndexHeader.module.scss";
import Image from "next/image";
import Link from "next/link";

const IndexHeader = ({ avatar, title, description }: Partial<HomeProps>) => {
  return (
    <>
      <div
        className={`rounded-full flex justify-center items-center mb-3 ${styles.avatar}`}
      >
        <Image
          src={avatar!}
          alt="Gabriele Napoli"
          width={43}
          height={59}
          layout={"fixed"}
        />
      </div>
      <h1> {title} </h1>
      <p className="secondary-text"> {description} </p>
      <div className="flex items-center mt-3">
        <Link href={"about"}>Discover more about me</Link>
        <Image
          src={"/link-arrow.svg"}
          alt="Link"
          width={16}
          height={16}
          layout={"fixed"}
        />
      </div>
    </>
  );
};

export default IndexHeader;
