import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { ProjectsProps } from "../api/models/ProjectsProps";
import { getProjectsData } from "../api/projectsService";
import Layout from "../components/layout/Layout";
import Project from "../components/shared/Project";

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
  return (
    <Layout>
      <h1>Projects ✨</h1>
      {projects.map((p: any) => (
        <Project key={p.id} project={p} />
      ))}
    </Layout>
  );
};

export default Projects;
