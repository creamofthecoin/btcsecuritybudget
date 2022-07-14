import {
  Box,
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
} from "@chakra-ui/react";
import DarkToolTip from "../../DarkToolTip/DarkToolTip";

export default function BaseSlider({
  value,
  onChange,
  onChangeEnd,
  label,
  output = "n/a",
  mb = "1rem",
  cursor = "auto",
  toolTipLabel,
  ariaLabel,
  ...props
}) {
  return (
    <FormControl mb={mb}>
      <ToolTipSwitch toolTipLabel={toolTipLabel} ariaLabel={ariaLabel}>
        <FormLabel
          mb="0"
          display="flex"
          flexDir={{ base: "row", lg: "column", xl: "row" }}
          cursor={cursor}
          _hover={{
            backgroundColor: cursor === "pointer" ? "gray.900" : "none",
          }}
          p="0.1rem 0.25rem"
          borderRadius="md"
          w="100%"
          userSelect="none"
        >
          <Box
            whiteSpace="noWrap"
            mr="1rem"
            fontSize={{ base: "sm", md: "sm", lg: "md" }}
            letterSpacing={{ base: "-0.3pt", md: "0" }}
          >
            {label}
          </Box>
          <Spacer />
          <Box fontSize={{ base: "sm", md: "sm", lg: "md" }}>{output}</Box>
        </FormLabel>
      </ToolTipSwitch>
      <Slider
        aria-label="slider-ex-1"
        value={value}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        {...props}
        size="sm"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </FormControl>
  );
}

function ToolTipSwitch({ toolTipLabel, ariaLabel, children }) {
  if (toolTipLabel) {
    return (
      <DarkToolTip label={toolTipLabel} ariaLabel={ariaLabel}>
        {children}
      </DarkToolTip>
    );
  } else return <>{children}</>;
}
