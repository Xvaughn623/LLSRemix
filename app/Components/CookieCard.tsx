import { useEffect, useState } from "react";

import {
  Box,
  Flex,
  Text,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  ModalOverlay,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

import { CookieModal } from "./CookieModal";

interface CookieCardProps {
  type: string;
  ingredients: string;
  allergens: string;
  code?: string;
  setItemNum: any;
}

const CookieCard = ({
  type,
  allergens,
  ingredients,
  code,
  setItemNum,
}: CookieCardProps) => {
  const [amount, setAmount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setItemNum(amount, code)
  }, [amount]);

  return (
    <Flex backgroundColor="chestnut.50" justifyContent="center" padding="16px 0 16px 0" borderRadius="0 0 4px 4px">
      <Flex flexDirection="column" alignItems="center" flex="1">
        {code && (<Img width="50px" src={`./Images/${code}-Cookie-Icon.png`}/>)}

        <Box paddingTop="8px">
          $8 Per Cookie
        </Box>

        <Button
          color="chestnut.800"
          variant="Link"
          onClick={onOpen}
          _hover={{ color: "chestnut.base" }}
        >
          View Cookie
        </Button>

        <ButtonGroup >
          <IconButton
            isRound
            backgroundColor="chestnut.base"
            aria-label="subtract cookie"
            icon={<MinusIcon />}
            onClick={() => {
              if(amount > 0) setAmount(amount - 1);
            }}
          />

          <Text
            padding="8px 8px 0px 8px"
            color="chestnut.800"
            backgroundColor="chestnut.50"
            height="100%"
          >
            {amount}
          </Text>

          <IconButton
            isRound
            backgroundColor="chestnut.base"
            aria-label="Add cookie"
            icon={<AddIcon />}
            onClick={() => {
              if(amount < 6) setAmount(amount + 1);
            }}
          />
        </ButtonGroup>

        <Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <CookieModal
              type={type}
              ingredients={ingredients}
              allergens={allergens}
              code={code}
            />
            <Button onClick={onClose}>Close</Button>
          </Modal>
        </Box>
      </Flex>
    </Flex>
   
  );
};

export { CookieCard };
