import { BAD_RATING, GOOD_RATING } from "./constants";
import { getYearIdx } from "./utils";

export function getRating({
  avgFeeUsd,
  relativeMinerReward,
  blockSizePerYear,
  year,
}) {
  const idx = getYearIdx(year);
  const avgFeeRating = avgFeeUsd[idx] < 100 ? GOOD_RATING : BAD_RATING;
  const securityRating =
    relativeMinerReward[idx] > 0.01 ? GOOD_RATING : BAD_RATING;
  const decentralizationRating =
    blockSizePerYear[idx] < 10 ? GOOD_RATING : BAD_RATING;

  return { avgFeeRating, securityRating, decentralizationRating };
}
