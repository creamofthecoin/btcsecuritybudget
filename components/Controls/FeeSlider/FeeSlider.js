import { SATS_PER_BTC } from "../../../utils/constants";
import { TWO_DECIMALS } from "../../../utils/numberFormats";
import { getFutureYearIdx } from "../../../utils/utils";
import LogSlider from "../LogSlider/LogSlider";

function unitsLabel(feeIsUsd) {
  return feeIsUsd ? "USD" : "sats";
}

export default function FeeSlider({
  avgFee,
  setAvgFee,
  feeIsUsd,
  setFeeIsUsd,
  priceFuture,
  year,
}) {
  const twoDecimals = new Intl.NumberFormat("en", TWO_DECIMALS);
  const [min, max] = feeIsUsd ? [-2, 4] : [0, 8];
  const priceAtYear = priceFuture[getFutureYearIdx(year)];
  const equivalent = feeIsUsd
    ? (avgFee / priceAtYear) * SATS_PER_BTC
    : (avgFee / SATS_PER_BTC) * priceAtYear;

  function feeOnLabelClick() {
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
      onLabelClick={feeOnLabelClick}
    />
  );
}
