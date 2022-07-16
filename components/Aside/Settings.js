import { VStack } from "@chakra-ui/react";
import ModalHeading from "../../utils/ModalHeading";
import InputWithLabel from "./InputWithLabel";

export default function Settings({
  feeMemeThreshold,
  setFeeMemeThreshold,
  blockSizeMemeThreshold,
  setBlockSizeMemeThreshold,
  securityMemeThreshold,
  setSecurityMemeThreshold,
}) {
  return (
    <>
      <VStack alignItems="stretch">
        <ModalHeading>Settings</ModalHeading>
        <InputWithLabel
          label="Fee Meme Threshold (USD)"
          value={feeMemeThreshold}
          onChange={setFeeMemeThreshold}
        />
        <InputWithLabel
          label="Block Size Meme Threshold (MB)"
          value={blockSizeMemeThreshold}
          onChange={setBlockSizeMemeThreshold}
        />
        <InputWithLabel
          label="Security Meme Threshold (%)"
          value={securityMemeThreshold * 100}
          onChange={(x) => setSecurityMemeThreshold(x / 100)}
        />
      </VStack>
    </>
  );
}
