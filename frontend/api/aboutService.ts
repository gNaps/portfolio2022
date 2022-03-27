import axios from "axios";
import { baseQuery } from "../utils/query.utils";
import { AboutProps } from "./models/AboutProps";

export const getAboutData = async (): Promise<AboutProps> => {
  const aboutData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/about?${baseQuery}`
  );
  const aboutData = { ...aboutData_res.data.data.attributes };
  const { about } = aboutData;
  const avatar = `${process.env.NEXT_PUBLIC_API_URL}${aboutData.avatar.data.attributes.url}`;

  return {
    about,
    avatar,
  };
};
