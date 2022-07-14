import { END_YEAR } from "../../utils/constants";
import { COMPACT, TWO_DECIMALS } from "../../utils/numberFormats";
import FeeSlider from "./FeeSlider/FeeSlider";
import LogSlider from "./LogSlider/LogSlider";

export default function Controls({
  avgFee,
  setAvgFee,
  feeIsUsd,
  setFeeIsUsd,
  blockSize,
  setBlockSize,
  finalMarketCap,
  setFinalMarketCap,
  priceFuture,
  year,
}) {
  const compact = new Intl.NumberFormat("en", COMPACT);
  const twoDecimals = new Intl.NumberFormat("en", TWO_DECIMALS);

  return (
    <>
      <FeeSlider
        avgFee={avgFee}
        setAvgFee={setAvgFee}
        feeIsUsd={feeIsUsd}
        setFeeIsUsd={setFeeIsUsd}
        priceFuture={priceFuture}
        year={year}
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
