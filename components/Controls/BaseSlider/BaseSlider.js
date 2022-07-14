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
