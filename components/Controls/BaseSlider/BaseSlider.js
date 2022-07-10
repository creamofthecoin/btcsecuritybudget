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

export default function BaseSlider({
  value,
  onChange,
  onChangeEnd,
  label,
  output = "n/a",
  mb = "1rem",
  ...props
}) {
  return (
    <FormControl mb={mb}>
      <FormLabel
        mb="0"
        display="flex"
        flexDir={{ base: "row", lg: "column", xl: "row" }}
      >
        <Box whiteSpace="noWrap">{label}</Box>
        <Spacer />
        <Box>{output}</Box>
      </FormLabel>
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
