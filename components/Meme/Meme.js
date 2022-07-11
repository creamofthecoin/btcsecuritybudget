import { Flex } from "@chakra-ui/react";
import "@fontsource/inter/600.css";
import {
  decentralizationMeme,
  feeMeme,
  securityMeme,
} from "../../utils/memeSrc";
import SingleMeme from "./SingleMeme";

export default function Meme({ ratings }) {
  const { avgFeeRating, securityRating, decentralizationRating } = ratings;

  return (
    <Flex
      flexDir={{ base: "row", lg: "column" }}
      zIndex="0"
      gap={{ base: 4, md: 8 }}
    >
      <SingleMeme col={1} memeSrc={feeMeme} rating={avgFeeRating} />
      <SingleMeme
        col={2}
        memeSrc={decentralizationMeme}
        rating={decentralizationRating}
      />
      <SingleMeme col={3} memeSrc={securityMeme} rating={securityRating} />
    </Flex>
  );
}
