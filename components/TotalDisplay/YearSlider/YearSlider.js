import React from "react";
import { END_YEAR, START_FUTURE_YEAR } from "../../../utils/constants";
import BaseSlider from "../../Controls/BaseSlider/BaseSlider";

function YearSlider({ year, setYear }) {
  const setYearToMem = setYear(false);
  const setYearToStorage = setYear(true);

  return (
    <BaseSlider
      label={"Year"}
      output={year}
      value={year}
      onChange={setYearToMem}
      onChangeEnd={setYearToStorage}
      min={START_FUTURE_YEAR}
      max={END_YEAR}
      mb="0"
    />
  );
}

export default React.memo(YearSlider);
