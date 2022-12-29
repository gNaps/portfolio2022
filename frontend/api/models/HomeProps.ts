import { Projects } from "../projects.data";
import { Story } from "../story.data";

export interface HomeProps {
  projects: Projects[];
  stories: Story[];
}
