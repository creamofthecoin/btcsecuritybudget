import { useCallback } from "react";
import { CURR_AVG_BLOCK_SIZE_MB, CURR_AVG_FEE } from "../utils/constants";
import { useLocalStorage } from "../utils/useLocalStorage";

const initMarketCap = 1e14;
const initYear = 2032;
const initFeeMemeThreshold = 100;
const initBlockSizeMemeThreshold = 10;
const initSetSecurityMemeThreshold = 1;

export function useSliderStates() {
  const [avgFee, setAvgFee] = useLocalStorage("avgFee", CURR_AVG_FEE); // usd or sats
  const [feeIsUsd, setFeeIsUsd] = useLocalStorage("feeIsUsd", true);
  const [blockSize, setBlockSize] = useLocalStorage(
    "blockSize",
    CURR_AVG_BLOCK_SIZE_MB
  ); // megabytes or # transactions
  const [blockSizeIsMB, setBlockSizeIsMB] = useLocalStorage(
    "blockSizeIsMB",
    true
  );
  const [finalMarketCap, setFinalMarketCap] = useLocalStorage(
    "finalMarketCap",
    initMarketCap
  ); // market cap in END_YEAR
  const [year, setYear] = useLocalStorage("year", initYear);

  const [feeMemeThreshold, setFeeMemeThreshold] = useLocalStorage(
    "feeMemeThreshold",
    initFeeMemeThreshold
  );
  const [blockSizeMemeThreshold, setBlockSizeMemeThreshold] = useLocalStorage(
    "blockSizeMemeThreshold",
    initBlockSizeMemeThreshold
  );
  const [securityMemeThreshold, setSecurityMemeThreshold] = useLocalStorage(
    "securityMemeThreshold",
    initSetSecurityMemeThreshold
  );

  const reset = useCallback(() => {
    setAvgFee(CURR_AVG_FEE);
    setFeeIsUsd(true);
    setBlockSize(CURR_AVG_BLOCK_SIZE_MB);
    setBlockSizeIsMB(true);
    setFinalMarketCap(initMarketCap);
    setYear(initYear);
  }, []);

  const resetSettings = useCallback(() => {
    setFeeMemeThreshold(initFeeMemeThreshold);
    setBlockSizeMemeThreshold(initBlockSizeMemeThreshold);
    setSecurityMemeThreshold(initSetSecurityMemeThreshold);
  }, []);

  return {
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
  };
}
