import {
  CURR_AVG_BLOCK_SIZE_MB,
  CURR_AVG_TRANSACTIONS_PER_BLOCK,
  SATS_PER_BTC,
  START_FUTURE_YEAR,
  START_YEAR,
} from "./constants";

export function getYearIdx(year) {
  return year - START_YEAR;
}

export function getFutureYearIdx(year) {
  return year - START_FUTURE_YEAR;
}

export function mbToTransactions(blockSize) {
  return CURR_AVG_TRANSACTIONS_PER_BLOCK * (blockSize / CURR_AVG_BLOCK_SIZE_MB);
}

export function transactionsToMB(blockSize) {
  return CURR_AVG_BLOCK_SIZE_MB * (blockSize / CURR_AVG_TRANSACTIONS_PER_BLOCK);
}

export function usdToSats(avgFee, priceAtYear) {
  return (avgFee / priceAtYear) * SATS_PER_BTC;
}

export function satsToUsd(avgFee, priceAtYear) {
  return (avgFee / SATS_PER_BTC) * priceAtYear;
}

export function base10Log(x) {
  return Math.log(x) / Math.log(10);
}

export function pow10(x) {
  return Math.pow(10, x);
}
