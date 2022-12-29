import type { GetStaticProps } from "next";
import Layout from "../components/layoutapp/Layout";
import Image from "next/image";
import stylesIndex from "../styles/IndexHeader.module.scss";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";
import { links } from "../api/link.data";
import { LinkProps } from "../api/models/LinkProps";
import { useTheme } from "next-themes";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      links: links,
    },
  };
};

const getIcon = (social: "Github" | "Instagram" | "Linkedin") => {
  return social === "Github" ? (
    <FiGithub />
  ) : social === "Instagram" ? (
    <FiInstagram />
  ) : (
    <FiLinkedin />
  );
};

const Links = ({ links }: LinkProps) => {
  const { theme, resolvedTheme } = useTheme();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <Image
          src="/avatar-home.png"
          alt="Gabriele Napoli"
          width={90}
          height={90}
          layout={"fixed"}
        />
        <h1 className={stylesIndex.title}>Gabriele Napoli</h1>
        <p className="text-center	text-lg mt-5">
          Javascript lover <span className={stylesIndex.subtitle}>✦</span> Full
          stack developer <span className={stylesIndex.subtitle}>✦</span>{" "}
          Creating incredible applications{" "}
          <span className={stylesIndex.subtitle}>✦</span> Manga and videogames
          addicted
        </p>
        <p className={`${stylesIndex.subtitle} my-5`}>
          Doing what I love at{" "}
          <Link href="/">
            <a className={stylesIndex.specialLinks}>@ScuolaZoo</a>
          </Link>{" "}
          company
        </p>
        <IconContext.Provider value={{ className: "stack-icons" }}>
          {links.map((l: any) => (
            <Link href={l.url} passHref={true} key="l.name">
              <a target="_blank" rel="noreferrer">
                <div className="rounded border border-black dark:border-white w-80 flex justify-between items-center px-3 py-2 mb-5 cursor-pointer">
                  <div className="flex gap-2 items-center">
                    {getIcon(l.name)}
                    {l.name}
                  </div>
                  <Image
                    src={`/angle-arrow-${resolvedTheme}.svg`}
                    alt="open link"
                    width={20}
                    height={20}
                    layout={"fixed"}
                  />
                </div>
              </a>
            </Link>
          ))}

          {/* <div className="rounded border border-black dark:border-white w-80 flex justify-between items-center px-3 py-2 mb-5 cursor-pointer">
            <div className="flex gap-2 items-center">
              <FiInstagram />
              Instagram
            </div>
            <Image
              src={`/angle-arrow-${theme}.svg`}
              alt="open link"
              width={20}
              height={20}
              layout={"fixed"}
            />
          </div>
          <div className="rounded border border-black dark:border-white w-80 flex justify-between items-center px-3 py-2 mb-5 cursor-pointer">
            <div className="flex gap-2 items-center">
              <FiLinkedin />
              Linkedin
            </div>
            <Image
              src={`/angle-arrow-${theme}.svg`}
              alt="open link"
              width={20}
              height={20}
              layout={"fixed"}
            />
          </div> */}
        </IconContext.Provider>
      </div>
    </Layout>
  );
};

export default Links;
