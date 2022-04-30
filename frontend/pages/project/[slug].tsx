import { NextPage } from "next";
import Layout from "../../components/layout/Layout";
import { useRouter } from "next/router";
import { getProjectData, getProjectsData } from "../../api/projectsService";

const Project: NextPage<any> = ({ project }) => {
  const r = useRouter();
  const { slug } = r.query;

  //   console.log("slug", slug);
  console.log("project", project);
  return (
    <Layout>
      <h1>{slug} ✨</h1>
    </Layout>
  );
};

export default Project;

export async function getStaticProps({ params }: any) {
  const data: any = await getProjectData(params.slug);
  // const content = await markdownToHtml(data?.posts[0]?.content || '')
  const project = data.projects[0];
  return {
    props: {
      project: {
        ...project,
        //content,
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
