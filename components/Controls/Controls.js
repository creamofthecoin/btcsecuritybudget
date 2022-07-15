import BlockSizeSlider from "./BlockSizeSlider/BlockSizeSlider";
import FeeSlider from "./FeeSlider/FeeSlider";
import MarketCapSlider from "./MarketCapSlider/MarketCapSlider";

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
  priceAtYear,
}) {
  return (
    <>
      <FeeSlider
        avgFee={avgFee}
        setAvgFee={setAvgFee}
        feeIsUsd={feeIsUsd}
        setFeeIsUsd={setFeeIsUsd}
        priceAtYear={priceAtYear}
      />
      <BlockSizeSlider
        blockSize={blockSize}
        setBlockSize={setBlockSize}
        blockSizeIsMB={blockSizeIsMB}
        setBlockSizeIsMB={setBlockSizeIsMB}
      />
      <MarketCapSlider
        finalMarketCap={finalMarketCap}
        setFinalMarketCap={setFinalMarketCap}
      />
    </>
  );
}
