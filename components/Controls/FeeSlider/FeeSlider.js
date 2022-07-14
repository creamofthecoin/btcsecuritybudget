import { SATS_PER_BTC } from "../../../utils/constants";
import { TWO_DECIMALS } from "../../../utils/numberFormats";
import {
  base10Log,
  getFutureYearIdx,
  satsToUsd,
  usdToSats,
} from "../../../utils/utils";
import LogSlider from "../LogSlider/LogSlider";

function unitsLabel(feeIsUsd) {
  return feeIsUsd ? "USD" : "sats";
}

function minMaxUsd(minSats, maxSats, priceAtYear) {
  return [
    base10Log(satsToUsd(minSats, priceAtYear)),
    base10Log(satsToUsd(maxSats, priceAtYear)),
  ];
}

const minSats = 1;
const maxSats = SATS_PER_BTC;

export default function FeeSlider({
  avgFee,
  setAvgFee,
  feeIsUsd,
  setFeeIsUsd,
  priceFuture,
  year,
}) {
  const twoDecimals = new Intl.NumberFormat("en", TWO_DECIMALS);
  const priceAtYear = priceFuture[getFutureYearIdx(year)];
  const [min, max] = feeIsUsd
    ? minMaxUsd(minSats, maxSats, priceAtYear)
    : [base10Log(minSats), base10Log(maxSats)];
  const equivalent = feeIsUsd
    ? usdToSats(avgFee, priceAtYear)
    : satsToUsd(avgFee, priceAtYear);

  function onLabelClick() {
    setFeeIsUsd((x) => !x);
    setAvgFee(equivalent);
  }

  const toolTipLabel = `${twoDecimals.format(equivalent)} ${unitsLabel(
    !feeIsUsd
  )}`;

  return (
    <LogSlider
      label="Average Fee"
      output={`${twoDecimals.format(avgFee)} ${unitsLabel(feeIsUsd)}`}
      value={avgFee}
      onChange={setAvgFee}
      min={min}
      max={max}
      step={0.01}
      cursor="pointer"
      toolTipLabel={toolTipLabel}
      onLabelClick={onLabelClick}
    />
  );
}
