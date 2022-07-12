import { HStack, Stack, Text } from "@chakra-ui/react";
import _ from "lodash";
import React from "react";
import { GOOD_RATING } from "../../utils/constants";
import {
  decentralizationMeme,
  feeMeme,
  securityMeme,
} from "../../utils/memeSrc";
import { useFadeInOut } from "../../utils/useFadeInOut";

function Status({ ratings }) {
  const [currRatings, fadeStyle] = useFadeInOut(ratings);
  const { avgFeeRating, securityRating, decentralizationRating } = currRatings;

  return (
    <Stack
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: 1, xl: 10 }}
      bg={{ base: "rgba(0,0,0,0.5)", lg: "rgba(0,0,0,0.125)" }}
      borderRadius="3xl"
      w="100%"
      minH={{ base: "auto", lg: "auto" }}
      py="1rem"
      px="1rem"
      mt={{ base: "1.5rem", lg: "2rem" }}
      mb={{ base: "0", sm: "1rem", lg: "0" }}
      justifyContent="center"
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <SingleStatus
        memeSrc={feeMeme}
        rating={avgFeeRating}
        fadeStyle={fadeStyle}
      />
      <SingleStatus
        memeSrc={decentralizationMeme}
        rating={decentralizationRating}
        fadeStyle={fadeStyle}
      />
      <SingleStatus
        memeSrc={securityMeme}
        rating={securityRating}
        fadeStyle={fadeStyle}
      />
    </Stack>
  );
}

function SingleStatus({ memeSrc, rating, fadeStyle }) {
  return (
    <HStack m="0 !important" p="0 0.5rem">
      <Text
        p="0"
        m="0 .25rem 0 0 !important"
        // fontSize={{ base: "xs", md: "sm" }}
        fontSize="xs"
        fontWeight="900"
        alignSelf="flex-start"
        color={rating === GOOD_RATING ? "green.300" : "red.300"}
        {...fadeStyle}
      >
        {`${memeSrc[rating].meme}:`}
      </Text>

      <Text
        p="0"
        m="0"
        // fontSize={{ base: "xs", md: "sm" }}
        fontSize="xs"
        fontWeight="600"
        color="gray.400"
        {...fadeStyle}
      >
        {memeSrc[rating].status}
      </Text>
    </HStack>
  );
}

export default React.memo(Status, _.isEqual);
