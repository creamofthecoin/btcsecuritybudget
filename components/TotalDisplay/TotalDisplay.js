import {
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRedoAlt } from "react-icons/fa";
import { END_YEAR, START_FUTURE_YEAR, START_YEAR } from "../../utils/constants";
import BaseSlider from "../Controls/BaseSlider/BaseSlider";
import DarkToolTip from "../DarkToolTip/DarkToolTip";

export default function TotalDisplay({
  year,
  setYear,
  relativeMinerReward,
  usdCostToAttack,
  reset,
}) {
  const percentFormatter = new Intl.NumberFormat("en", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });
  const standardFormatter = new Intl.NumberFormat("en", {
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const idx = year - START_YEAR;
  const minerReward = percentFormatter.format(relativeMinerReward[idx]);
  const costToAttack = standardFormatter.format(usdCostToAttack[idx]);
  return (
    <Stack
      alignItems="stretch"
      alignSelf="center"
      gap="1rem"
      w="100%"
      pt="2.5rem"
      zIndex="5"
    >
      <BaseSlider
        label={"Year"}
        output={year}
        value={year}
        onChange={setYear}
        min={START_FUTURE_YEAR}
        max={END_YEAR}
        mb="0"
      />
      <HStack>
        <SingleTotal
          label="Relative Miner Reward"
          total={`${minerReward}`}
          tooltipLabel="(Miner Reward Per Year) / (Market Cap)"
          bold={true}
          large={true}
        />
        <Spacer />
        <DarkToolTip label="Reset">
          <IconButton
            icon={<FaRedoAlt />}
            // size={{ base: "sm", lg: "md" }}
            borderRadius="full"
            w="min-content"
            onClick={reset}
          />
        </DarkToolTip>
      </HStack>

      {/* <SingleTotal
        label={`"Cost To Attack"`}
        total={`$${costToAttack}`}
        tooltipLabel="(Miner Reward Per Year) * 51%"
        bold={true}
        large={true}
      /> */}
    </Stack>
  );
}

function SingleTotal({ label, total, bold, large, tooltipLabel }) {
  return (
    <DarkToolTip label={tooltipLabel} ariaLabel="Tool Tip For a Good Condition">
      <Stack userSelect="none">
        <Heading
          as="h3"
          fontSize={large ? "md" : "sm"}
          mb="-.5rem"
          fontWeight={bold ? "900" : "400"}
          letterSpacing="unset"
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
