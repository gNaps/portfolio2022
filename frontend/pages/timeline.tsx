import type { GetStaticProps, NextPage } from "next";
import { events } from "../api/events.data";
import { TimelineProps } from "../api/models/TimelineProps";
import Layout from "../components/layoutapp/Layout";
import Job from "../components/shared/Job";
import { sortList } from "../utils/utils";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      events: sortList(events, "id", "desc"),
    },
  };
};

const Timeline = ({ events }: TimelineProps) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="page-title page-title-timeline">Timeline</h1>
        <p className="page-subtitle">
          Some of the most important moments of my career.
        </p>
      </div>
      <div className="mt-10">
        {events?.map((e: any) => (
          <Job key={e.id} event={e} />
        ))}
      </div>
    </Layout>
  );
};

export default Timeline;
