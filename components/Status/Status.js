import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import _ from "lodash";
import React from "react";
import {
  decentralizationMeme,
  feeMeme,
  securityMeme,
} from "../../utils/memeSrc";
import { useFadeInOut } from "./useFadeInOut";

function Status({ ratings }) {
  const duration = 200;
  const [currRatings, fade] = useFadeInOut(ratings, duration);
  const { avgFeeRating, securityRating, decentralizationRating } = currRatings;

  return (
    <Stack
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: 1, xl: 10 }}
      bg="rgba(0,0,0,0.125)"
      borderRadius="3xl"
      w="100%"
      py="1rem"
      px="1rem"
      mt="2rem"
      justifyContent="center"
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <SingleStatus
        memeSrc={feeMeme}
        rating={avgFeeRating}
        fade={fade}
        duration={duration}
      />
      <SingleStatus
        memeSrc={decentralizationMeme}
        rating={decentralizationRating}
        fade={fade}
        duration={duration}
      />
      <SingleStatus
        memeSrc={securityMeme}
        rating={securityRating}
        fade={fade}
        duration={duration}
      />
    </Stack>
  );
}

function SingleStatus({ memeSrc, rating, fade, duration }) {
  const fadeStyle = {
    transition: `opacity ${duration}ms ease`,
    opacity: fade ? 1 : 0,
  };
  return (
    <HStack m="0 !important" p="0 0.5rem">
      <Heading
        as="h3"
        p="0"
        m="0 .25rem 0 0 !important"
        fontSize="xs"
        fontWeight="900"
        color="gray.300"
        {...fadeStyle}
      >
        {`${memeSrc[rating].title}:`}
      </Heading>

      <Text
        p="0"
        m="0"
        fontSize="xs"
        fontWeight="600"
        color="gray.400"
        {...fadeStyle}
      >
        {memeSrc[rating].tooltip}
      </Text>
    </HStack>
  );
}

export default React.memo(Status, _.isEqual);
