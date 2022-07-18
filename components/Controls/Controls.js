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
  mktYearDoneChange,
  setMktYearDoneChange,
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
        mktYearDoneChange={mktYearDoneChange}
        setMktYearDoneChange={setMktYearDoneChange}
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
        setMktYearDoneChange={setMktYearDoneChange}
      />
    </>
  );
}
