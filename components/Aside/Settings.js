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
        <ModalHeading>Meme Threshold Settings</ModalHeading>
        <VStack pt="2rem" alignItems="stretch">
          <InputWithLabel
            label="Fee Threshold (USD)"
            value={feeMemeThreshold}
            onBlur={setFeeMemeThreshold(true)}
          />
          <InputWithLabel
            label="Block Size Threshold (MB)"
            value={blockSizeMemeThreshold}
            onBlur={setBlockSizeMemeThreshold(true)}
          />
          <InputWithLabel
            label="Security Threshold (%)"
            value={securityMemeThreshold}
            onBlur={setSecurityMemeThreshold(true)}
          />
        </VStack>
      </VStack>
    </>
  );
}
