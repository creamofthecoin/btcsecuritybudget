export const PERCENT_3_DECIMALS = {
  style: "percent",
  minimumFractionDigits: 0,
  maximumFractionDigits: 3,
};

export const PERCENT_3_SIGFIGS = {
  style: "percent",
  maximumSignificantDigits: 3,
};

export const COMPACT = { notation: "compact" };

export const TWO_DECIMALS = {
  notation: "standard",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const STANDARD_NO_GROUPING = {
  notation: "standard",
  useGrouping: false,
  maximumFractionDigits: 20,
};

export const THREE_SIGFIGS = {
  minimumSignificantDigits: 3,
  maximumSignificantDigits: 3,
  useGrouping: false,
};
