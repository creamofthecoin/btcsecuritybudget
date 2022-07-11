import { HStack } from "@chakra-ui/react";
import MainModal from "../MainModal/MainModal";
import FAQ from "./Faq";
import Glossary from "./Glossary";

export default function Aside() {
  return (
    <HStack>
      <MainModal body={<FAQ />} buttonText="Explanation" />
      <MainModal body={<Glossary />} buttonText="Glossary" />
    </HStack>
  );
}
