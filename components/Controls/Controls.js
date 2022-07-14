import { END_YEAR } from "../../utils/constants";
import { COMPACT } from "../../utils/numberFormats";
import LogSlider from "./LogSlider/LogSlider";

export default function Controls({
  avgFee,
  setAvgFee,
  blockSize,
  setBlockSize,
  finalMarketCap,
  setFinalMarketCap,
}) {
  const compact = new Intl.NumberFormat("en", COMPACT);

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
      <LogSlider
        label={`Market Cap in ${END_YEAR}`}
        output={`$${compact.format(finalMarketCap)}`}
        value={finalMarketCap}
        onChange={setFinalMarketCap}
        min={10}
        max={14}
        step={0.01}
      />
    </>
  );
}
