import {
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaRedoAlt } from "react-icons/fa";
import { PERCENT_3_DECIMALS, THREE_SIGFIGS } from "../../utils/numberFormats";
import DarkToolTip from "../DarkToolTip/DarkToolTip";
import YearSlider from "./YearSlider/YearSlider";

function TotalDisplay({ year, setYear, relativeMinerRewardAtYear, reset }) {
  const sigFigFormatter = new Intl.NumberFormat("en", THREE_SIGFIGS);
  const percentFormatter = new Intl.NumberFormat("en", PERCENT_3_DECIMALS);
  const minerReward = percentFormatter.format(
    sigFigFormatter.format(relativeMinerRewardAtYear)
  );

  return (
    <Stack
      alignItems="stretch"
      alignSelf="center"
      gap="1rem"
      w="100%"
      pt="2.5rem"
      zIndex="5"
    >
      <YearSlider year={year} setYear={setYear} />
      <HStack>
        <SingleTotal
          label="Relative Miner Revenue/Year"
          total={`${minerReward}`}
          tooltipLabel="(Miner Revenue Per Year) / (Market Cap)"
          bold={true}
          large={true}
        />
        <Spacer />
        <DarkToolTip label="Reset">
          <span>
            <ResetButton reset={reset} />
          </span>
        </DarkToolTip>
      </HStack>
    </Stack>
  );
}

// Has to be wrapped by <span>
// https://chakra-ui.com/docs/components/tooltip#with-an-icon
const ResetButton = React.memo(({ reset }) => {
  return (
    <IconButton
      icon={<FaRedoAlt />}
      // size={{ base: "sm", lg: "md" }}
      borderRadius="full"
      w="min-content"
      onClick={reset}
    />
  );
});

function SingleTotal({ label, total, bold, large, tooltipLabel }) {
  return (
    <DarkToolTip label={tooltipLabel} ariaLabel="Tool Tip For a Good Condition">
      <Stack userSelect="none">
        <Heading
          as="h3"
          fontSize={large ? "md" : "sm"}
          mb="-.5rem"
          fontWeight={bold ? "600" : "400"}
          letterSpacing="tight"
        >
          {label}
        </Heading>
        <Text
          fontSize={large ? "3xl" : "2xl"}
          fontWeight={bold ? "900" : "400"}
          lineHeight="shorter"
          letterSpacing="tighter"
          dropShadow="lg"
          // color="gray.500"
        >
          {total}
        </Text>
      </Stack>
    </DarkToolTip>
  );
}

export default React.memo(
  TotalDisplay,
  (prev, next) =>
    prev.year === next.year &&
    Math.abs(prev.relativeMinerRewardAtYear - next.relativeMinerRewardAtYear) <
      1e-8
);
