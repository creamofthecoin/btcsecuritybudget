import React, { useEffect } from "react";
import { SATS_PER_BTC } from "../../../utils/constants";
import { TWO_DECIMALS } from "../../../utils/numberFormats";
import { base10Log, pow10, satsToUsd, usdToSats } from "../../../utils/utils";
import LogSlider from "../LogSlider/LogSlider";

function unitsLabel(feeIsUsd) {
  return feeIsUsd ? "USD" : "sats";
}

function minMaxUsd(minSats, maxSats, priceAtYear) {
  return [
    base10Log(satsToUsd(minSats, priceAtYear)),
    base10Log(satsToUsd(maxSats, priceAtYear)),
  ];
}

const minSats = 1;
const maxSats = SATS_PER_BTC;

function FeeSlider({
  avgFee,
  setAvgFee,
  feeIsUsd,
  setFeeIsUsd,
  priceAtYear,
  mktYearDoneChange,
  setMktYearDoneChange,
}) {
  const setAvgFeeToMem = setAvgFee(false);
  const setAvgFeeToStorage = setAvgFee(true);
  const setFeeIsUsdToStorage = setFeeIsUsd(true);

  const twoDecimals = new Intl.NumberFormat("en", TWO_DECIMALS);
  const [min, max] = feeIsUsd
    ? minMaxUsd(minSats, maxSats, priceAtYear)
    : [base10Log(minSats), base10Log(maxSats)];

  const equivalent = feeIsUsd
    ? usdToSats(avgFee, priceAtYear)
    : satsToUsd(avgFee, priceAtYear);

  function onLabelClick() {
    setFeeIsUsdToStorage(!feeIsUsd);
    setAvgFeeToStorage(equivalent);
  }

  useEffect(() => {
    if (!feeIsUsd) {
      return;
    } else if (avgFee < pow10(min)) {
      setAvgFeeToMem(pow10(min));
    } else if (avgFee > pow10(max)) {
      setAvgFeeToMem(pow10(max));
    }
  }, [min, max]);

  // Special case for writing to local storage.
  // This triggers when year or market cap slider finishes changing.
  // Then the min/max of the fee slider may have changed.
  // The in-memory change is taken care of by the above useEffect.
  // This separate useEffect is to reduce writes to localstorage.
  useEffect(() => {
    if (feeIsUsd && mktYearDoneChange) {
      setAvgFeeToStorage(avgFee);
    }
    setMktYearDoneChange(false);
  }, [mktYearDoneChange]);

  const toolTipLabel = `${twoDecimals.format(equivalent)} ${unitsLabel(
    !feeIsUsd
  )}`;

  return (
    <LogSlider
      label="Average Fee"
      output={`${twoDecimals.format(avgFee)} ${unitsLabel(feeIsUsd)}`}
      value={avgFee}
      onChange={setAvgFeeToMem}
      onChangeEnd={setAvgFeeToStorage}
      min={min}
      max={max}
      step={0.01}
      cursor="pointer"
      toolTipLabel={toolTipLabel}
      onLabelClick={onLabelClick}
    />
  );
}

export default React.memo(FeeSlider);
