import { Button, HStack } from "@chakra-ui/react";
import MainModal from "../MainModal/MainModal";
import FAQ from "./Faq";
import Glossary from "./Glossary";
import Settings from "./Settings";

export default function Aside({ resetSettings, ...props }) {
  return (
    <HStack>
      <MainModal
        body={<Settings {...props} />}
        buttonText="Settings"
        size="xl"
        h={{ base: "20rem", md: "18rem" }}
        button={
          <Button borderRadius="full" onClick={resetSettings}>
            Reset
          </Button>
        }
      />
      <MainModal body={<FAQ />} buttonText="Explanation" />
      <MainModal body={<Glossary />} buttonText="Glossary" />
    </HStack>
  );
}
