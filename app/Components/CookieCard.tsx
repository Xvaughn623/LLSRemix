import React, { useEffect, useState } from "react";

import {
  Card,
  Text,
  Box,
  CardFooter,
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
    if (!amount) return;

    setItemNum(amount, code)
  }, [amount]);

  return (
    <Card
      backgroundColor="chestnut.100"
      marginTop="8px"
    >
      <CardFooter flexDirection="column" alignItems="center" >
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

        <ButtonGroup isAttached>
          <IconButton
            backgroundColor="chestnut.base"
            aria-label="subtract cookie"
            icon={<MinusIcon />}
            onClick={() => {
              console.log('before setting amount: ', amount);
              setAmount(amount - 1);
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
            backgroundColor="chestnut.base"
            aria-label="Add cookie"
            icon={<AddIcon />}
            onClick={() => {
              setAmount(amount + 1);
              setItemNum(amount, code);
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
      </CardFooter>
    </Card>
   
  );
};

export { CookieCard };
