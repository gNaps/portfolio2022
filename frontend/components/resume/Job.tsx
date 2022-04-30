import styles from "./Job.module.scss";

const Job = ({ job }: any) => {
  return (
    <div className="my-10">
      <p>{job.position}</p>
      <p className={styles.company}>{job.company}</p>
      <div className="my-3">
        <span
          className={`${styles.timeline} rounded-lg px-3 py-1 border border-white`}
        >
          📍 {job.year_end ? job.year_end : "Current"} - {job.year_start}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
    </div>
  );
};

export default Job;
