import type { GetStaticProps, NextPage } from "next";
import { ResumeProps } from "../api/models/ResumeProps";
import { getResumeData } from "../api/resumeService";
import Layout from "../components/layoutapp/Layout";
import Education from "../components/resume/Education";
import Job from "../components/resume/Job";
import { markdownToHtml } from "../utils/utils";

export const getStaticProps: GetStaticProps = async (context) => {
  const resumeData = await getResumeData();
  await resumeData.jobs.forEach(async (j) => {
    j.description = await markdownToHtml(j.description);
  });
  return {
    props: {
      ...resumeData,
    },
    revalidate: 86400,
  };
};

const About: NextPage<ResumeProps> = ({ jobs, educations }) => {
  return (
    <Layout>
      <h1 className="mb-3">Resume 💼</h1>
      <div className="border-l border-white relative px-3 paragraph">
        {jobs.map((j, index) => (
          <Job key={index} job={j} />
        ))}
      </div>
      <h1 className="mb-3">Education 🎓</h1>
      {educations.map((e, index) => (
        <Education key={index} education={e} />
      ))}
    </Layout>
  );
};

export default About;
