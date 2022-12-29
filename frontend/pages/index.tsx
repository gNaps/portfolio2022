import type { GetStaticProps, NextPage } from "next";
import { getHomeData } from "../api/homeService";
import { HomeProps } from "../api/models/HomeProps";
import { projects } from "../api/projects.data";
import { story } from "../api/story.data";
import IndexHeader from "../components/index/IndexHeader";
import IndexProjects from "../components/index/IndexProjects";
import IndexStories from "../components/index/IndexStories";
import Layout from "../components/layoutapp/Layout";
import Hello from "../components/shared/Hello";
import { sortList } from "../utils/utils";

export const getStaticProps: GetStaticProps = async (context) => {
  //const homeData = await getHomeData();
  //homeData.projects = sortList(homeData.projects, "year", "desc");
  return {
    props: {
      projects: projects.filter((p) => p.isHome),
      stories: story.filter((s) => s.isHome),
    },
    //revalidate: 86400,
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
