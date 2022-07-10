import { MoonIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton icon={<MoonIcon />} onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
}
