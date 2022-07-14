import { COMPACT, TWO_DECIMALS } from "../../../utils/numberFormats";
import { mbToTransactions, transactionsToMB } from "../../../utils/utils";
import LogSlider from "../LogSlider/LogSlider";

function unitsLabel(blockSizeIsMB) {
  return blockSizeIsMB ? "MB" : "Transactions";
}

function getFormatter(blockSizeIsMB) {
  return new Intl.NumberFormat("en", blockSizeIsMB ? TWO_DECIMALS : COMPACT);
}

export default function BlockSizeSlider({
  blockSize,
  setBlockSize,
  blockSizeIsMB,
  setBlockSizeIsMB,
}) {
  const [min, max] = blockSizeIsMB ? [-1, 2] : [2, 6];
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
