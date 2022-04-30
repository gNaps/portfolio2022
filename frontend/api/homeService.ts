import axios from "axios";
import { baseQuery, projectsHomeQuery } from "../utils/query.utils";
import { HomeProps } from "./models/HomeProps";

export const getHomeData = async (): Promise<HomeProps> => {
  const homeData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home?${baseQuery}`
  );
  const projectsData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?${projectsHomeQuery}`
  );
  const homeData = { ...homeData_res.data.data.attributes };
  const projectData = { ...projectsData_res.data };
  const { title, description } = homeData;
  const avatar = `${homeData.avatar.data.attributes.url}`;
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
    title,
    description,
    avatar,
    projects,
  };
};
