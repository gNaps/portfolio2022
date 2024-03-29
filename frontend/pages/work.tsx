import type { GetStaticProps, NextPage } from "next";
import { WorkProps } from "../api/models/WorkProps";
import { projects } from "../api/projects.data";
import Layout from "../components/layoutapp/Layout";
import Project from "../components/shared/Project";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      projects: projects,
    },
  };
};

const Work: NextPage<WorkProps> = ({ projects }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="page-title page-title-work">Work</h1>
        <p className="page-subtitle">
          Over the course of the year, I spent my free time creating side
          projects.
        </p>
        <div className="grid md:grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {projects?.map((p) => (
            <Project key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Work;
