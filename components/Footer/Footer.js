import { Image, Link, VStack } from "@chakra-ui/react";
import Aside from "../Aside/Aside";
import Section from "../Section/Section";

export default function Footer() {
  return (
    <Section outerPy="2rem" flexDir="column">
      <VStack gap={5}>
        <Aside />
        <Link
          target="_blank"
          href="https://github.com/creamofthecoin/btcsecuritybudget"
          zIndex="1"
          w="32px"
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
