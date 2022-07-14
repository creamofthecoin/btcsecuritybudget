import { END_YEAR } from "../../utils/constants";
import { COMPACT } from "../../utils/numberFormats";
import BlockSizeSlider from "./BlockSizeSlider/BlockSizeSlider";
import FeeSlider from "./FeeSlider/FeeSlider";
import LogSlider from "./LogSlider/LogSlider";

export default function Controls({
  avgFee,
  setAvgFee,
  feeIsUsd,
  setFeeIsUsd,
  blockSize,
  setBlockSize,
  blockSizeIsMB,
  setBlockSizeIsMB,
  finalMarketCap,
  setFinalMarketCap,
  priceFuture,
  year,
}) {
  const compact = new Intl.NumberFormat("en", COMPACT);

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
      <BlockSizeSlider
        blockSize={blockSize}
        setBlockSize={setBlockSize}
        blockSizeIsMB={blockSizeIsMB}
        setBlockSizeIsMB={setBlockSizeIsMB}
      />
      <LogSlider
        label={`Market Cap in ${END_YEAR}`}
        output={`$${compact.format(finalMarketCap)}`}
        value={finalMarketCap}
        onChange={setFinalMarketCap}
        min={11}
        max={14}
        step={0.01}
      />
    </>
  );
}
