import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import _ from "lodash";
import React from "react";
import {
  decentralizationMeme,
  feeMeme,
  securityMeme,
} from "../../utils/memeSrc";

function Status({ ratings }) {
  const { avgFeeRating, securityRating, decentralizationRating } = ratings;

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
      <SingleStatus memeSrc={feeMeme} rating={avgFeeRating} />
      <SingleStatus
        memeSrc={decentralizationMeme}
        rating={decentralizationRating}
      />
      <SingleStatus memeSrc={securityMeme} rating={securityRating} />
    </Stack>
  );
}

function SingleStatus({ memeSrc, rating }) {
  return (
    <HStack m="0 !important" p="0 0.5rem">
      <motion.div layout="position">
        <Heading
          as="h3"
          p="0"
          m="0 .25rem 0 0 !important"
          fontSize="xs"
          fontWeight="900"
          color="gray.300"
        >
          {`${memeSrc[rating].title}:`}
        </Heading>

        <Text p="0" m="0" fontSize="xs" fontWeight="600" color="gray.400">
          {memeSrc[rating].tooltip}
        </Text>
      </motion.div>
    </HStack>
  );
}

export default React.memo(Status, _.isEqual);
