import _ from "lodash";
import {
  AVERAGE_FEE_HISTORY,
  BLOCKCHAIN_SIZE_HISTORY,
  BLOCKSIZE_HISTORY,
  BLOCKS_PER_YEAR,
  BLOCK_REWARD_FUTURE,
  BTC_SUPPLY_FUTURE,
  CURR_PRICE,
  MARKET_CAP_HISTORY,
  MINER_REWARD_USD_HISTORY,
  NUM_FUTURE_YEARS,
  NUM_HISTORICAL_YEARS,
  SATS_PER_BTC,
} from "./constants";
import { getRatings } from "./getRatings";
import {
  getFutureYearIdx,
  getYearIdx,
  mbToTransactions,
  transactionsToMB,
} from "./utils";

// t is the amount to translation, t=33: e^-(x-33)
// s is the stretch: s=0.05: e^-0.05(x-33)
function partSigmoid(x, t = 33, s = 0.05) {
  const eST = Math.exp(s * t);
  const eX = Math.exp(-s * (x - t));
  return (eST - eX) / ((1 + eX) * (1 + eST));
}

function getPriceFuture(finalMarketCap) {
  const finalPrice = finalMarketCap / BTC_SUPPLY_FUTURE[NUM_FUTURE_YEARS - 1];
  const logMul = (finalPrice - CURR_PRICE) / partSigmoid(NUM_FUTURE_YEARS);
  return _.range(NUM_FUTURE_YEARS).map(
    (x, idx) => CURR_PRICE + logMul * partSigmoid(idx + 1)
  );
}

function getAvgFeeUsd(priceFuture, avgFee, feeIsUsd) {
  if (feeIsUsd) {
    return AVERAGE_FEE_HISTORY.concat(Array(NUM_FUTURE_YEARS).fill(avgFee));
  }
  const avgFeeInBtc = avgFee / SATS_PER_BTC;
  return AVERAGE_FEE_HISTORY.concat(priceFuture.map((x) => x * avgFeeInBtc));
}

function getMarketCap(priceFuture) {
  const marketCapFuture = priceFuture.map((x, i) => x * BTC_SUPPLY_FUTURE[i]);
  return MARKET_CAP_HISTORY.concat(marketCapFuture);
}

function getUsdMinerReward(priceFuture, avgFeeUsd, transactionsPerBlock) {
  const usdMinerRewardFuture = BLOCK_REWARD_FUTURE.map(
    (x, i) =>
      x * priceFuture[i] +
      avgFeeUsd[NUM_HISTORICAL_YEARS + i] *
        transactionsPerBlock *
        BLOCKS_PER_YEAR
  );
  return MINER_REWARD_USD_HISTORY.concat(usdMinerRewardFuture);
}

function getBlockSizePerYear(blockSize) {
  return BLOCKSIZE_HISTORY.concat(Array(NUM_FUTURE_YEARS).fill(blockSize));
}

function getBlockchainSize(yearlyBlockSize) {
  const blockchainSizeFuture = _.range(NUM_FUTURE_YEARS).map(
    (x) =>
      (x + 1) * yearlyBlockSize +
      BLOCKCHAIN_SIZE_HISTORY[NUM_HISTORICAL_YEARS - 1]
  );
  return BLOCKCHAIN_SIZE_HISTORY.concat(blockchainSizeFuture);
}

export function deriveValues({
  avgFee,
  blockSize,
  finalMarketCap,
  feeIsUsd,
  blockSizeIsMB,
  year,
  feeMemeThreshold,
  blockSizeMemeThreshold,
  securityMemeThreshold,
}) {
  const [transactionsPerBlock, mbPerBlock] = blockSizeIsMB
    ? [mbToTransactions(blockSize), blockSize]
    : [blockSize, transactionsToMB(blockSize)];
  const yearlyBlockSize = (mbPerBlock * BLOCKS_PER_YEAR) / 1000; // GB
  const priceFuture = getPriceFuture(finalMarketCap);
  const avgFeeUsd = getAvgFeeUsd(priceFuture, avgFee, feeIsUsd);
  const usdMinerReward = getUsdMinerReward(
    priceFuture,
    avgFeeUsd,
    transactionsPerBlock
  );
  const marketCap = getMarketCap(priceFuture);
  const relativeMinerReward = usdMinerReward.map((x, i) => x / marketCap[i]);
  const blockSizePerYear = getBlockSizePerYear(mbPerBlock);
  const blockchainSize = getBlockchainSize(yearlyBlockSize);
  const priceAtYear = priceFuture[getFutureYearIdx(year)];
  const relativeMinerRewardAtYear = relativeMinerReward[getYearIdx(year)];

  const ratings = getRatings({
    avgFeeUsd,
    relativeMinerReward,
    blockSizePerYear,
    year,
    feeMemeThreshold,
    blockSizeMemeThreshold,
    securityMemeThreshold,
  });

  return {
    marketCap,
    usdMinerReward,
    blockchainSize,
    relativeMinerReward,
    priceAtYear,
    relativeMinerRewardAtYear,
    ratings,
  };
}
