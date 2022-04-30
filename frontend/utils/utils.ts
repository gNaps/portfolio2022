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
