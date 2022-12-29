export interface Story {
  slug: string;
  title: string;
  description: string;
  date: string;
  url: string;
  isHome: boolean;
}

export const story = [
  {
    slug: "difference-equals-js",
    title: "Differences between == and === in JS",
    description:
      "The == and === operands are used to compare if two values are equal. The == operand loosely compares two values, thus it can be used in cases where the data type of...",
    date: "Nov 23, 2022",
    url: "https://github.com/gNaps/personal-notes/blob/main/differences-equals-js.md",
    isHome: true,
  },
  {
    slug: "prisma-beginners",
    title: "Prisma for beginners",
    description:
      "My personal notes for begin with prisma. All commands terminal to launch a new project with...",
    date: "Dec 24, 2021",
    url: "",
    isHome: true,
  },
];
