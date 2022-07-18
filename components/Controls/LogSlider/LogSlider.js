import { base10Log, pow10 } from "../../../utils/utils";
import BaseSlider from "../BaseSlider/BaseSlider";

export default function LogSlider({ value, onChange, onChangeEnd, ...props }) {
  const actualValue = base10Log(value);

  function actualOnChange(x) {
    onChange(pow10(x));
  }

  function actualOnChangeEnd(x) {
    onChangeEnd(pow10(x));
  }

  return (
    <BaseSlider
      value={actualValue}
      onChange={actualOnChange}
      onChangeEnd={actualOnChangeEnd}
      {...props}
    />
  );
}
