import { FormLabel, HStack, Input, Spacer } from "@chakra-ui/react";

export default function InputWithLabel({ label, value, onChange }) {
  return (
    <HStack>
      <FormLabel>{label}</FormLabel>
      <Spacer />
      <Input
        type="number"
        w="10rem"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </HStack>
  );
}
