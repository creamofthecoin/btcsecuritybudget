import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
export default function Status() {
  return (
    <Stack
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: 1, xl: 10 }}
      bg="rgba(0,0,0,0.125)"
      borderRadius="3xl"
      w="100%"
      py="1rem"
      px="1rem"
      mt="2rem"
      justifyContent="center"
      alignItems={{ base: "flex-start", lg: "center" }}
    >
      <SingleStatus />
      <SingleStatus />
      <SingleStatus />
    </Stack>
  );
}

function SingleStatus() {
  return (
    <HStack m="0 !important" p="0 0.5rem">
      <Heading
        as="h3"
        p="0"
        m="0 .25rem 0 0 !important"
        fontSize="xs"
        fontWeight="900"
        color="gray.300"
      >
        Fees:
      </Heading>
      <Text p="0" m="0" fontSize="xs" fontWeight="600" color="gray.400">
        Plebs Win. It's cheap to participate.
      </Text>
    </HStack>
  );
}
