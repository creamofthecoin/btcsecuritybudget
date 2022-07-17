import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../components/Container/Container";
import Core from "../components/Core/Core";
import Metatags from "../components/Metatags/Metatags";
import theme from "../theme/theme";

// eslint-disable-next-line import/no-unused-modules
export default function Home() {
  const [allGood, setAllGood] = useState([]);
  if (allGood) {
    theme.styles.global.body._before.opacity = "0";
    theme.styles.global.body._after.opacity = "0.1";
  } else {
    theme.styles.global.body._before.opacity = "0.1";
    theme.styles.global.body._after.opacity = "0";
  }

  return (
    <ChakraProvider theme={theme}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          backgroundColor: "#1A202C",
          position: "fixed",
          height: "100%",
          width: "100%",
          display: "grid",
          top: "0",
          bottom: "0",
          right: "0",
          left: "0",
          placeItems: "center",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.33 }}
      >
        <Container center={true}>
          <Metatags />
          <Core setAllGood={setAllGood} />
        </Container>
      </motion.div>
    </ChakraProvider>
  );
}
