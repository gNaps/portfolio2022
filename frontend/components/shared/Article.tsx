import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";
import styles from "../../styles/Story.module.scss";

const Article = ({ story }: any) => {
  const theme = useTheme();
  return (
    <div className="mb-10">
      <Link href={`project/${story.slug}`}>
        <a className={styles.title}>{story.title}</a>
      </Link>
      <p className={styles.description}>{story.description}</p>
      <p className={styles.date}>{story.date}</p>
    </div>
  );
};

export default Article;
