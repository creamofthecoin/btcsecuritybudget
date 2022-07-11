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
    tooltip: "Plebs Win, it's cheap to participate 😊",
  },
  [BAD_RATING]: {
    title: FEES,
    img: `${bad}pink-upset-wojak.jpg`,
    tooltip: "Bankers love this! Fees skyrocket! 😭",
  },
};
export const decentralizationMeme = {
  [GOOD_RATING]: {
    title: DECENTRALIZATION,
    img: `${good}nicholas-cage-hair.gif`,
    tooltip: "Bitcoin is Safu via Decentralization! 🗽",
  },
  [BAD_RATING]: {
    title: DECENTRALIZATION,
    img: `${bad}unlimited-power.webp`,
    tooltip: "Unlimited Power via Centralization! 🔫",
  },
};
export const securityMeme = {
  [GOOD_RATING]: {
    title: SECURITY,
    img: `${good}realistic-pepe.jpg`,
    tooltip: "Cost to Attack is High! 🥰",
  },
  [BAD_RATING]: {
    title: SECURITY,
    img: `${bad}bis-wins.png`,
    tooltip: "The State Wins! Cost to Attack is Low!! 🤮",
  },
};
