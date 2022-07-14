import { base10Log } from "../../../utils/utils";
import BaseSlider from "../BaseSlider/BaseSlider";

export default function LogSlider({ value, onChange, ...props }) {
  const actualValue = base10Log(value);

  function actualOnChange(x) {
    onChange(Math.pow(10, x));
  }

  return (
    <BaseSlider value={actualValue} onChange={actualOnChange} {...props} />
  );
}
