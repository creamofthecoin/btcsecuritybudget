import _ from "lodash";

// 2011 to 2022
// Average transaction fee (USD) per year
// https://www.blockchain.com/charts/fees-usd-per-transaction
export const AVERAGE_FEE_HISTORY = [
  0.011, 0.008, 0.104, 0.101, 0.05, 0.155, 4.809, 2.897, 1.253, 2.896, 10.008,
  1.743,
];

// 2011 to 2022
// Average block size (MB) per year
// https://www.blockchain.com/charts/avg-block-size
export const BLOCKSIZE_HISTORY = [
  0.013, 0.065, 0.148, 0.245, 0.468, 0.771, 0.941, 0.892, 1.073, 1.175, 1.226,
  1.182,
];

// 2011 to 2022
// Blockchain size in GB at end of each year (July for 2022)
// https://www.blockchain.com/charts/blocks-size
export const BLOCKCHAIN_SIZE_HISTORY = [
  0.857, 4.625, 14.017, 28.564, 54.434, 96.929, 149.941, 198.101, 255.841,
  318.685, 382.992, 414.483,
];

// 2011 to 2022
// Average market cap (USD) per year
// https://www.blockchain.com/charts/market-cap
export const MARKET_CAP_HISTORY = [
  43283692, 80525000, 2242262476, 6844553536, 3978407382, 8900502518,
  66693167841, 130154700622, 131589002207, 204720845766, 892271740364,
  688832716093,
];

// 2011 to 2022
// Block reward per year in USD. Value for 2022 is calculated by 2 * reward through June 2022.
// https://bitcoinvisuals.com/chain-block-reward-day
const BLOCK_REWARD_USD_HISTORY = [
  17565380, 20967412, 313177087, 785138214, 374080759, 558867339, 2805024365,
  5222149099, 5035180518, 4670828738, 15666770910, 12281813936,
];

// 2011 to 2022
// Transaction fees per year in USD. Value for 2022 is calculated by 2 * fees through June 2022.
// https://bitcoinvisuals.com/chain-fees-day
const FEE_USD_HISTORY = [
  29979, 64752, 2230226, 2448777, 2343884, 13654163, 549288904, 284117417,
  155664608, 324274306, 1018498664, 165944078,
];

export const MINER_REWARD_USD_HISTORY = BLOCK_REWARD_USD_HISTORY.map(
  (x, i) => x + FEE_USD_HISTORY[i]
);

export const NUM_HISTORICAL_YEARS = BLOCKCHAIN_SIZE_HISTORY.length;
export const START_YEAR = 2011;
export const START_FUTURE_YEAR = 2023;
export const END_YEAR = 2140;

// https://www.blockchain.com/charts#block
export const BLOCKS_PER_YEAR = 52560; //6*24*365
const CURR_BLOCK_REWARD = 6.25; // block reward, July 2022
export const CURR_AVG_BLOCK_SIZE_MB = 1.2; // megabytes, July 2022
export const CURR_AVG_TRANSACTIONS_PER_BLOCK = 1800; // July 2022
export const CURR_AVG_FEE = 7000; // sats, July 2022
export const CURR_PRICE = 24360; // 30-day average USD price of btc, July 2022
const LAST_HISTORICAL_SUPPLY = 18915425 + BLOCKS_PER_YEAR * CURR_BLOCK_REWARD; // number of btc end of 2022 (# at end of 2021 + expected number for 2022)
const PAST_YEARS = _.range(START_YEAR, START_FUTURE_YEAR);
export const FUTURE_YEARS = _.range(START_FUTURE_YEAR, END_YEAR + 1);
export const YEARS = PAST_YEARS.concat(FUTURE_YEARS);

// btc block reward per year starting 2023
export const BLOCK_REWARD_FUTURE = FUTURE_YEARS.map(
  (x) =>
    BLOCKS_PER_YEAR *
    CURR_BLOCK_REWARD *
    Math.pow(2, -Math.floor((x - START_FUTURE_YEAR + 3) / 4))
);

// btc supply at the end of each year, starting 2023
export const BTC_SUPPLY_FUTURE = BLOCK_REWARD_FUTURE.slice(1).reduce(
  (prev, curr) => [...prev, prev[prev.length - 1] + curr],
  [LAST_HISTORICAL_SUPPLY + BLOCK_REWARD_FUTURE[0]]
);

export const SATS_PER_BTC = 100000000;

export const GOOD_RATING = "GOOD";
export const BAD_RATING = "BAD";
