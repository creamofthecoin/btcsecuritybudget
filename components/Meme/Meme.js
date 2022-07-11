import { Flex } from "@chakra-ui/react";
import "@fontsource/inter/600.css";
import { BAD_RATING, GOOD_RATING } from "../../utils/constants";
import SingleMeme from "./SingleMeme";

export default function Meme({ ratings }) {
  const { avgFeeRating, securityRating, decentralizationRating } = ratings;

  const good = "/memes/good/";
  const bad = "/memes/bad/";
  const feeMeme = {
    [GOOD_RATING]: [
      `${good}hope-wojak.png`,
      "Plebs Win, it's cheap to participate 😊",
    ],
    [BAD_RATING]: [
      `${bad}pink-upset-wojak.jpg`,
      "Bankers love this! Fees skyrocket! 😭",
    ],
  };
  const decentralizationMeme = {
    [GOOD_RATING]: [
      `${good}nicholas-cage-hair.gif`,
      "Bitcoin is Safu via Decentralization! 🗽",
    ],
    [BAD_RATING]: [
      `${bad}unlimited-power.webp`,
      "Unlimited Power via Centralization! 🔫",
    ],
  };
  const securityMeme = {
    [GOOD_RATING]: [`${good}realistic-pepe.jpg`, "Cost to Attack is High! 🥰"],
    [BAD_RATING]: [
      `${bad}bis-wins.png`,
      "The State Wins! Cost to Attack is Low!! 🤮",
    ],
  };

  return (
    <Flex
      flexDir={{ base: "row", md: "column" }}
      zIndex="0"
      gap={{ base: 4, md: 8 }}
    >
      <SingleMeme
        col={1}
        memeSrc={feeMeme}
        title="Fees"
        rating={avgFeeRating}
      />
      <SingleMeme
        col={2}
        memeSrc={decentralizationMeme}
        title="Decentralization"
        rating={decentralizationRating}
      />
      <SingleMeme
        col={3}
        memeSrc={securityMeme}
        title="Security"
        rating={securityRating}
      />
    </Flex>
  );
}
