import { Box, ChakraProvider, useColorMode } from "@chakra-ui/react";
import _ from "lodash";
import Head from "next/head";
import { useState } from "react";
import Chart from "../components/Chart/Chart";
import Container from "../components/Container/Container";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import Footer from "../components/Footer/Footer";
import Meme from "../components/Meme/Meme";
import Section from "../components/Section/Section";
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

export default function Home() {
  const [blockSize, setBlockSize] = useState(CURR_AVG_BLOCK_SIZE_MB); // megabytes
  const [avgFee, setAvgFee] = useState(CURR_AVG_FEE); // sats
  const [yearlyPriceIncrease, setYearlyPriceIncrease] = useState(1); // percent increase per year
  const [year, setYear] = useState(2032);
  const yearIdx = year - START_YEAR;

  const {
    transactionsPerBlock,
    avgUsdFeePerYear,
    marketCap,
    usdMinerReward,
    blockchainSize,
    relativeMinerReward,
    usdCostToAttack,
    blockSizePerYear,
  } = deriveValues({ avgFee, blockSize, yearlyPriceIncrease });

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
            yearlyPriceIncrease={yearlyPriceIncrease}
            setYearlyPriceIncrease={setYearlyPriceIncrease}
            year={year}
            setYear={setYear}
            transactionsPerBlock={transactionsPerBlock}
            relativeMinerReward={relativeMinerReward}
            usdCostToAttack={usdCostToAttack}
            colorMode={colorMode}
            ratings={ratings}
          />
          <Box
            // ml={{ base: "0", lg: "-5rem" }}
            display={{ base: "inline-block", md: "none", lg: "inline-block" }}
          >
            <Meme ratings={ratings} />
          </Box>

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

function Metatags() {
  return (
    <Head>
      <title>
        BTC Security Budget | Bitcoin Decentralization | Bitcoin Miner Reward
      </title>
      <meta
        name="description"
        content="Bitcoin security budget: The block reward is vanishing, and depending on transaction fees for security may not be a sufficient incentive to keep up with network value (or market cap). State actors are also motivated by ideology, not profit. So, help us keep BTC safe by engaging in the discussion."
      ></meta>
      <meta
        property="og:title"
        content="BTC Security Budget | Bitcoin Decentralization | Bitcoin Miner Reward"
        key="title"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
}
