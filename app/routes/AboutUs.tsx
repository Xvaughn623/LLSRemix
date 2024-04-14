import { Flex, Text, Heading, Img, Box } from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <Flex 
      alignItems="center"
      flexDirection="column"
      minHeight={[null, null, "100vh", "100vh"]}
      minWidth={[null, null, "100%", "100%"]}
      backgroundImage='./Images/test1.jpg'
      backgroundAttachment="fixed"
      background-repeat='no-repeat'
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex
        paddingBottom="24px"
        alignItems="center" 
        flexDirection="column" 
        width="100%" 
        backgroundColor="white"
        borderRadius='4px'
      >
          <Img width="200px" src="./Images/Logo-transparent.png"/>

          {/* <Heading paddingTop="24px" textAlign="center">LIFE&apos;S SWEETER SIDE</Heading> */}

          <Heading as="h3">Who are we?</Heading>

          <Text textAlign="center" paddingTop="16px" fontSize="32px">
            We are a family owned sweets boutique Dedicated to making precious delicacies for your family to enjoy.
            Our owner Nicole Vaughn Is a mother of three that loves to bake cookies, candy, and fun jewelry for all to enjoy.
            For more info into Who we are, please see About Me.
          </Text>

          <Heading as="h3" paddingTop="24px">Our Mission</Heading>

          <Text textAlign="center" paddingTop="16px" fontSize="32px">
          To make the world a better and more delicious place.
          </Text>
      </Flex>
    </Flex>
  );
};

export default AboutUsPage ;
