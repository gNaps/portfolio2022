import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getHomeData } from "../api/homeService";
import { HomeProps } from "../api/models/HomeProps";
import Layout from "../components/Layout/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  const homeData = await getHomeData();
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
  return <Layout></Layout>;
};

export default Home;
