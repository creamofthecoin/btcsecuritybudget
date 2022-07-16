import { Button, Stack } from "@chakra-ui/react";
import MainModal from "../MainModal/MainModal";
import FAQ from "./Faq";
import Glossary from "./Glossary";
import Settings from "./Settings";

export default function Aside({ resetSettings, ...props }) {
  return (
    <Stack
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={{ base: "0.5rem", md: "1rem" }}
    >
      <MainModal
        body={<Settings {...props} />}
        buttonText="Settings"
        size="xl"
        h={{ base: "20rem", md: "18rem" }}
        closeButtonText="OK"
        button={
          <Button borderRadius="full" variant="outline" onClick={resetSettings}>
            Reset
          </Button>
        }
      />
      <MainModal body={<FAQ />} buttonText="Explanation" />
      <MainModal body={<Glossary />} buttonText="Glossary" />
    </Stack>
  );
}
