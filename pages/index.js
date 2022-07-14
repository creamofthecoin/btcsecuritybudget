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
  YEARS,
} from "../utils/constants";
import { getRating } from "../utils/getRating";
import useVisibility from "../utils/useVisibility";
import { getYearIdx } from "../utils/utils";

const initMarketCap = 1e14;
const initYear = 2032;

// eslint-disable-next-line import/no-unused-modules
export default function Home() {
  const [avgFee, setAvgFee] = useState(CURR_AVG_FEE); // usd or sats
  const [feeIsUsd, setFeeIsUsd] = useState(true);
  const [blockSize, setBlockSize] = useState(CURR_AVG_BLOCK_SIZE_MB); // megabytes or # transactions
  const [blockSizeIsMB, setBlockSizeIsMB] = useState(true);
  const [finalMarketCap, setFinalMarketCap] = useState(initMarketCap); // market cap in END_YEAR
  const [year, setYear] = useState(initYear);
  const yearIdx = getYearIdx(year);
  const isVisible = useVisibility((window) => {
    return window.innerWidth > 991 || window.innerWidth < 768;
  });
  const statusVis = useVisibility((window) => {
    return window.innerWidth > 991;
  });

  function reset() {
    setAvgFee(CURR_AVG_FEE);
    setFeeIsUsd(true);
    setBlockSize(CURR_AVG_BLOCK_SIZE_MB);
    setBlockSizeIsMB(true);
    setFinalMarketCap(initMarketCap);
    setYear(initYear);
  }

  const {
    priceFuture,
    transactionsPerBlock,
    avgFeeUsd,
    marketCap,
    usdMinerReward,
    blockchainSize,
    relativeMinerReward,
    blockSizePerYear,
  } = deriveValues({
    avgFee,
    blockSize,
    finalMarketCap,
    feeIsUsd,
    blockSizeIsMB,
  });

  const ratings = getRating({
    avgFeeUsd,
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
              feeIsUsd={feeIsUsd}
              setFeeIsUsd={setFeeIsUsd}
              blockSize={blockSize}
              setBlockSize={setBlockSize}
              blockSizeIsMB={blockSizeIsMB}
              setBlockSizeIsMB={setBlockSizeIsMB}
              finalMarketCap={finalMarketCap}
              setFinalMarketCap={setFinalMarketCap}
              year={year}
              setYear={setYear}
              priceFuture={priceFuture}
              transactionsPerBlock={transactionsPerBlock}
              relativeMinerReward={relativeMinerReward}
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
