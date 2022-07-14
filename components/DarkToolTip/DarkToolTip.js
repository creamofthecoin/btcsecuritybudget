import { Tooltip } from "chart.js";

export default function DarkToolTip({ label, ariaLabel, bg, color, ...props }) {
  return (
    <Tooltip
      label={label}
      aria-label={ariaLabel}
      bg={bg}
      color={color}
      hasArrow
    >
      {props.children}
    </Tooltip>
  );
}
