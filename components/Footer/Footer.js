import { Image, Link, VStack } from "@chakra-ui/react";
import Aside from "../Aside/Aside";
import Section from "../Section/Section";

export default function Footer() {
  return (
    <Section outerPy="5rem" flexDir="column">
      <VStack gap={5}>
        <Aside />
        <Link target="_blank" href="http://github.com/" zIndex="1" w="32px">
          <Image src="/github-logo.png" />
        </Link>
      </VStack>
    </Section>
  );
}
