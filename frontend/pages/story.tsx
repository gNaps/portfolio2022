import type { GetStaticProps } from "next";
import { StoryProps } from "../api/models/StoryProps";
import { story } from "../api/story.data";
import Layout from "../components/layoutapp/Layout";
import Article from "../components/shared/Article";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      story: story,
    },
  };
};

const Story = ({ story }: StoryProps) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="page-title page-title-story">Story</h1>
        <p className="page-subtitle mb-10">
          Here you can find some notes I wrote for me. (BETA)
        </p>
        {story?.map((s) => (
          <Article key={s.slug} story={s} />
        ))}
      </div>
    </Layout>
  );
};

export default Story;
