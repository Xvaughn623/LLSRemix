import type { MetaFunction } from "@remix-run/node";
import { Flex, Box, Heading, Text, ButtonGroup, Button, Grid } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { ItemContainer } from "~/Components/ItemContainer";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
 const navigate = useNavigate();

  return (
    <Box>
      <Flex backgroundColor="chestnut.50" flexDirection="column" alignItems="center" gap="24px" padding="32px 20px">
        <Heading color="chestnut.base">Live Delightfully</Heading>

        <ButtonGroup gap="24px" alignItems="center">
          <Button backgroundColor="chestnut.base" textColor="cream.base" borderRadius="48px">Explore Our Cookies</Button>
          <Button onClick={() => navigate('/AboutUs')} borderRadius="48px" backgroundColor="pink.base" textColor="chestnut.base" rightIcon={<ArrowForwardIcon />}>Learn More</Button>
        </ButtonGroup>
      </Flex>

      <Flex backgroundColor="pink.100" flexDirection="column" alignItems="center" gap="24px" padding="32px 20px">
        <Box >
          <Text textAlign="center" color="chestnut.base">Flavors</Text>
          <Heading color="chestnut.base">Gourmet Cookies</Heading>
        </Box>

        <Flex gap="16px" wrap="wrap" justifyContent="center" maxWidth="800px">
          <ItemContainer name="Red Velvet" description="Indulge in deep chocolatey deliciousness"/>
          <ItemContainer name="Red Velvet" description="Indulge in deep chocolatey deliciousness"/>
          <ItemContainer name="Red Velvet" description="Indulge in deep chocolatey deliciousness"/>
          <ItemContainer name="Red Velvet" description="Indulge in deep chocolatey deliciousness"/>
        </Flex>
      </Flex>

      <Flex backgroundColor="chestnut.50" flexDirection="column" alignItems="center" padding="96px 80px" gap="16px">   
          <Heading color="chestnut.base">Indulge in Sweetness</Heading>
          <Button backgroundColor="chestnut.base" borderRadius="48px" onClick={() => navigate('/AboutUs')}> Discover Our Story</Button>
      </Flex>

      <Flex backgroundColor="pink.100" padding="96px 80px" gap="40px" justifyContent="center">
        <Flex flexDirection="column">
          <Text color="chestnut.base">FAQ</Text>
          <Heading color="chestnut.base">Common Questions</Heading>
          <Text color="chestnut.base">Here are some of the common questions that we get</Text>
        </Flex>

        <Flex flexDirection="column">
          <Box>
            <Heading color="chestnut.base">Q: Do you offer gluten-free options?</Heading>
            <Text color="chestnut.base">A: Yes, please email lifessweeterside@gmail.com for more questions</Text>
          </Box>

          <Box>
            <Heading color="chestnut.base">Q: Where do you currently deliver</Heading>
            <Text color="chestnut.base">A: We currently only deliver around Omaha Nebraska</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
