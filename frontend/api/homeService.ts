import axios from "axios";
import { homeQuery, projectsQuery } from "../utils/query.utils";
import { HomeProps } from "./models/HomeProps";

export const getHomeData = async (): Promise<HomeProps> => {
  const homeData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home?${homeQuery}`
  );
  const projectsData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?${projectsQuery}`
  );
  const homeData = { ...homeData_res.data.data.attributes };
  const projectData = { ...projectsData_res.data };
  const { title, description } = homeData;
  const avatar = `${process.env.NEXT_PUBLIC_API_URL}${homeData.avatar.data.attributes.url}`;
  const projects = projectData.data.map((p: any) => {
    const { id, attributes } = p;
    return {
      id,
      ...attributes,
      image: `${process.env.NEXT_PUBLIC_API_URL}${attributes.image.data.attributes.url}`,
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
