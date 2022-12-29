import { HomeProps } from "../../api/models/HomeProps";
import Article from "../shared/Article";

const IndexArticles = ({ stories }: Partial<HomeProps>) => {
  return (
    <>
      <p className="navigator-title">Recent stories</p>
      {stories?.map((s) => (
        <Article key={s.slug} story={s} />
      ))}
    </>
  );
};

export default IndexArticles;
