import React from "react";
import { COMPACT, TWO_DECIMALS } from "../../../utils/numberFormats";
import {
  base10Log,
  mbToTransactions,
  transactionsToMB,
} from "../../../utils/utils";
import LogSlider from "../LogSlider/LogSlider";

function unitsLabel(blockSizeIsMB) {
  return blockSizeIsMB ? "MB" : "Txns";
}

function getFormatter(blockSizeIsMB) {
  return new Intl.NumberFormat("en", blockSizeIsMB ? TWO_DECIMALS : COMPACT);
}

function minMaxTxns(minMB, maxMB) {
  return [
    base10Log(mbToTransactions(minMB)),
    base10Log(mbToTransactions(maxMB)),
  ];
}

const minMB = 0.1;
const maxMB = 100;

function BlockSizeSlider({
  blockSize,
  setBlockSize,
  blockSizeIsMB,
  setBlockSizeIsMB,
}) {
  const [min, max] = blockSizeIsMB
    ? [base10Log(minMB), base10Log(maxMB)]
    : minMaxTxns(minMB, maxMB);
  const equivalent = blockSizeIsMB
    ? mbToTransactions(blockSize)
    : transactionsToMB(blockSize);

  function onLabelClick() {
    setBlockSizeIsMB((x) => !x);
    setBlockSize(equivalent);
  }

  const formatter = getFormatter(blockSizeIsMB);
  const equivFormatter = getFormatter(!blockSizeIsMB);

  const toolTipLabel = `${equivFormatter.format(equivalent)} ${unitsLabel(
    !blockSizeIsMB
  )}`;

  return (
    <LogSlider
      label="Block Size"
      output={`${formatter.format(blockSize)} ${unitsLabel(blockSizeIsMB)}`}
      value={blockSize}
      onChange={setBlockSize}
      min={min}
      max={max}
      step={0.01}
      cursor="pointer"
      onLabelClick={onLabelClick}
      toolTipLabel={toolTipLabel}
    />
  );
}

export default React.memo(BlockSizeSlider);
