import { HStack } from "@chakra-ui/react";
import MainModal from "../MainModal/MainModal";
import FAQ from "./Faq";
import Glossary from "./Glossary";
import Settings from "./Settings";

export default function Aside() {
  return (
    <HStack>
      <MainModal body={<Settings />} buttonText="Settings" />
      <MainModal body={<FAQ />} buttonText="Explanation" />
      <MainModal body={<Glossary />} buttonText="Glossary" />
    </HStack>
  );
}
