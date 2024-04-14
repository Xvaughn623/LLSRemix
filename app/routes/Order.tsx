import { Flex } from "@chakra-ui/react";
import { CookieForm } from "../Components/CookieForm";

const OrderPage = () => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      paddingTop="16px"
      backgroundColor="chestnut.base"
      paddingBottom="32px"
    >
        <CookieForm />
    </Flex>
  );
};

export default OrderPage;
