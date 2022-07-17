import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import update from "immutability-helper";
import _ from "lodash";
import { useCallback, useState } from "react";
import Container from "../components/Container/Container";
import Core from "../components/Core/Core";
import Metatags from "../components/Metatags/Metatags";
import theme from "../theme/theme";
import { GOOD_RATING } from "../utils/constants";

// eslint-disable-next-line import/no-unused-modules
export default function Home() {
  const [beforeOpacity, setBeforeOpacity] = useState(
    theme.styles.global.body._before.opacity
  );
  const [afterOpacity, setAfterOpacity] = useState(
    theme.styles.global.body._after.opacity
  );
  const changeBackground = useCallback(
    (ratings) => {
      if (_.every(ratings, (x) => x === GOOD_RATING)) {
        if (beforeOpacity !== "0") {
          setBeforeOpacity("0");
        }
        if (afterOpacity !== "0.1") {
          setAfterOpacity("0.1");
        }
      } else {
        if (beforeOpacity !== "0.1") {
          setBeforeOpacity("0.1");
        }
        if (afterOpacity !== "0") {
          setAfterOpacity("0");
        }
      }
    },
    [beforeOpacity, afterOpacity]
  );

  const currTheme = update(theme, {
    styles: {
      global: {
        body: {
          _before: { opacity: { $set: beforeOpacity } },
          _after: { opacity: { $set: afterOpacity } },
        },
      },
    },
  });

  return (
    <ChakraProvider theme={currTheme}>
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
          <Core changeBackground={changeBackground} />
        </Container>
      </motion.div>
    </ChakraProvider>
  );
}
