import _ from "lodash";
import {
  AVERAGE_FEE_HISTORY,
  BLOCKCHAIN_SIZE_HISTORY,
  BLOCKSIZE_HISTORY,
  BLOCKS_PER_YEAR,
  BLOCK_REWARD_FUTURE,
  BTC_SUPPLY_FUTURE,
  CURR_AVG_BLOCK_SIZE_MB,
  CURR_AVG_TRANSACTIONS_PER_BLOCK,
  CURR_PRICE,
  FUTURE_YEARS,
  MARKET_CAP_HISTORY,
  MINER_REWARD_USD_HISTORY,
  NUM_HISTORICAL_YEARS,
  SATS_PER_BTC,
} from "./constants";

function getPriceFuture(yearlyPriceIncrease) {
  return _.range(FUTURE_YEARS.length).map(
    (x, idx) => CURR_PRICE * (1 + yearlyPriceIncrease / 100) ** (idx + 1)
  );
}

function getAvgUsdFeePerYear(priceFuture, avgFeeInBtc) {
  const avgUsdFeePerYearFuture = priceFuture.map((x) => x * avgFeeInBtc);
  return AVERAGE_FEE_HISTORY.concat(avgUsdFeePerYearFuture);
}

function getMarketCap(priceFuture) {
  const marketCapFuture = priceFuture.map((x, i) => x * BTC_SUPPLY_FUTURE[i]);
  return MARKET_CAP_HISTORY.concat(marketCapFuture);
}

function getUsdMinerReward(totalFees, priceFuture) {
  const usdMinerRewardFuture = BLOCK_REWARD_FUTURE.map(
    (x, i) => (x + totalFees) * priceFuture[i]
  );
  return MINER_REWARD_USD_HISTORY.concat(usdMinerRewardFuture);
}

function getBlockSizePerYear(blockSize) {
  return BLOCKSIZE_HISTORY.concat(Array(FUTURE_YEARS.length).fill(blockSize));
}

function getBlockchainSize(yearlyBlockSize) {
  const blockchainSizeFuture = _.range(FUTURE_YEARS.length).map(
    (x) =>
      (x + 1) * yearlyBlockSize +
      BLOCKCHAIN_SIZE_HISTORY[NUM_HISTORICAL_YEARS - 1]
  );
  return BLOCKCHAIN_SIZE_HISTORY.concat(blockchainSizeFuture);
}

export function deriveValues({ avgFee, blockSize, yearlyPriceIncrease }) {
  const transactionsPerBlock = parseInt(
    CURR_AVG_TRANSACTIONS_PER_BLOCK * (blockSize / CURR_AVG_BLOCK_SIZE_MB)
  );
  const avgFeeInBtc = avgFee / SATS_PER_BTC;
  const totalFees = avgFeeInBtc * transactionsPerBlock * BLOCKS_PER_YEAR; // btc
  const yearlyBlockSize = (blockSize * BLOCKS_PER_YEAR) / 1000; // GB
  const priceFuture = getPriceFuture(yearlyPriceIncrease);
  const avgUsdFeePerYear = getAvgUsdFeePerYear(priceFuture, avgFeeInBtc);
  const usdMinerReward = getUsdMinerReward(totalFees, priceFuture);
  const marketCap = getMarketCap(priceFuture);
  const usdCostToAttack = usdMinerReward.map((x) => x * 0.51);
  const relativeMinerReward = usdMinerReward.map((x, i) => x / marketCap[i]);
  const blockSizePerYear = getBlockSizePerYear(blockSize);
  const blockchainSize = getBlockchainSize(yearlyBlockSize);

  return {
    transactionsPerBlock,
    avgUsdFeePerYear,
    marketCap,
    usdMinerReward,
    blockchainSize,
    relativeMinerReward,
    usdCostToAttack,
    blockSizePerYear,
  };
}
