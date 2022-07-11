import { Text } from "@chakra-ui/react";
import ModalHeading from "../../utils/ModalHeading";

export default function Glossary() {
  return (
    <>
      <ModalHeading>Happy wojak</ModalHeading>
      <Text>
        Low fees make it easy for the average person to send and receive
        bitcoin.
      </Text>
      <ModalHeading>Sad wojak</ModalHeading>
      <Text>
        High fees make it difficult for the average person to send and receive
        bitcoin. Transactions will be done by those who can afford it, e.g.
        exchanges and banks.
      </Text>
      <ModalHeading>Nicholas Cage meme</ModalHeading>
      <Text>
        Small blocks make it easy to download the blockchain and run a full
        node. As a result, more people run their own node, the level of
        decentralization increases, and bitcoin becomes more censorship
        resistant.
      </Text>
      <ModalHeading>Unlimited power meme</ModalHeading>
      <Text>
        Large blocks result in more centralization (fewer nodes). In the extreme
        case, there exists only 1 node operator, and this operator has total
        control over what transactions get added to the blockchain.
      </Text>
      <ModalHeading>Rich pepe</ModalHeading>
      <Text>
        The security budget is high, which makes it difficult to perform a 51%
        attack.
      </Text>
      <ModalHeading>Agustin Carstens</ModalHeading>
      <Text>
        The security budget is low, making it easier to attack the network and
        weaken bitcoin. Central bankers like this scenario.
      </Text>
    </>
  );
}
