import { Box, Flex, Heading, Image, useColorMode } from "@chakra-ui/react";
import DarkToolTip from "../DarkToolTip/DarkToolTip";
export default function Header() {
  const { colorMode } = useColorMode();
  const clr = colorMode === "light";
  const color = clr ? "black" : "white";

  return (
    <DarkToolTip
      label="Profit motive for participating in mining, and thus securing the Bitcoin network."
      ariaLabel="Short Explanation for Bitcoin Security Budget"
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
            userSelect="none"
          >
            Security Budget
          </Heading>
        </Box>
      </Flex>
    </DarkToolTip>
  );
}
