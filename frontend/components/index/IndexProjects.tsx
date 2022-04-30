import { HomeProps } from "../../api/models/HomeProps";
import Project from "../shared/Project";

const IndexProjects = ({ projects }: Partial<HomeProps>) => {
  return (
    <>
      <p>Projects ✨</p>
      {projects?.map((p) => (
        <Project key={p.id} project={p} />
      ))}
    </>
  );
};

export default IndexProjects;
