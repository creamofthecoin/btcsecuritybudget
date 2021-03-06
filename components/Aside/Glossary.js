import { Box, Stack, Text } from "@chakra-ui/react";
import ModalHeading from "../../utils/ModalHeading";

export default function Glossary() {
  return (
    <>
      <Item image="/memes/good/hope-wojak.png" alt="Happy Wojak">
        <ModalHeading>Low Fees</ModalHeading>
        <Text>
          Low fees make it easy for the average person to send and receive
          bitcoin.
        </Text>
      </Item>
      <Item image="/memes/bad/pink-upset-wojak.jpg" alt="Pink Upset Wojak">
        <ModalHeading>High Fees</ModalHeading>
        <Text>
          High fees make it difficult for the average person to send and receive
          bitcoin. Transactions will be done by those who can afford it, e.g.
          exchanges and banks.
        </Text>
      </Item>
      <Item
        image="/memes/good/nicholas-cage-hair.gif"
        alt="Nicholas Cage Hair In Galaxy"
      >
        <ModalHeading>Decentralized</ModalHeading>
        <Text>
          Small blocks make it easy to download the blockchain and run a full
          node. As a result, more people run their own node, the level of
          decentralization increases, and bitcoin becomes more censorship
          resistant.
        </Text>
      </Item>
      <Item
        image="/memes/bad/unlimited-power.webp"
        alt="Palpatine Unlimited Power Lightning"
      >
        <ModalHeading>Centralized</ModalHeading>
        <Text>
          Large blocks result in more centralization (fewer nodes). In the
          extreme case, there exists only 1 node operator, and this operator has
          total control over what transactions get added to the blockchain.
        </Text>
      </Item>
      <Item
        image="/memes/good/realistic-pepe.jpg"
        alt="Happy Fancy Realistic Pepe"
      >
        <ModalHeading>High Security Budget</ModalHeading>
        <Text>
          The security budget is high, which makes it difficult to perform a 51%
          attack.
        </Text>
      </Item>
      <Item
        image="/memes/bad/bis-wins.png"
        alt="Agustin Carstens of Bank for International Settlements (BIS)"
      >
        <ModalHeading>Low Security Budget</ModalHeading>
        <Text>
          The security budget is low, making it easier to attack the network and
          weaken bitcoin. Central bankers (like Agustin Carstens of BIS) and
          governments are happy with this scenario.
        </Text>
      </Item>
    </>
  );
}

function Item({ image, ...props }) {
  return (
    <Stack
      flexDir={{ base: "column", md: "row" }}
      _notLast={{ marginBottom: "3rem" }}
      alignItems="flex-start"
    >
      <Box
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="full"
        minW={{ base: "clamp(25px, 30vw, 100px)", md: "100px" }}
        minH={{ base: "clamp(25px, 30vw, 100px)", md: "100px" }}
        mr={{ base: "1rem", md: "2rem" }}
        alignSelf={{ base: "center", md: "flex-start" }}
      />
      <Box
        alignSelf="flex-start"
        mt={{ base: "1rem !important", md: "0 !important" }}
      >
        {props.children}
      </Box>
    </Stack>
  );
}
