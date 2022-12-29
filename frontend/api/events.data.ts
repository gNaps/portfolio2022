export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  type: {
    key: string;
    value: string;
  };
}

export const events = [
  {
    id: 1,
    title: "Full stack @ SB Italia",
    description:
      "My first job was as full stack developer in .Net and I worked principally on ERP and CRM applications.",
    date: "Oct 2018",
    type: { key: "job", value: "Job" },
  },
  {
    id: 2,
    title: "Bachelor's degree in computer science",
    description:
      "I graduated with as my thesis the main project I worked on at SB Italy, a framework for developing an ERP: Agevole.",
    date: "Oct 2019",
    type: { key: "education", value: "Education" },
  },
  {
    id: 3,
    title: "Frontend @ Kalpa",
    description:
      "I have decided to focus for a while on frontend as I am also very passionate about UI and UX.",
    date: "Jun 2021",
    type: { key: "job", value: "Job" },
  },
  {
    id: 4,
    title: "Full stack @ ScuolaZoo",
    description:
      "I returned to being a fullstack developer because using NodeJS keeps me within the JavaScript ecosystem. And I moved from consulting to a product company.",
    date: "Sep 2022",
    type: { key: "job", value: "Job" },
  },
];
