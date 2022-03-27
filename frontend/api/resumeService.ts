import axios from "axios";
import { ResumeProps } from "./models/ResumeProps";

export const getResumeData = async (): Promise<ResumeProps> => {
  const jobData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/jobs`
  );
  const jobData = { ...jobData_res.data };

  const educationsData_res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/educations`
  );
  const educationsData = { ...educationsData_res.data };

  return {
    jobs: jobData.data.map((j: any) => ({ ...j.attributes })),
    educations: educationsData.data.map((e: any) => ({ ...e.attributes })),
  };
};
