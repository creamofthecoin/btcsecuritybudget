import { TWO_DECIMALS } from "../../../utils/numberFormats";
import LogSlider from "../LogSlider/LogSlider";

export default function FeeSlider({
  avgFee,
  setAvgFee,
  feeIsUsd,
  setFeeIsUsd,
}) {
  const twoDecimals = new Intl.NumberFormat("en", TWO_DECIMALS);
  const unitsLabel = feeIsUsd ? "USD" : "sats";
  function feeOnLabelClick() {
    setFeeIsUsd((x) => !x);
  }

  return (
    <LogSlider
      label="Average Fee"
      output={`${twoDecimals.format(avgFee)} ${unitsLabel}`}
      value={avgFee}
      onChange={setAvgFee}
      min={0}
      max={8}
      step={0.01}
      cursor="pointer"
      toolTipLabel="test"
      onLabelClick={feeOnLabelClick}
    />
  );
}
