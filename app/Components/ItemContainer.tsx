import { Flex, Text, Box, Img } from "@chakra-ui/react";

interface ItemContainerProps {
  name: string
  description: string
  code: string
}

const ItemContainer = ({name, description, code }:ItemContainerProps)  => {
  return (
    <Flex gap='16px' backgroundColor="chestnut.50" borderRadius="16px" padding="24px 24px" width="392px">
      <Img alignSelf="center" width="50px" height="50px" src={`./Images/${code}-Cookie-Icon.png`}/>

      <Box>
        <Text fontSize="24px" color='chestnut.800'>{name}</Text>
        <Text color='chestnut.800'>{description}</Text>
      </Box>
    </Flex>
  );
}

export { ItemContainer };