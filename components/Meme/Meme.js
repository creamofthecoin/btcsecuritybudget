import { Box, Grid, Heading, Text, Tooltip, VStack } from "@chakra-ui/react";
import "@fontsource/inter/600.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { BAD_RATING, GOOD_RATING } from "../../utils/constants";
export default function Meme({ ratings }) {
  const { avgFeeRating, securityRating, decentralizationRating } = ratings;

  const good = "/memes/good/";
  const bad = "/memes/bad/";
  const feeMeme = {
    [GOOD_RATING]: [
      `${good}hope-wojak.png`,
      "Plebs Win, it's cheap to participate 😊",
      "Fees are low enough for everyone to participate in. Great!",
    ],
    [BAD_RATING]: [
      `${bad}pink-upset-wojak.jpg`,
      "Bankers love this! Fees skyrocket! 😭",
      "Fees are high, creating a bottleneck for average users to participate in the base layer. Banks and other large institutions love this!",
    ],
  };
  const decentralizationMeme = {
    [GOOD_RATING]: [
      `${good}nicholas-cage-hair.gif`,
      "Bitcoin is Safu via Decentralization! 🗽",
      "Bitcoin decentralization ensures a secure and censorship resistant network.",
    ],
    [BAD_RATING]: [
      `${bad}unlimited-power.webp`,
      "Unlimited Power via Centralization! 🔫",
      "Bitcoin's incentives point towards centralization! Governments and large institutions are happy!",
    ],
  };
  const securityMeme = {
    [GOOD_RATING]: [
      `${good}realistic-pepe.jpg`,
      "Cost to Attack is High! 🥰",
      "It is exceedingly cost prohibitive to attack bitcoin right now.",
    ],
    [BAD_RATING]: [
      `${bad}bis-wins.png`,
      "The State Wins! Cost to Attack is Low!! 🤮",
      "Compared to the value of the network, the relative cost to attack is now worth it for state actors to attack!",
    ],
  };

  return (
    <Grid
      gridTemplateRows="1fr 1fr 1fr"
      gridTemplateColumns="1fr 1fr"
      gridTemplateAreas={`"meme1 text1"
                          "meme2 text2"
                          "meme3 text3"`}
      gap={{ base: 4, md: 8 }}
    >
      {/* <Flex
       flexDir={{ base: "row", md: "column" }}
      zIndex="0"
       gap={{ base: 4, md: 8 }}
     > */}
      <SingleMeme
        memeSrc={feeMeme}
        title="Fees"
        rating={avgFeeRating}
        area="1"
      />
      <SingleMeme
        memeSrc={decentralizationMeme}
        title="Decentralization"
        rating={decentralizationRating}
        area="2"
      />
      <SingleMeme
        memeSrc={securityMeme}
        title="Security"
        rating={securityRating}
        area="3"
      />

      <MemeText memeSrc={feeMeme} rating={avgFeeRating} area="1" />
      <MemeText
        memeSrc={decentralizationMeme}
        rating={decentralizationRating}
        area="2"
      />
      <MemeText memeSrc={securityMeme} rating={securityRating} area="3" />
    </Grid>
  );
}

function SingleMeme({ title, memeSrc, rating, area }) {
  // const toast = useToast();
  // const [currRating, setCurrRating] = useState(rating);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const condition = rating === GOOD_RATING ? "180" : "0";

  // useEffect(() => {
  //   if (currRating !== rating) {
  //     setCurrRating(rating);
  //     toast({
  //       title: memeSrc[rating][1],
  //       duration: 1000,
  //       isClosable: true,
  //       position:"top"
  //     });
  //   }
  // }, [rating]);

  const sizes = {
    base: "clamp(2rem, 30vw, 100px)",
    sm: "130px",
    md: "130px",
    lg: "130px",
    xl: "150px",
  };
  return (
    <Grid
      gridarea={`meme${area}`}
      gridTemplateColumns="[c-1] 1fr [c-2]"
      gridTemplateRows="[r-1] 1fr [r-2]"
      w={sizes}
      h={sizes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Heading
        gridColumn="c-1 / c-2"
        gridRow="r-1 / r-2"
        as="h3"
        zIndex="8"
        placeSelf="flex-end center"
        fontSize={{ base: "clamp(0.25rem, 4vw, .9rem)", sm: "md", md: "lg" }}
        userSelect="none"
        textShadow="2px 2px 3px #000000"
        // mt="7rem"
        letterSpacing={{ base: "-0.05rem", md: "-0.05rem" }}
        fontWeight="600"
      >
        {title}
      </Heading>
      <Box
        as={motion.div}
        placeSelf="center"
        gridColumn={`c-1 / c-2`}
        gridRow="r-1 / r-2"
        w="inherit"
        h="inherit"
        // borderRadius="full"
        zIndex="0"
        opacity={isHovered ? "1" : ".75"}
        transition="0.5s"
        sx={{ perspective: "500px" }}
      >
        <Box
          position="relative"
          w="inherit"
          h="inherit"
          sx={{
            transition: "transform 0.45s",
            transformStyle: "preserve-3d",
          }}
          transform={`rotateY(${condition}deg)`}
        >
          <Tooltip
            label={memeSrc[GOOD_RATING][1]}
            aria-label="Tool Tip For a Good Condition"
            bg="gray.900"
            color="white"
            hasArrow
          >
            <Box
              position="absolute"
              w="inherit"
              h="inherit"
              bg="gray.300"
              borderRadius="full"
              overflow="hidden"
              backgroundImage={memeSrc[GOOD_RATING][0]}
              backgroundSize="cover"
              backgroundPosition="center"
            />
          </Tooltip>

          <Tooltip
            label={memeSrc[BAD_RATING][1]}
            aria-label="Tool Tip For a Bad Condition"
            bg="gray.900"
            color="white"
            hasArrow
          >
            <Box
              position="absolute"
              w="inherit"
              h="inherit"
              sx={{ backfaceVisibility: "hidden" }}
              bg="gray.500"
              backgroundImage={memeSrc[BAD_RATING][0]}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="full"
              overflow="hidden"
            />
          </Tooltip>
        </Box>
      </Box>
    </Grid>
  );
}

function MemeText({ memeSrc, rating, area }) {
  return (
    <VStack gridarea={`text${area}`}>
      <Text>{memeSrc[rating][2]}</Text>
    </VStack>
  );
}
