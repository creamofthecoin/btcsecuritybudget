import { BAD_RATING, GOOD_RATING } from "./constants";
import { getYearIdx } from "./utils";

export function getRatings({
  avgFeeUsd,
  relativeMinerReward,
  blockSizePerYear,
  year,
  feeMemeThreshold,
  blockSizeMemeThreshold,
  securityMemeThreshold,
}) {
  const idx = getYearIdx(year);
  const avgFeeRating =
    avgFeeUsd[idx] < feeMemeThreshold ? GOOD_RATING : BAD_RATING;
  const securityRating =
    relativeMinerReward[idx] > securityMemeThreshold / 100
      ? GOOD_RATING
      : BAD_RATING;
  const decentralizationRating =
    blockSizePerYear[idx] < blockSizeMemeThreshold ? GOOD_RATING : BAD_RATING;

  return { avgFeeRating, securityRating, decentralizationRating };
}
