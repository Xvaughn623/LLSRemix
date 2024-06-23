import { Flex, Text } from "@chakra-ui/react"
import { Navbar } from "./Navbar"
import { useNavigate } from "@remix-run/react"

const Header = () => {
  const navigate = useNavigate();

  return (
    <Flex backgroundColor="chestnut.50" justifyContent="space-between" padding="24px 48px">
      <Text fontSize="4xl" _hover={{ cursor: "pointer" }} onClick={() => navigate("/")}>LIFE'S SWEETER SIDE</Text>
      <Navbar />
    </Flex>
  )
}

export { Header }