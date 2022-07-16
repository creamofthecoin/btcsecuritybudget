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
    const x = e.target.value;
    if (x) {
      onBlur(x);
    } else {
      setLocalVal(value);
    }
  }

  function onChange(e) {
    setLocalVal(e.target.value.startsWith("0") ? "0" : e.target.value);
  }

  return (
    <HStack>
      <FormLabel>{label}</FormLabel>
      <Spacer />
      <Input
        type="number"
        w="10rem"
        value={localVal}
        onChange={onChange}
        onBlur={localOnBlur}
      />
    </HStack>
  );
}
