import { remark } from "remark";
import html from "remark-html";

export const getRandomEmoji = () => {
  const n = Math.floor(Math.random() * 6);
  switch (n) {
    case 0:
      return "🎉";
    case 1:
      return "🔥";
    case 2:
      return "❤️";
    case 3:
      return "👻";
    case 4:
      return "👓";
    case 5:
      return "✨";
  }
};

export const markdownToHtml = async (markdown: any) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export const sortList = (list: any[], field: string, dir: "desc" | "asc") => {
  return dir === "asc"
    ? list.sort((a, b) => (a[field] > b[field] ? 1 : -1))
    : list.sort((a, b) => (a[field] < b[field] ? 1 : -1));
};
