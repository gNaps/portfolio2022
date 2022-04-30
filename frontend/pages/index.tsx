import type { GetStaticProps, NextPage } from "next";
import { getHomeData } from "../api/homeService";
import { HomeProps } from "../api/models/HomeProps";
import IndexHeader from "../components/index/IndexHeader";
import IndexProjects from "../components/index/IndexProjects";
import Layout from "../components/layoutapp/Layout";
import { sortList } from "../utils/utils";

export const getStaticProps: GetStaticProps = async (context) => {
  const homeData = await getHomeData();
  homeData.projects = sortList(homeData.projects, "year", "desc");
  return {
    props: {
      ...homeData,
    },
    revalidate: 86400,
  };
};

const Home: NextPage<HomeProps> = ({
  title,
  avatar,
  description,
  projects,
}) => {
  return (
    <Layout>
      <IndexHeader
        avatar={avatar}
        title={title}
        description={description}
      ></IndexHeader>
      <div className="mt-16">
        <IndexProjects projects={projects}></IndexProjects>
      </div>
    </Layout>
  );
};

export default Home;
