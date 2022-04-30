const Education = ({ education }: any) => {
  return (
    <div className="mb-3">
      <p className="tertiary-text">
        {" "}
        {education.year_start ? education.year_start + "-" : ""}
        {education.year_end}
      </p>
      <p>{education.description}</p>
    </div>
  );
};

export default Education;
