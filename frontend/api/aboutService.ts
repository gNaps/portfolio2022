import axios from "axios";
import { baseQuery } from "../utils/query.utils";
import { markdownToHtml } from "../utils/utils";
import { AboutProps } from "./models/AboutProps";

export const getAboutData = async (): Promise<AboutProps> => {
  const aboutData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/about?${baseQuery}`
  );
  const aboutData = { ...aboutData_res.data.data.attributes };
  const about = await markdownToHtml(aboutData.about);
  const avatar = `${aboutData.avatar.data.attributes.url}`;

  const skillsData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/skills`
  );
  const skillsData = { ...skillsData_res.data };

  return {
    about,
    avatar,
    skills: skillsData.data.map((s: any) => s.attributes.name),
  };
};
