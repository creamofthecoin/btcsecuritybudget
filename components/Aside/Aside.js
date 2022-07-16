import { Button, Stack } from "@chakra-ui/react";
import MainModal from "../MainModal/MainModal";
import FAQ from "./Faq";
import Glossary from "./Glossary";
import Settings from "./Settings";

export default function Aside(props) {
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
        button={<Button borderRadius="full">Reset</Button>}
      />
      <MainModal body={<FAQ />} buttonText="Explanation" />
      <MainModal body={<Glossary />} buttonText="Glossary" />
    </Stack>
  );
}
