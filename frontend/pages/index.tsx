import type { GetStaticProps, NextPage } from "next";
import { HomeProps } from "../api/models/HomeProps";
import { projects } from "../api/projects.data";
import { story } from "../api/story.data";
import IndexHeader from "../components/index/IndexHeader";
import IndexProjects from "../components/index/IndexProjects";
import IndexStories from "../components/index/IndexStories";
import Layout from "../components/layoutapp/Layout";
import Hello from "../components/shared/Hello";

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      projects: projects.slice(0, 6),
      stories: story.slice(0, 2),
    },
  };
};

const Home: NextPage<HomeProps> = ({ projects, stories }: HomeProps) => {
  return (
    <Layout>
      <IndexHeader />
      <IndexProjects projects={projects} />
      <IndexStories stories={stories} />
      <Hello />
    </Layout>
  );
};

export default Home;
