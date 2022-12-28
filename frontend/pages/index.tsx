import type { GetStaticProps, NextPage } from "next";
import { getHomeData } from "../api/homeService";
import { HomeProps } from "../api/models/HomeProps";
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
      projects: [
        {
          image: "/projects/oakbot.jpeg",
          title: "OakBot",
          description: "Telegram bot for pokemon trainer",
          slug: "oakbot",
        },
        {
          image: "/projects/pokerdle.png",
          title: "Pokerdle",
          description: "Wordle mini games with pokemons",
          slug: "pokerdle",
        },
        {
          image: "/projects/desiderando.jpg",
          title: "Desiderando",
          description: "Web applications for giftlists",
          slug: "desiderando",
        },
        {
          image: "/projects/magic-link.jpg",
          title: "Magic link",
          description: "API for passwordless login",
          slug: "magic-link",
        },
        {
          image: "/projects/flownerd.jpg",
          title: "Flownerd",
          description: "Social network for nerd guys",
          slug: "flownerd",
        },
        {
          image: "/projects/licks-nft.jpeg",
          title: "Licks NFT",
          description: "Musical NFT generator",
          slug: "licks-nft",
        },
      ],
      stories: [
        {
          slug: "difference-equals-js",
          title: "Differences between == and === in JS",
          description:
            "The == and === operands are used to compare if two values are equal. The == operand loosely compares two values, thus it can be used in cases where the data type of...",
          date: "Nov 23, 2022",
        },
        {
          slug: "prisma-beginners",
          title: "Prisma for beginners",
          description:
            "My personal notes for begin with prisma. All commands terminal to launch a new project with...",
          date: "Dec 24, 2021",
        },
      ],
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
