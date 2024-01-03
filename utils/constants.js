import _ from "lodash";

// 2011 to 2023
// Average transaction fee (USD) per year
// https://bitcoinvisuals.com/chain-fees-tx-usd
export const AVERAGE_FEE_HISTORY = [
  0.011, 0.008, 0.104, 0.101, 0.05, 0.155, 4.809, 2.897, 1.253, 2.896, 10.008,
  1.345, 4.192,
];

// 2011 to 2023
// Average block size (MB) per year
// https://bitcoinvisuals.com/chain-block-size
export const BLOCKSIZE_HISTORY = [
  0.013, 0.065, 0.148, 0.245, 0.468, 0.771, 0.941, 0.892, 1.073, 1.175, 1.226,
  1.347, 1.666,
];

// 2011 to 2023
// Blockchain size in GB at end of each year
// https://bitcoinvisuals.com/chain-size
export const BLOCKCHAIN_SIZE_HISTORY = [
  0.857, 4.625, 14.017, 28.564, 54.434, 96.929, 149.941, 198.101, 255.841,
  318.685, 382.992, 446.055, 538.094,
];

// 2011 to 2023
// Average market cap (USD) per year
// https://bitcoinvisuals.com/market-cap
export const MARKET_CAP_HISTORY = [
  43283692, 80525000, 2242262476, 6844553536, 3978407382, 8900502518,
  66693167841, 130154700622, 131589002207, 204720845766, 892271740364,
  538126698800, 559772107322,
];

// 2011 to 2023
// Block reward per year in USD.
// https://bitcoinvisuals.com/chain-block-reward-day
const BLOCK_REWARD_USD_HISTORY = [
  17565380, 20967412, 313177087, 785138214, 374080759, 558867339, 2805024365,
  5222149099, 5035180518, 4670828738, 15666770910, 9430954591, 9708757075,
];

// 2011 to 2023
// Transaction fees per year in USD.
// https://bitcoinvisuals.com/chain-fees-day
const FEE_USD_HISTORY = [
  29979, 64752, 2230226, 2448777, 2343884, 13654163, 549288904, 284117417,
  155664608, 324274306, 1018498664, 142147315, 796513429,
];

export const MINER_REWARD_USD_HISTORY = BLOCK_REWARD_USD_HISTORY.map(
  (x, i) => x + FEE_USD_HISTORY[i]
);

export const NUM_HISTORICAL_YEARS = BLOCKCHAIN_SIZE_HISTORY.length;
export const START_YEAR = 2011;
export const START_FUTURE_YEAR = 2024;
export const END_YEAR = 2140;
export const NUM_FUTURE_YEARS = END_YEAR - START_FUTURE_YEAR + 1;

// https://www.blockchain.com/charts#block
export const BLOCKS_PER_YEAR = 52560; //6*24*365
const CURR_BLOCK_REWARD = 6.25; // block reward in btc
export const CURR_AVG_BLOCK_SIZE_MB = 1.77; // megabytes
export const CURR_AVG_TRANSACTIONS_PER_BLOCK = 3832; // 30 day average end of 2023
export const CURR_AVG_FEE = 19.37; // USD, 30 day average end of 2023
export const CURR_PRICE = 42509; // 30-day average USD price of btc end of 2023
const LAST_HISTORICAL_SUPPLY = 19565527; // number of btc end of 2023
const PAST_YEARS = _.range(START_YEAR, START_FUTURE_YEAR);
const FUTURE_YEARS = _.range(START_FUTURE_YEAR, END_YEAR + 1);
export const YEARS = PAST_YEARS.concat(FUTURE_YEARS);

// btc block reward per year starting 2024
export const BLOCK_REWARD_FUTURE = FUTURE_YEARS.map(
  (x) =>
    BLOCKS_PER_YEAR *
    CURR_BLOCK_REWARD *
    Math.pow(2, -Math.floor((x - START_FUTURE_YEAR + 3) / 4))
);

// btc supply at the end of each year, starting 2024
export const BTC_SUPPLY_FUTURE = BLOCK_REWARD_FUTURE.slice(1).reduce(
  (prev, curr) => [...prev, prev[prev.length - 1] + curr],
  [LAST_HISTORICAL_SUPPLY + BLOCK_REWARD_FUTURE[0]]
);

export const SATS_PER_BTC = 100000000;

export const GOOD_RATING = "GOOD";
export const BAD_RATING = "BAD";
