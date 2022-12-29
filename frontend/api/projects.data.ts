export interface Projects {
  image: string;
  title: string;
  description: string;
  slug: string;
  url: string;
}

export const projects: Projects[] = [
  {
    image: "/projects/oakbot.jpeg",
    title: "OakBot",
    description: "Telegram bot for pokemon trainer",
    slug: "oakbot",
    url: "https://t.me/napsryu_pokedex_bot",
  },
  {
    image: "/projects/pokerdle.png",
    title: "Pokerdle",
    description: "Wordle mini games with pokemons",
    slug: "pokerdle",
    url: "https://pokerdle.vercel.app/",
  },
  {
    image: "/projects/desiderando.jpg",
    title: "Desiderando",
    description: "Web applications for giftlists",
    slug: "desiderando",
    url: "https://github.com/gNaps/desiderando-api",
  },
  {
    image: "/projects/magic-link.jpg",
    title: "Magic link",
    description: "API for passwordless login",
    slug: "magic-link",
    url: "https://github.com/gNaps/magic-link-prisma",
  },
  {
    image: "/projects/flownerd.jpg",
    title: "Flownerd",
    description: "Social network for nerd guys",
    slug: "flownerd",
    url: "https://github.com/gNaps/flownerd-backend",
  },
  {
    image: "/projects/licks-nft.jpeg",
    title: "Licks NFT",
    description: "Musical NFT generator",
    slug: "licks-nft",
    url: "https://github.com/gNaps/Chainlink-Random-Licks",
  },
];
