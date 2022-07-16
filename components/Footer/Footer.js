import { Image, Link, Text, VStack } from "@chakra-ui/react";
import Aside from "../Aside/Aside";
import Section from "../Section/Section";

export default function Footer(props) {
  return (
    <Section outerPy="2rem" flexDir="column">
      <VStack gap={5}>
        <Aside {...props} />
        <Text p="0 !important" fontSize="xs" color="gray.100">
          A thought experiment on the profit motive for participating in mining,
          and thus securing the Bitcoin network.
        </Text>
        <Link
          target="_blank"
          href="https://github.com/creamofthecoin/btcsecuritybudget"
          zIndex="1"
          w="32px"
          opacity="0.75"
        >
          <Image
            src="/github-logo.png"
            alt="Link to BTC Security Budget's Github page."
          />
        </Link>
      </VStack>
    </Section>
  );
}
