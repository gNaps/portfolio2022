import axios from "axios";
import { baseQuery, projectDetailQuery } from "../utils/query.utils";
import { ProjectsProps } from "./models/ProjectsProps";

export const getProjectsData = async (): Promise<ProjectsProps> => {
  const projectsData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?${baseQuery}`
  );
  const projectData = { ...projectsData_res.data };
  const projects = projectData.data.map((p: any) => {
    const { id, attributes } = p;
    return {
      id,
      ...attributes,
      image: `${attributes.image.data.attributes.url}`,
      stack: attributes.stack.data.map((a: any) => a.attributes.name),
      outcomes: attributes.outcomes.data.map((o: any) => o.attributes.name),
    };
  });

  return {
    projects,
  };
};

export const getProjectData = async (slug: string): Promise<ProjectsProps> => {
  const projectsData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?${projectDetailQuery(
      slug
    )}`
  );
  const projectData = { ...projectsData_res.data };
  const projects = projectData.data.map((p: any) => {
    const { id, attributes } = p;
    return {
      id,
      ...attributes,
      image: `${attributes.image.data.attributes.url}`,
      stack: attributes.stack.data.map((a: any) => a.attributes.name),
      outcomes: attributes.outcomes.data.map((o: any) => o.attributes.name),
    };
  });

  return {
    projects,
  };
};
