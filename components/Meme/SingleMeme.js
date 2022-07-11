import { Box, Grid, Heading, Tooltip } from "@chakra-ui/react";
import "@fontsource/inter/600.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { BAD_RATING, GOOD_RATING } from "../../utils/constants";

export default function SingleMeme({ memeSrc, rating }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const condition = rating === GOOD_RATING ? "180" : "0";

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
      <Heading
        gridColumn="c-1 / c-2"
        gridRow="r-1 / r-2"
        as="h3"
        zIndex="8"
        placeSelf="flex-end center"
        fontSize={{ base: "clamp(0.25rem, 4vw, .9rem)", sm: "md", md: "lg" }}
        userSelect="none"
        textShadow="2px 2px 3px #000000"
        letterSpacing={{ base: "-0.05rem", md: "-0.05rem" }}
        fontWeight="600"
      >
        {memeSrc[rating].title}
      </Heading>
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
      >
        <Tooltip
          label={memeSrc[rating].tooltip}
          aria-label="Tool Tip For a Good/Bad Condition"
          bg="gray.900"
          color="white"
          hasArrow
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
        </Tooltip>
      </Box>
    </Grid>
  );
}
