import React from "react";
import { END_YEAR } from "../../../utils/constants";
import { COMPACT } from "../../../utils/numberFormats";
import LogSlider from "../LogSlider/LogSlider";

function MarketCapSlider({
  finalMarketCap,
  setFinalMarketCap,
  setMktYearDoneChange,
}) {
  const setFinalMarketCapToMem = setFinalMarketCap(false);
  const setFinalMarketCapToStorage = setFinalMarketCap(true);
  const compact = new Intl.NumberFormat("en", COMPACT);

  function onChangeEnd(v) {
    setMktYearDoneChange(true);
    setFinalMarketCapToStorage(v);
  }

  return (
    <LogSlider
      label={`Market Cap in ${END_YEAR}`}
      output={`$${compact.format(finalMarketCap)}`}
      value={finalMarketCap}
      onChange={setFinalMarketCapToMem}
      onChangeEnd={onChangeEnd}
      min={11}
      max={14}
      step={0.01}
    />
  );
}

export default React.memo(MarketCapSlider);
