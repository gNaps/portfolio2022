import { HomeProps } from "../../api/models/HomeProps";
import Story from "../shared/Story";

const IndexStories = ({ stories }: Partial<HomeProps>) => {
  return (
    <>
      <p className="navigator-title">Recent stories</p>
      {stories?.map((s) => (
        <Story key={s.slug} story={s} />
      ))}
    </>
  );
};

export default IndexStories;
