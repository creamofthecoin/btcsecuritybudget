import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

function FAQ() {
  return (
    <VStack
      alignItems="stretch"
      w="100%"
      h="70vh"
      overflowY="scroll"
      p="1rem 1.5rem"
    >
      <AsideHeading>What is this website for?</AsideHeading>
      <Text>
        This website shows how bitcoin's security budget is affected by fees,
        block size, price appreciation, and the block reward. A declining
        security budget may become a problem as early as the 2030s. You can help
        keep the future of BTC safe by engaging in discussions about this
        subject, and thinking about potential solutions.
      </Text>

      <AsideHeading>What is the security budget?</AsideHeading>
      <Text>
        The security budget is the amount of money paid to miners, which
        determines the amount that they are willing to invest in mining
        equipment. Note that "security budget" is not an official bitcoin term,
        and it isn't a budget that is set by a committee or governing body. It's
        simply a term used for discussing bitcoin's level of security. An
        alternative term is "total miner reward".
      </Text>
      <AsideHeading>Why is it important?</AsideHeading>
      <Text>
        In a highly competitive environment, profits are driven down, and the
        total cost incurred by all miners will be nearly as much as the security
        budget. Performing a 51% attack requires a miner to have at least 51% of
        the network's hash power. This implies that the miner must incur a cost
        that is at least 51% of the total cost incurred by all miners.
        Therefore, the security budget represents the cost to perform a 51%
        attack on the network.
      </Text>
      <AsideHeading>
        Why worry? Bitcoin has proven all doubters wrong.
      </AsideHeading>
      <Text>
        Past performance doesn't guarantee future performance. What's in store
        for bitcoin is a rapidly declining block reward (newly generated coins),
        which is currently the main component of the security budget. In order
        for the block reward to continue providing the same level of security,
        the value of bitcoin will have to double every 4 years for the next 100+
        years (this is impossible). Hence, the other component of the security
        budget, transaction fees, will need to increase substantially.
      </Text>
      <AsideHeading>
        Transaction fees will be high because of huge transaction volume.
      </AsideHeading>
      <Text>
        Huge transaction volume requires huge block sizes, which results in
        increased node centralization.
      </Text>
      <AsideHeading>Why are large blocks bad?</AsideHeading>
      <Text>
        Large blocks increase the size of the blockchain, and are harder to
        propagate through the network. This makes it more difficult to run a
        full node. A full node sends and receives transactions and new blocks to
        other nodes, and a decentralized network of nodes ensures that no blocks
        or transactions are censored. Censorship resistance is one of the most
        important properties of bitcoin, so it's important to make the barrier
        to running a full node as low as possible. Large blocks increase that
        barrier to entry, which results in fewer nodes and a more centralized
        network.
      </Text>
      <AsideHeading>Small blocks and high fees will be enough.</AsideHeading>
      <Text>
        High fees will prevent average people from using the blockchain. It will
        be used mainly by exchanges/banks, and the average person will be
        deterred from using the blockchain at all. To avoid exorbitant fees,
        people will let banks hold their coins, perform on-chain transactions,
        and move their coins on and off layer 2 networks (e.g. Lightning
        network). This turns bitcoin into a banking system.
      </Text>
      <AsideHeading>
        Miners will mine for the benefit of the network, instead of for profit.
      </AsideHeading>
      <Text>
        This is a big assumption to make without any supporting evidence. If
        there are any miners today that are operating at a loss, they are likely
        doing so in hopes that the value of their bitcoin holdings will rise.
        But this strategy will not make sense as the value of bitcoin becomes
        more stable. This also assumes that bitcoin does not have competition.
        Why would miners operate unprofitably when they can use their resources
        elsewhere, either in other cryptocurrencies or in other asset classes?
        Why would miners be so dedicated to ensuring the value of bitcoin stays
        high (via high security), when there are other ways to preserve or
        increase their wealth?
      </Text>

      <AsideHeading>
        An attacker needs a majority of available low-cost energy.
      </AsideHeading>

      <Text>
        One argument goes like this: "Let X be the amount of energy worldwide
        that can be used to mine bitcoin profitably. As long as a majority of X
        is used for mining, then the network is secure. In other words, an
        attacker needs a majority of X to attack the network." This is wrong
        because an attacker does not need to make a profit. An attacker (e.g.
        government) may want to take down bitcoin by reducing confidence in its
        security. There is no profit motive, so they would be willing to use
        non-profitable energy sources to obtain 51% of the hash power.
      </Text>
    </VStack>
  );
}

export default function Aside() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        borderRadius="full"
        maxW="fit-content"
        size="lg"
        fontWeight="black"
      >
        Why?
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size="2xl">
        <ModalOverlay
          isCentered
          // bg="rgba(26,32,44, 0.5)"
          bg="rgba(0,0,0, 0.66)"
          backdropFilter="blur(10px)"
        />
        <ModalContent opacity="0.5" bg="gray.900">
          <ModalHeader />
          <ModalCloseButton borderRadius="full" />
          <ModalBody>
            <FAQ />
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="full" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function AsideHeading(props) {
  return <Heading size="lg">{props.children}</Heading>;
}
