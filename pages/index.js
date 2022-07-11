import { ChakraProvider, useColorMode } from "@chakra-ui/react";
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

export default function Home() {
  const [blockSize, setBlockSize] = useState(CURR_AVG_BLOCK_SIZE_MB); // megabytes
  const [avgFee, setAvgFee] = useState(CURR_AVG_FEE); // sats
  const [finalMarketCap, setFinalMarketCap] = useState(1e13); // market cap in END_YEAR
  const [year, setYear] = useState(2032);
  const yearIdx = year - START_YEAR;
  const isVisible = useVisibility(
    (window) => window.innerWidth > 991 || window.innerWidth < 768
  );

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
      <Container center={true}>
        <Metatags />
        <Section>
          <Status />
        </Section>
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
          />
          {isVisible && <Meme ratings={ratings} />}

          <Chart
            xAxisLabels={YEARS}
            marketCap={marketCap}
            usdMinerReward={usdMinerReward}
            blockchainSize={blockchainSize}
            yearIdx={yearIdx}
          />
        </Section>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
