export interface Story {
  slug: string;
  title: string;
  description: string;
  date: string;
  url: string;
}

export const story: Story[] = [
  {
    slug: "difference-equals-js",
    title: "Differences between == and === in JS",
    description:
      "The == and === operands are used to compare if two values are equal. The == operand loosely compares two values, thus it can be used in cases where the data type of...",
    date: "Nov 23, 2022",
    url: "https://github.com/gNaps/personal-notes/blob/main/differences-equals-js.md",
  },
  {
    slug: "rxjs-operators",
    title:
      "RXJS: difference between forkjoin / zip / combineLast and withLatestFrom",
    description:
      "Per unire informazioni da più observables bisogna utilizzare i combination operators...",
    date: "Sep 17, 2022",
    url: "https://github.com/gNaps/personal-notes/blob/main/rxjs-zip-combineLast-withLatestFrom-forkJoin.md",
  },
  {
    slug: "oauth-twitch",
    title: "OAuth twitch",
    description:
      "Bisogna registrare la propria app sulla console dev di twitch in modo da avere client_id e client_secret. Twitch supporta 3 differenti token...",
    date: "Mar 03, 2022",
    url: "https://github.com/gNaps/personal-notes/blob/main/oauth-twitch-api.md",
  },
  {
    slug: "prisma-beginners",
    title: "Prisma for beginners",
    description:
      "Una volta costruito il Database importare nel proprio progetto prisma con yarn. Utilizzare quindi la cli di prisma tramite i comandi...",
    date: "Dec 24, 2021",
    url: "https://github.com/gNaps/personal-notes/blob/main/prisma-beginner.md",
  },
];
