import { Flex, useColorMode } from "@chakra-ui/react";
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
import { useState } from "react";
import { Line } from "react-chartjs-2";

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
      type: "logarithmic",
      display: true,
      position: "left",
      title: { text: "USD (log scale)", display: true },
      ticks: {
        format: { notation: "compact" },
      },
      // grid line settings
      grid: {
        display: false,
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      title: { text: "GB", display: true },
      ticks: {
        format: { notation: "compact" },
      },
      // grid line settings
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
        // drawTicks: false,
        drawBorder: false,
        display: false,
      },
      max: 1e4,
    },
  },
};

export default function Chart({
  xAxisLabels,
  marketCap,
  usdMinerReward,
  blockchainSize,
  yearIdx,
}) {
  const data = {
    labels: xAxisLabels,
    datasets: [
      {
        label: "BTC market cap",
        data: marketCap,
        borderColor: "rgb(247, 147, 26)",
        backgroundColor: "rgba(247, 147, 26, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Miner reward",
        data: usdMinerReward,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Blockchain Size",
        data: blockchainSize,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  options.plugins.annotation.annotations.line1.xMin = yearIdx;
  options.plugins.annotation.annotations.line1.xMax = yearIdx;

  const [chartOptions, setChartOptions] = useState(options);

  const { colorMode } = useColorMode();

  function onMouseEnter() {
    setChartOptions(
      update(chartOptions, { elements: { point: { radius: { $set: 2 } } } })
    );
  }

  function onMouseLeave() {
    setChartOptions(
      update(chartOptions, { elements: { point: { radius: { $set: 0 } } } })
    );
  }

  return (
    <Flex
      flexDir="row"
      alignItems="center"
      minH="500px"
      h="100%"
      borderRadius="3xl"
      w="clamp(200px, 90vw, 900px)"
      py="2.5rem"
      px="2.5rem"
      bg={{
        base: "transparent",

        md:
          colorMode === "light"
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(0, 0, 0, 0.25)",

        xl:
          colorMode === "light"
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(0, 0, 0, 0.25)",
      }}
      zIndex="6"
      overflow="hidden"
    >
      <Line
        options={chartOptions}
        data={data}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Flex>
  );
}

// useEffect(() => {
//   setChartOptions(
//     update(chartOptions, {
//       plugins: {
//         annotation: {
//           annotations: {
//             line1: { xMin: { $set: yearIdx }, xMax: { $set: yearIdx } },
//           },
//         },
//       },
//     })
//   );
// }, [yearIdx]);
