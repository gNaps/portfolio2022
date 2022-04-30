import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAboutData } from "../api/aboutService";
import { AboutProps } from "../api/models/AboutProps";
import Layout from "../components/layout/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  const aboutData = await getAboutData();
  return {
    props: {
      ...aboutData,
    },
    revalidate: 86400,
  };
};

const About: NextPage<AboutProps> = ({ about, avatar, skills }) => {
  return (
    <Layout>
      <div
        className="w-40 h-40 rounded-full bg-cover bg-center mb-3"
        style={{ backgroundImage: "url(" + avatar + ")" }}
      ></div>
      <h1>About</h1>
      <div dangerouslySetInnerHTML={{ __html: about }}></div>
      <div className="flex items-center mt-3">
        <Link href={`/resume`}>View my resume</Link>
        <Image
          src={"/link-arrow.svg"}
          alt="Link"
          width={16}
          height={16}
          layout={"fixed"}
        />
      </div>
    </Layout>
  );
};

export default About;
