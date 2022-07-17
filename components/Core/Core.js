import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { deriveValues } from "../../utils/calculations";
import { GOOD_RATING, YEARS } from "../../utils/constants";
import { useSliderStates } from "../../utils/useSliderStates";
import useVisibility from "../../utils/useVisibility";
import { getYearIdx } from "../../utils/utils";
import Chart from "../Chart/Chart";
import ControlPanel from "../ControlPanel/ControlPanel";
import Footer from "../Footer/Footer";
import Meme from "../Meme/Meme";
import Section from "../Section/Section";
import Status from "../Status/Status";

export default function Core({ setAllGood }) {
  const {
    avgFee,
    setAvgFee,
    feeIsUsd,
    setFeeIsUsd,
    blockSize,
    setBlockSize,
    blockSizeIsMB,
    setBlockSizeIsMB,
    finalMarketCap,
    setFinalMarketCap,
    year,
    setYear,
    feeMemeThreshold,
    setFeeMemeThreshold,
    blockSizeMemeThreshold,
    setBlockSizeMemeThreshold,
    securityMemeThreshold,
    setSecurityMemeThreshold,
    reset,
    resetSettings,
  } = useSliderStates();

  const isVisible = useVisibility((window) => {
    return window.innerWidth > 991 || window.innerWidth < 768;
  });
  const statusVis = useVisibility((window) => {
    return window.innerWidth > 991;
  });

  const yearIdx = getYearIdx(year);
  const {
    marketCap,
    usdMinerReward,
    blockchainSize,
    relativeMinerReward,
    priceAtYear,
    relativeMinerRewardAtYear,
    ratings,
  } = deriveValues({
    avgFee,
    blockSize,
    finalMarketCap,
    feeIsUsd,
    blockSizeIsMB,
    year,
    feeMemeThreshold,
    blockSizeMemeThreshold,
    securityMemeThreshold,
  });

  const { colorMode } = useColorMode();
  useEffect(() => {
    setAllGood(_.every(ratings, (x) => x === GOOD_RATING));
  }, Object.values(ratings));

  return (
    <>
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
          priceAtYear={priceAtYear}
          relativeMinerRewardAtYear={relativeMinerRewardAtYear}
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
      <Footer
        feeMemeThreshold={feeMemeThreshold}
        setFeeMemeThreshold={setFeeMemeThreshold}
        blockSizeMemeThreshold={blockSizeMemeThreshold}
        setBlockSizeMemeThreshold={setBlockSizeMemeThreshold}
        securityMemeThreshold={securityMemeThreshold}
        setSecurityMemeThreshold={setSecurityMemeThreshold}
        resetSettings={resetSettings}
      />
    </>
  );
}
