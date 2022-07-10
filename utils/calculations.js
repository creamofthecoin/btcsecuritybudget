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
  MARKET_CAP_HISTORY,
  MINER_REWARD_USD_HISTORY,
  NUM_FUTURE_YEARS,
  NUM_HISTORICAL_YEARS,
  SATS_PER_BTC,
} from "./constants";


// t is the amount to translation, t=2: e^-(x-2)
// s is the stretch: s=3: e^-(3x)
function partSigmoid(x, t=0, s=0.05){
  const eST = Math.exp(s*t)
  const eX = Math.exp(-s*(x-t))
  return (eST - eX) / ((1+eX)*(1+eST))
}


function getPriceFuture(finalMarketCap) {
  const finalPrice = finalMarketCap / BTC_SUPPLY_FUTURE[NUM_FUTURE_YEARS-1]
  const logMul = (finalPrice - CURR_PRICE) / partSigmoid(NUM_FUTURE_YEARS)
  return _.range(NUM_FUTURE_YEARS).map(
    (x, idx) => CURR_PRICE + logMul*partSigmoid(idx+1)
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

export function deriveValues({ avgFee, blockSize, finalMarketCap }) {
  const transactionsPerBlock = parseInt(
    CURR_AVG_TRANSACTIONS_PER_BLOCK * (blockSize / CURR_AVG_BLOCK_SIZE_MB)
  );
  const avgFeeInBtc = avgFee / SATS_PER_BTC;
  const totalFees = avgFeeInBtc * transactionsPerBlock * BLOCKS_PER_YEAR; // btc
  const yearlyBlockSize = (blockSize * BLOCKS_PER_YEAR) / 1000; // GB
  const priceFuture = getPriceFuture(finalMarketCap);
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
