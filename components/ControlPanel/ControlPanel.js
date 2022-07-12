import { Flex, Spacer } from "@chakra-ui/react";
import Controls from "../Controls/Controls";
import Header from "../Header/Header";
import Meme from "../Meme/Meme";
import TotalDisplay from "../TotalDisplay/TotalDisplay";

export default function ControlPanel({
  avgFee,
  setAvgFee,
  blockSize,
  setBlockSize,
  finalMarketCap,
  setFinalMarketCap,
  year,
  setYear,
  transactionsPerBlock,
  relativeMinerReward,
  usdCostToAttack,
  colorMode,
  ratings,
  isVisible,
}) {
  return (
    <Flex
      py={{ base: "1rem", lg: "1.5rem", xl: "2.5rem" }}
      px={{ base: "2rem", lg: "1.75rem", xl: "3rem" }}
      minW={{ base: "100%", lg: "320px", xl: "380px" }}
      mr={{ base: "1rem", md: "0rem", lg: "2rem", xl: "0" }}
      bg={{
        base:
          colorMode === "light"
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(0, 0, 0, 0)",
        lg:
          colorMode === "light"
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(0, 0, 0, 0.5)",
        xl:
          colorMode === "light"
            ? "rgba(255, 255, 255, 0.75)"
            : "rgba(0, 0, 0, .75 )",
      }}
      // borderBottomLeftRadius="3xl"
      // borderBottomRightRadius="3xl"
      borderRadius="3xl"
      zIndex="6"
      h="100%"
      id="LKJLKJ"
    >
      <Flex flexDir="column" w="100%" mr={{ base: "0", md: "2.5rem", lg: "0" }}>
        <Header />
        <Controls
          avgFee={avgFee}
          setAvgFee={setAvgFee}
          blockSize={blockSize}
          setBlockSize={setBlockSize}
          finalMarketCap={finalMarketCap}
          setFinalMarketCap={setFinalMarketCap}
          transactionsPerBlock={transactionsPerBlock}
        />
        <Spacer />
        <TotalDisplay
          year={year}
          setYear={setYear}
          relativeMinerReward={relativeMinerReward}
          usdCostToAttack={usdCostToAttack}
        />
      </Flex>
      {!isVisible && <Meme ratings={ratings} />}
    </Flex>
  );
}
