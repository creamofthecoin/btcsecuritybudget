import {
  Box,
  Flex,
  Heading,
  Image,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";

export default function Header() {
  const { colorMode } = useColorMode();
  const clr = colorMode === "light";
  const color = clr ? "black" : "white";

  return (
    <Tooltip
      label="Profit motive for participating in mining, and thus securing the Bitcoin network."
      aria-label="Short Explanation for Bitcoin Security Budget"
      bg="gray.900"
      color="white"
      hasArrow
    >
      <Flex flexDir="row" alignItems="center" w="100%" mb="3rem">
        <Image
          w="24px"
          src="/btc-logo.png"
          mr="1rem"
          gridRow="a / b"
          gridColumn="start / end"
          opacity={clr ? "0.3" : "1"}
          zIndex="1"
          alt="Bitcoin / BTC logo"
        />

        {/* <Spacer display={{ base: "none", xl: "inline-block" }} /> */}
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: "1.125rem", lg: "1rem", xl: "1.125rem" }}
            letterSpacing=".2em"
            textTransform="uppercase"
            fontWeight="400"
            zIndex="5"
            // mt="5rem"
            color={color}
            whiteSpace="nowrap"
          >
            Security Budget
          </Heading>
        </Box>
      </Flex>
    </Tooltip>
  );
}
