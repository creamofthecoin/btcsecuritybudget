import { FormLabel, HStack, Input, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function InputWithLabel({ label, value, onBlur }) {
  const [localVal, setLocalVal] = useState(value);
  useEffect(() => {
    if (localVal !== value) {
      setLocalVal(value);
    }
  }, [value]);

  function localOnBlur(e) {
    if (e.target.value) {
      onBlur(e.target.value);
    } else {
      setLocalVal(value);
    }
  }

  return (
    <HStack>
      <FormLabel>{label}</FormLabel>
      <Spacer />
      <Input
        type="number"
        w="10rem"
        value={localVal}
        onChange={(e) => setLocalVal(e.target.value)}
        onBlur={localOnBlur}
      />
    </HStack>
  );
}
