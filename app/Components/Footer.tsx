import { Flex, Text, Box } from "@chakra-ui/react"
import { Navbar } from "./Navbar"

const Footer = () => {
  return (
    <Flex flexDirection="column" alignItems="center" backgroundColor="chestnut.50" justifyContent="space-between">
      <Text fontSize="2xl">LIFE'S SWEETER SIDE</Text>
      <Navbar />
      <Box>
        <Text>© 2024 Lifessweeterside, All Rights Reserved</Text>
      </Box>
    </Flex>
  );
};

export { Footer };