import { Tooltip } from "@chakra-ui/react";

export default function DarkToolTip({
  label,
  ariaLabel,
  bg = "gray.900",
  color = "white",
  ...props
}) {
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
