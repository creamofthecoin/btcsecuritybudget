import {
  Flex,
  FormLabel,
  HStack,
  Stack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  LogarithmicScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import update from "immutability-helper";
import React, { useCallback, useState } from "react";
import { Line } from "react-chartjs-2";
import { COMPACT, PERCENT_3_SIGFIGS } from "../../utils/numberFormats";
import { useLocalStorage } from "../../utils/useLocalStorage";

ChartJS.register(
  annotationPlugin,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "#ffffff";

const MAX_MARKET_CAP = 1e14;
const MAX_BLOCKSIZE = 1e4;
const MAX_REL_REVENUE = 0.1;
const MARKET_CAP_Y_TITLE = "Value (USD)";
const BLOCKSIZE_Y_TITLE = "Blockchain Size (GB)";
const REL_REVENUE_Y_TITLE = "(Miner Revenue Per Year) / (Market Cap)";

const options = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 3,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      // display: false,
      text: "Chart.js Line Chart",
    },
    annotation: {
      annotations: {
        line1: {
          type: "line",
          xMin: 0,
          xMax: 0,
          borderDash: [4],
          borderColor: "rgb(255, 255, 255)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderWidth: 1,
        },
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      title: { text: "Year", display: true },
      grid: {
        display: false,
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      title: { text: MARKET_CAP_Y_TITLE, display: true },
      ticks: {
        format: COMPACT,
        maxTicksLimit: 7,
      },
      // grid line settings
      grid: {
        display: false,
      },
      max: MAX_MARKET_CAP,
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      title: { text: BLOCKSIZE_Y_TITLE, display: true },
      ticks: {
        format: COMPACT,
      },
      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
        // drawTicks: false,
        drawBorder: false,
        display: false,
      },
      max: MAX_BLOCKSIZE,
    },
  },
};

export default function Chart({
  xAxisLabels,
  marketCap,
  usdMinerReward,
  blockchainSize,
  relativeMinerReward,
  yearIdx,
}) {
  const yDataAbs = [
    {
      label: "BTC Market Cap",
      data: marketCap,
      borderColor: "rgb(247, 147, 26)",
      backgroundColor: "rgba(247, 147, 26, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Miner Revenue / Year",
      data: usdMinerReward,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y",
    },
  ];

  const yDataRel = [
    {
      label: "Relative Miner Revenue / Year",
      data: relativeMinerReward,
      borderColor: "rgb(42, 170, 42)",
      backgroundColor: "rgba(42, 170, 42, 0.5)",
      yAxisID: "y",
    },
  ];

  const y1Data = [
    {
      label: "Blockchain Size",
      data: blockchainSize,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y1",
    },
  ];

  options.plugins.annotation.annotations.line1.xMin = yearIdx;
  options.plugins.annotation.annotations.line1.xMax = yearIdx;

  const [chartOptions, setChartOptions] = useState(options);

  function setChartOptionsLog(newVal, setter) {
    setter(newVal);
    const value = newVal ? "logarithmic" : "linear";
    setChartOptions((cOpts) =>
      update(cOpts, { scales: { y: { type: { $set: value } } } })
    );
  }

  function setChartOptionsShowRel(newVal, setter) {
    setter(newVal);
    const [newFormat, newMax, newTitle] = newVal
      ? [PERCENT_3_SIGFIGS, MAX_REL_REVENUE, REL_REVENUE_Y_TITLE]
      : [COMPACT, MAX_MARKET_CAP, MARKET_CAP_Y_TITLE];
    setChartOptions((cOpts) =>
      update(cOpts, {
        scales: {
          y: {
            ticks: { format: { $set: newFormat } },
            max: { $set: newMax },
            title: { text: { $set: newTitle } },
          },
        },
      })
    );
  }

  const [isLog, setIsLog] = useLocalStorage("isLog", false, setChartOptionsLog);
  const [showRel, setShowRel] = useLocalStorage(
    "showRel",
    false,
    setChartOptionsShowRel
  );
  const { colorMode } = useColorMode();

  const data = {
    labels: xAxisLabels,
    datasets: [...(showRel ? yDataRel : yDataAbs), ...y1Data],
  };

  function setPointRadius(newRadius) {
    setChartOptions(
      update(chartOptions, {
        elements: { point: { radius: { $set: newRadius } } },
      })
    );
  }

  const onLogToggle = useCallback((e) => {
    setChartOptionsLog(e.target.checked, setIsLog(true));
  }, []);

  const onRelMinerRewardToggle = useCallback((e) => {
    setChartOptionsShowRel(e.target.checked, setShowRel(true));
  }, []);

  return (
    <Stack
      w="clamp(200px, 90vw, 900px)"
      minH="500px"
      h="100%"
      py={{ base: "1.5rem", md: "2.5rem" }}
      px={{ base: "0", lg: "2.5rem" }}
      borderRadius="3xl"
      bg={{
        base: "transparent",
        xl:
          colorMode === "light"
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(0, 0, 0, 0.25)",
      }}
      overflow="hidden"
    >
      <Flex flexDir="row" alignItems="center" h="100%" zIndex="6">
        <Line
          options={chartOptions}
          data={data}
          onMouseEnter={() => setPointRadius(2)}
          onMouseLeave={() => setPointRadius(0)}
        />
      </Flex>
      <Stack
        px="2rem"
        flexDir={{ base: "row", lg: "column" }}
        gap={{ base: 5, lg: 1 }}
      >
        <GraphToggle
          label={"Log Scale"}
          gap="1rem"
          onChange={onLogToggle}
          isChecked={isLog}
        />
        <GraphToggle
          label={"Relative Miner Revenue/Year"}
          onChange={onRelMinerRewardToggle}
          isChecked={showRel}
        />
      </Stack>
    </Stack>
  );
}

const GraphToggle = React.memo(({ label, onChange, isChecked }) => {
  return (
    <HStack alignItems="center" justifyContent="stretch" mt="0 !important">
      <Switch size="sm" onChange={onChange} isChecked={isChecked} />
      <FormLabel fontSize="sm" color="gray.200" fontWeight="200">
        {label}
      </FormLabel>
    </HStack>
  );
});
