import { FormLabel, HStack, Input, Spacer, VStack } from "@chakra-ui/react";
import ModalHeading from "../../utils/ModalHeading";

export default function Settings() {
  return (
    <>
      <VStack alignItems="stretch">
        <ModalHeading>Settings</ModalHeading>
        <HStack>
          <FormLabel>Thing</FormLabel>
          <Spacer />
          <Input w="10rem" />
        </HStack>
      </VStack>
    </>
  );
}
