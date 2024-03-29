import Link from "next/link";
import styles from "../../styles/Project.module.scss";

const Project = ({ project }: any) => {
  return (
    <>
      <Link href={project.url} passHref={true}>
        <a target="_blank" rel="noreferrer">
          <div
            className={`p-2 flex md:flex-col gap-5 md:gap-0 items-center px-5 md:px-0 ${styles.container}`}
          >
            <div
              className="w-24 md:w-40 h-24 md:h-40 rounded bg-cover	bg-center"
              style={{ backgroundImage: `url('${project.image}')` }}
            ></div>
            <div className="px-2 flex-1">
              <p className={styles.title}>{project.title}</p>
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Project;
