import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { ProjectsProps } from "../api/models/ProjectsProps";
import { getProjectsData } from "../api/projectsService";
import Layout from "../components/Layout/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  const projectsData = await getProjectsData();
  return {
    props: {
      ...projectsData,
    },
    revalidate: 86400,
  };
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  console.log(projects);
  return <Layout></Layout>;
};

export default Projects;
