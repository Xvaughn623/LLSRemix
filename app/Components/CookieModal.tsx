import {
  Flex,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Img,
  ModalCloseButton,
} from "@chakra-ui/react";

interface CookieModalProps {
  type: string;
  ingredients: string;
  allergens: string;
  code?: string;
}

const CookieModal = ({
  type,
  ingredients,
  allergens,
  code,
}: CookieModalProps) => {
  return (
    <ModalContent alignItems="center" backgroundColor="cream.base" borderColor="red" border="4px">
      <ModalHeader>{type}</ModalHeader>
      <ModalBody>
        <Flex justifyContent="center">
          {code && <Img src={`./Images/Cookie-${code}.jpg`} width={200} />}
        </Flex>

        <Text paddingTop="16px" textAlign="center" fontSize="10px">
          Ingredients: {ingredients}
        </Text>
      </ModalBody>
      <ModalFooter>Allergens: {allergens}</ModalFooter>
      <ModalCloseButton />
    </ModalContent>
  );
};

export { CookieModal };
