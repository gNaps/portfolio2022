import styles from "../../styles/Job.module.scss";

const Job = ({ event }: any) => {
  return (
    <div className="flex">
      {/* <p>{job.position}</p>
      <p className={styles.company}>{job.company}</p>
      <div className="my-3">
        <span
          className={`${styles.timeline} rounded-lg px-3 py-1 border border-white`}
        >
          📍 {job.year_end ? job.year_end : "Current"} - {job.year_start}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: job.description }}></div> */}
      <p className={`${styles.date} py-8`}>{event.date}</p>
      <div className="px-3 py-8 border-l border-black dark:border-white flex flex-col">
        <span className={`${styles.type} ${styles[event.type.key]}`}>
          {event.type.value}
        </span>
        <h4 className="font-bold mb-2">{event.title}</h4>
        <p className="font-light">{event.description}</p>
      </div>
    </div>
  );
};

export default Job;
