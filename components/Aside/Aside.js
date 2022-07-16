import { Button, HStack } from "@chakra-ui/react";
import MainModal from "../MainModal/MainModal";
import FAQ from "./Faq";
import Glossary from "./Glossary";
import Settings from "./Settings";

export default function Aside(props) {
  return (
    <HStack>
      <MainModal
        body={<Settings {...props} />}
        buttonText="Settings"
        size="sm"
        h="40vh"
        button={<Button borderRadius="full">Reset</Button>}
      />
      <MainModal body={<FAQ />} buttonText="Explanation" />
      <MainModal body={<Glossary />} buttonText="Glossary" />
    </HStack>
  );
}
