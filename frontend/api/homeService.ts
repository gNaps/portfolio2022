import axios from "axios";
import { HomeProps } from "./models/HomeProps";

export const getHomeData = async (): Promise<HomeProps> => {
  const homeData_res = await axios.get(
    "http://localhost:1337/api/home?populate=%2A"
  );
  const homeData = { ...homeData_res.data.data.attributes };
  const { title, description } = homeData;
  const avatar = homeData.avatar.data.attributes.url;

  return {
    title,
    description,
    avatar,
  };
};
