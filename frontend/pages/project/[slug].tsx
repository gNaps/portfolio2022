import { NextPage } from "next";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { getProjectData, getProjectsData } from "../../api/projectsService";
import styles from "../../styles/Project.module.scss";
import Link from "next/link";
import { markdownToHtml } from "../../utils/utils";

const Project: NextPage<any> = ({ project }) => {
  return (
    <Layout>
      <div className="flex gap-5 items-center mb-20">
        <Image
          src={project.image}
          width={100}
          height={100}
          alt={project.name}
        />
        <h1 className={`${styles.title}`}>{project.name}</h1>
      </div>
      <h1 className={`mb-10 ${styles.subtitle}`}>Overview</h1>
      <div className="flex justify-between gap-5 mb-10">
        <div
          className="paragraph"
          dangerouslySetInnerHTML={{ __html: project.overview }}
        ></div>
        <div className="flex flex-col gap-5 pl-3">
          <div>
            <p className="bold">Stack</p>
            {project.stack.map((s: any) => (
              <p className={styles.stack} key={s}>
                {s}
              </p>
            ))}
          </div>
          <div>
            <p className="bold">Outcomes</p>
            {project.outcomes.map((o: any) => (
              <p className={styles.outcome} key={o}>
                {o}
              </p>
            ))}
          </div>
        </div>
      </div>
      <h1 className={`mb-10 ${styles.subtitle}`}>How</h1>
      <div dangerouslySetInnerHTML={{ __html: project.how }}></div>
      {project.github && (
        <div className="flex items-center mt-10">
          <Link href={project.github}>Source code</Link>
          <Image
            src={"/link-arrow.svg"}
            alt="Link"
            width={16}
            height={16}
            layout={"fixed"}
          />
        </div>
      )}
      {project.demo && (
        <div className="flex items-center mt-3">
          <Link href={project.demo}>Demo online</Link>
          <Image
            src={"/link-arrow.svg"}
            alt="Link"
            width={16}
            height={16}
            layout={"fixed"}
          />
        </div>
      )}
    </Layout>
  );
};

export default Project;

export async function getStaticProps({ params }: any) {
  const data: any = await getProjectData(params.slug);
  const project = data.projects[0];
  project.overview = await markdownToHtml(project.overview);
  project.how = await markdownToHtml(project.how);
  return {
    props: {
      project: {
        ...project,
      },
    },
  };
}

export async function getStaticPaths() {
  const allProjects: any = await getProjectsData();
  return {
    paths: allProjects?.projects?.map((p: any) => `/project/${p.slug}`) || [],
    fallback: true,
  };
}
