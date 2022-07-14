import { START_FUTURE_YEAR, START_YEAR } from "./constants";

export function getYearIdx(year) {
  return year - START_YEAR;
}

export function getFutureYearIdx(year) {
  return year - START_FUTURE_YEAR;
}
