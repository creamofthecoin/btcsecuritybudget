import { BAD_RATING, GOOD_RATING } from "./constants";

const good = "/memes/good/";
const bad = "/memes/bad/";
const FEES = "Fees";
const DECENTRALIZATION = "Decentralization";
const SECURITY = "Security";

export const feeMeme = {
  [GOOD_RATING]: {
    title: FEES,
    img: `${good}hope-wojak.png`,
    tooltip: "Plebs win! It's cheap to participate 😊",
    status: "Low Fees 😊",
  },
  [BAD_RATING]: {
    title: FEES,
    img: `${bad}pink-upset-wojak.jpg`,
    tooltip: "Banks love this! Fees Skyrocket 😭",
    status: "High Fees 😭",
  },
};
export const decentralizationMeme = {
  [GOOD_RATING]: {
    title: DECENTRALIZATION,
    img: `${good}nicholas-cage-hair.gif`,
    tooltip: "Decentralized & Censorship Resistant 🗽",
    status: "Decentralized 🗽",
  },
  [BAD_RATING]: {
    title: DECENTRALIZATION,
    img: `${bad}unlimited-power.webp`,
    tooltip: "Centralized & Censorable 🔫",
    status: "Centralized 🔫",
  },
};
export const securityMeme = {
  [GOOD_RATING]: {
    title: SECURITY,
    img: `${good}realistic-pepe.jpg`,
    tooltip: "Bitcoin's security is ensured! 🥰",
    status: "Security Budget is High 🥰",
  },
  [BAD_RATING]: {
    title: SECURITY,
    img: `${bad}bis-wins.png`,
    tooltip: "Bitcoin is too attractive to attack! 🤮",
    status: "Security budget is Low 🤮",
  },
};
