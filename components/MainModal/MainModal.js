import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export default function MainModal({
  buttonText,
  body,
  size = "2xl",
  h = "70vh",
  button,
  closeButtonText = "close",
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        borderRadius="full"
        maxW="fit-content"
        size="lg"
        fontWeight="black"
        mt="0 !important"
      >
        {buttonText}
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size={size} isCentered>
        <ModalOverlay
          // bg="rgba(26,32,44, 0.5)"
          bg="rgba(0,0,0, 0.66)"
          backdropFilter="blur(10px)"
        />
        <ModalContent opacity="0.5" bg="gray.900">
          <ModalHeader />
          <ModalCloseButton borderRadius="full" />
          <ModalBody>
            <VStack
              alignItems="stretch"
              w="100%"
              h={h}
              overflowY="scroll"
              p="1rem 1.5rem"
            >
              {body}
            </VStack>
          </ModalBody>
          <ModalFooter gap="1rem">
            {button}
            <Button borderRadius="full" onClick={onClose}>
              {closeButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
