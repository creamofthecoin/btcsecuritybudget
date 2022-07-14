import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import _ from "lodash";
import { useState } from "react";
import Chart from "../components/Chart/Chart";
import Container from "../components/Container/Container";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import Footer from "../components/Footer/Footer";
import Meme from "../components/Meme/Meme";
import Metatags from "../components/Metatags/Metatags";
import Section from "../components/Section/Section";
import Status from "../components/Status/Status";
import theme from "../theme/theme";
import { deriveValues } from "../utils/calculations";
import {
  CURR_AVG_BLOCK_SIZE_MB,
  CURR_AVG_FEE,
  GOOD_RATING,
  START_YEAR,
  YEARS,
} from "../utils/constants";
import { getRating } from "../utils/getRating";
import useVisibility from "../utils/useVisibility";

const initMarketCap = 1e13;
const initYear = 2032;

export default function Home() {
  const [blockSize, setBlockSize] = useState(CURR_AVG_BLOCK_SIZE_MB); // megabytes
  const [avgFee, setAvgFee] = useState(CURR_AVG_FEE); // sats
  const [finalMarketCap, setFinalMarketCap] = useState(initMarketCap); // market cap in END_YEAR
  const [year, setYear] = useState(initYear);
  const yearIdx = year - START_YEAR;
  const isVisible = useVisibility((window) => {
    return window.innerWidth > 991 || window.innerWidth < 768;
  });
  const statusVis = useVisibility((window) => {
    return window.innerWidth > 991;
  });

  function reset() {
    setBlockSize(CURR_AVG_BLOCK_SIZE_MB);
    setAvgFee(CURR_AVG_FEE);
    setFinalMarketCap(initMarketCap);
    setYear(initYear);
  }

  const {
    transactionsPerBlock,
    avgUsdFeePerYear,
    marketCap,
    usdMinerReward,
    blockchainSize,
    relativeMinerReward,
    usdCostToAttack,
    blockSizePerYear,
  } = deriveValues({ avgFee, blockSize, finalMarketCap });

  const ratings = getRating({
    avgUsdFeePerYear,
    relativeMinerReward,
    blockSizePerYear,
    year,
  });
  const { colorMode } = useColorMode();

  if (_.every(ratings, (x) => x === GOOD_RATING)) {
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
          <Section>{statusVis && <Status ratings={ratings} />}</Section>
          <Section
            flexDir={{ base: "column", lg: "row" }}
            alignItems="center"
            gap={{ base: 5, md: 0, xl: 10 }}
            outerMt="2rem"
          >
            <ControlPanel
              avgFee={avgFee}
              setAvgFee={setAvgFee}
              blockSize={blockSize}
              setBlockSize={setBlockSize}
              finalMarketCap={finalMarketCap}
              setFinalMarketCap={setFinalMarketCap}
              year={year}
              setYear={setYear}
              transactionsPerBlock={transactionsPerBlock}
              relativeMinerReward={relativeMinerReward}
              usdCostToAttack={usdCostToAttack}
              colorMode={colorMode}
              ratings={ratings}
              isVisible={isVisible}
              reset={reset}
            />
            {isVisible && <Meme ratings={ratings} />}
            {!statusVis && <Status ratings={ratings} />}
            <Chart
              xAxisLabels={YEARS}
              marketCap={marketCap}
              usdMinerReward={usdMinerReward}
              blockchainSize={blockchainSize}
              relativeMinerReward={relativeMinerReward}
              yearIdx={yearIdx}
            />
          </Section>
          <Footer />
        </Container>
      </motion.div>
    </ChakraProvider>
  );
}
