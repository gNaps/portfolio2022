import { HomeProps } from "../../api/models/HomeProps";
import Project from "../shared/Project";

const IndexProjects = ({ projects }: Partial<HomeProps>) => {
  return (
    <>
      <p className="navigator-title">Featured projects</p>
      <div className="grid md:grid-cols-1 md:grid-cols-3 gap-4">
        {projects?.map((p) => (
          <Project key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
};

export default IndexProjects;
