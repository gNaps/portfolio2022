import Link from "next/link";
import Image from "next/image";

const Project = ({ project }: any) => {
  return (
    <>
      <div className="flex items-center my-5">
        <div className="flex-1 pr-3">
          <p className="tertiary-text"> {project.year} </p>
          <p>{project.name}</p>
          <p className="secondary-text"> {project.title} </p>
          <div className="flex items-center mt-3">
            <Link href={`project/${project.slug}`}>Try it out</Link>
            <Image
              src={"/link-arrow.svg"}
              alt="Link"
              width={16}
              height={16}
              layout={"fixed"}
            />
          </div>
        </div>
        <div>
          <Image
            src={project.image}
            alt={project.name}
            width={145}
            height={145}
            layout={"fixed"}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
