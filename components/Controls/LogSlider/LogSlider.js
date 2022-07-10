import BaseSlider from "../BaseSlider/BaseSlider";

export default function LogSlider({ value, onChange, ...props }) {
  const actualValue = Math.log(value) / Math.log(10);

  function actualOnChange(x) {
    onChange(Math.pow(10, x));
  }

  return (
    <BaseSlider value={actualValue} onChange={actualOnChange} {...props} />
  );
}
