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
        <VStack pt="2rem" alignItems="stretch">
          <InputWithLabel
            label="Fee Meme Threshold (USD)"
            value={feeMemeThreshold}
            onBlur={setFeeMemeThreshold}
          />
          <InputWithLabel
            label="Block Size Meme Threshold (MB)"
            value={blockSizeMemeThreshold}
            onBlur={setBlockSizeMemeThreshold}
          />
          <InputWithLabel
            label="Security Meme Threshold (%)"
            value={securityMemeThreshold}
            onBlur={setSecurityMemeThreshold}
          />
        </VStack>
      </VStack>
    </>
  );
}
