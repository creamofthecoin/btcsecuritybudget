import {
  CURR_AVG_BLOCK_SIZE_MB,
  CURR_AVG_TRANSACTIONS_PER_BLOCK,
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
