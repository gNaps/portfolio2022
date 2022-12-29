import Link from "next/link";
import styles from "../../styles/Story.module.scss";

const Article = ({ story }: any) => {
  return (
    <div className="mb-10">
      <Link href={story.url} passHref={true}>
        <a className={styles.title} target={"_blank"}>
          {story.title}
        </a>
      </Link>
      <p className={styles.description}>{story.description}</p>
      <p className={styles.date}>{story.date}</p>
    </div>
  );
};

export default Article;
