import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { getAboutData } from "../api/aboutService";
import { AboutProps } from "../api/models/AboutProps";
import Layout from "../components/Layout/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  const aboutData = await getAboutData();
  return {
    props: {
      ...aboutData,
    },
    revalidate: 86400,
  };
};

const About: NextPage<AboutProps> = ({ about, avatar }) => {
  return <Layout></Layout>;
};

export default About;
