import { useState } from "react";
import { TWO_DECIMALS } from "../../../utils/numberFormats";
import LogSlider from "../LogSlider/LogSlider";

export default function FeeSlider({ avgFee, setAvgFee }) {
  const twoDecimals = new Intl.NumberFormat("en", TWO_DECIMALS);
  const [feeAsUsd, setFeeAsUsd] = useState(true);

  function feeOnLabelClick() {
    setFeeAsUsd((x) => !x);
  }

  return (
    <LogSlider
      label="Average Fee"
      output={`${twoDecimals.format(avgFee)} ${feeAsUsd ? "USD" : "sats"}`}
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
