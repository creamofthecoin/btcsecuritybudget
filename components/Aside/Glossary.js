import { Box, HStack, Text } from "@chakra-ui/react";
import ModalHeading from "../../utils/ModalHeading";

export default function Glossary() {
  return (
    <>
      <Item image="/memes/good/hope-wojak.png" alt="Happy Wojak">
        <ModalHeading>Happy wojak</ModalHeading>
        <Text>
          Low fees make it easy for the average person to send and receive
          bitcoin.
        </Text>
      </Item>
      <Item image="/memes/bad/pink-upset-wojak.jpg" alt="Pink Upset Wojak">
        <ModalHeading>Sad wojak</ModalHeading>
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
        <ModalHeading>Nicholas Cage meme</ModalHeading>
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
        <ModalHeading>Unlimited power meme</ModalHeading>
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
        <ModalHeading>Rich pepe</ModalHeading>
        <Text>
          The security budget is high, which makes it difficult to perform a 51%
          attack.
        </Text>
      </Item>
      <Item
        image="/memes/bad/bis-wins.png"
        alt="Agustin Carstens of Bank for International Settlements (BIS)"
      >
        <ModalHeading>Agustin Carstens</ModalHeading>
        <Text>
          The security budget is low, making it easier to attack the network and
          weaken bitcoin. Central bankers like this scenario.
        </Text>
      </Item>
    </>
  );
}

function Item({ image, alt, ...props }) {
  return (
    <HStack _notLast={{ marginBottom: "2rem" }} alignItems="flex-start">
      <Box
        backgroundImage={`url(${image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        borderRadius="full"
        minW="100px"
        minH="100px"
        mr="2rem"
      />
      <Box>{props.children}</Box>
    </HStack>
  );
}
