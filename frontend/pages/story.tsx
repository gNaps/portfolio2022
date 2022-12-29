import type { GetStaticProps, NextPage } from "next";
import { ProjectsProps } from "../api/models/ProjectsProps";
import { story } from "../api/story.data";
import Layout from "../components/layoutapp/Layout";
import Article from "../components/shared/Article";
import Project from "../components/shared/Project";

export const getStaticProps: GetStaticProps = async (context) => {
  //const projectsData = await getProjectsData();
  //projectsData.projects = sortList(projectsData.projects, "year", "desc");
  return {
    props: {
      story: story,
    },
    //revalidate: 86400,
  };
};

const Story = ({ story }: any) => {
  console.log("story props", story);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="page-title page-title-story">Story</h1>
        <p className="page-subtitle mb-10">
          Here you can find some notes I wrote for me.
        </p>
        {story?.map((s: any) => (
          <Article key={s.slug} story={s} />
        ))}
      </div>
    </Layout>
  );
};

export default Story;
