import BaseSlider from "./BaseSlider/BaseSlider";
import LogSlider from "./LogSlider/LogSlider";

export default function Controls({
  avgFee,
  setAvgFee,
  blockSize,
  setBlockSize,
  yearlyPriceIncrease,
  setYearlyPriceIncrease,
}) {
  const oneDecimal = new Intl.NumberFormat("en", {
    notation: "standard",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const twoDecimals = new Intl.NumberFormat("en", {
    notation: "standard",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <>
      <LogSlider
        label="Average Fee"
        output={`${twoDecimals.format(avgFee)} sats`}
        value={avgFee}
        onChange={setAvgFee}
        min={0}
        max={8}
        step={0.01}
      />
      <LogSlider
        label="Average Block Size"
        output={`${twoDecimals.format(blockSize)} MB`}
        value={blockSize}
        onChange={setBlockSize}
        min={-1}
        max={2}
        step={0.01}
      />
      <BaseSlider
        label="Yearly Price Increase"
        output={`${oneDecimal.format(yearlyPriceIncrease)} %`}
        value={yearlyPriceIncrease}
        onChange={setYearlyPriceIncrease}
        min={0}
        max={10}
        step={0.1}
      />
    </>
  );
}
