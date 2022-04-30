import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { getAboutData } from "../api/aboutService";
import { AboutProps } from "../api/models/AboutProps";
import { ResumeProps } from "../api/models/ResumeProps";
import { getResumeData } from "../api/resumeService";
import Layout from "../components/layout/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  const resumeData = await getResumeData();
  return {
    props: {
      ...resumeData,
    },
    revalidate: 86400,
  };
};

const About: NextPage<ResumeProps> = ({ jobs, educations }) => {
  return <Layout></Layout>;
};

export default About;
