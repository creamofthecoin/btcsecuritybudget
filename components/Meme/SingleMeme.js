import { Box, Grid, Heading } from "@chakra-ui/react";
import "@fontsource/inter/600.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { BAD_RATING, GOOD_RATING } from "../../utils/constants";
import { useFadeInOut } from "../../utils/useFadeInOut";
import DarkToolTip from "../DarkToolTip/DarkToolTip";

export default function SingleMeme({ memeSrc, rating }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const condition = rating === GOOD_RATING ? "180" : "0";
  const [[title], fadeStyle] = useFadeInOut([memeSrc[rating].meme]);

  const sizes = {
    base: "clamp(2rem, 30vw, 100px)",
    sm: "130px",
    md: "130px",
    lg: "130px",
    xl: "150px",
  };

  return (
    <Grid
      gridTemplateColumns="[c-1] 1fr [c-2]"
      gridTemplateRows="[r-1] 1fr [r-2]"
      w={sizes}
      h={sizes}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        gridColumn="c-1 / c-2"
        gridRow="r-1 / r-2"
        h="min-content"
        w="min-content"
        py=".1rem"
        px=".5rem"
        borderRadius="full"
        placeSelf="flex-end center"
        zIndex="3"
      >
        <Heading
          as="h3"
          zIndex="8"
          fontSize={{ base: "clamp(0.25rem, 4vw, .9rem)", sm: "md", md: "lg" }}
          userSelect="none"
          textShadow="2px 2px 3px #000000, 0px 0px 4px rgba(0, 0 , 0, 1)"
          letterSpacing={{ base: "-0.05rem", md: "-0.05rem" }}
          fontWeight="600"
          whiteSpace="nowrap"
          {...fadeStyle}
          color="white"
        >
          {title}
        </Heading>
      </Box>
      <Box
        as={motion.div}
        placeSelf="center"
        gridColumn={`c-1 / c-2`}
        gridRow="r-1 / r-2"
        w="inherit"
        h="inherit"
        zIndex="0"
        opacity={isHovered ? "1" : ".75"}
        transition="0.5s"
        sx={{ perspective: "500px" }}
        // bg={rating === GOOD_RATING ? "green.500" : "red.500"}
        bg="black"
        borderRadius="full"
      >
        <DarkToolTip
          label={memeSrc[rating].tooltip}
          ariaLabel="Tool Tip For a Good/Bad Condition"
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
            <Box
              position="absolute"
              w="inherit"
              h="inherit"
              bg="gray.300"
              borderRadius="full"
              overflow="hidden"
              backgroundImage={memeSrc[GOOD_RATING].img}
              backgroundSize="cover"
              backgroundPosition="center"
            />

            <Box
              position="absolute"
              w="inherit"
              h="inherit"
              sx={{ backfaceVisibility: "hidden" }}
              bg="gray.500"
              backgroundImage={memeSrc[BAD_RATING].img}
              backgroundSize="cover"
              backgroundPosition="center"
              borderRadius="full"
              overflow="hidden"
            />
          </Box>
        </DarkToolTip>
      </Box>
    </Grid>
  );
}
