import { BAD_RATING, GOOD_RATING, START_YEAR } from "./constants";

export function getRating({
  avgUsdFeePerYear,
  relativeMinerReward,
  blockSizePerYear,
  year,
}) {
  const idx = year - START_YEAR;
  const avgFeeRating = avgUsdFeePerYear[idx] < 100 ? GOOD_RATING : BAD_RATING;
  const securityRating =
    relativeMinerReward[idx] > 0.01 ? GOOD_RATING : BAD_RATING;
  const decentralizationRating =
    blockSizePerYear[idx] < 10 ? GOOD_RATING : BAD_RATING;

  return { avgFeeRating, securityRating, decentralizationRating };
}
