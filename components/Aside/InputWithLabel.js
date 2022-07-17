import { FormLabel, HStack, Input, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { STANDARD_NO_GROUPING } from "../../utils/numberFormats";

export default function InputWithLabel({ label, value, onBlur }) {
  const formatter = new Intl.NumberFormat("en", STANDARD_NO_GROUPING);
  const [localVal, setLocalVal] = useState(value);

  useEffect(() => {
    if (localVal !== value) {
      setLocalVal(value);
    }
  }, [value]);

  function localOnBlur() {
    const newVal = localVal ? formatter.format(localVal) : value;
    onBlur(newVal);
    setLocalVal(newVal);
  }

  function onChange(e) {
    setLocalVal(e.target.value);
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
