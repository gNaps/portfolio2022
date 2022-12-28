import Link from "next/link";
import styles from "../../styles/Story.module.scss";

const Story = ({ story }: any) => {
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

export default Story;
