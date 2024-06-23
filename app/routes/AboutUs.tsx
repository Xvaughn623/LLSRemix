import { Flex, Text, Heading, Img, Box } from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <Box
      alignItems="center"
      flexDirection="column"
      backgroundImage='./Images/test1.jpg'
      backgroundAttachment="fixed"
      background-repeat='no-repeat'
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box alignSelf='center' backgroundColor="chestnut.50">
        <Img margin="auto" width="200px" src="./Images/Logo-transparent.png" />
      </Box>
        
        
        <Box backgroundColor='pink.100' textAlign="center">
          <Heading paddingTop="24px">Who are we?</Heading>

          <Text textAlign="center" padding="0px 32px 0 32px" fontSize="32px">
            Life's Sweeter Side is family-owned sweets boutique Dedicated to making precious delicacies for your family to enjoy.
            Our founder and head baker, Nicole Vaughn Is a mother of three that loves to bake cookies, candy, and fun jewelry for all to enjoy.
          </Text> 
        </Box>
          

        <Box backgroundColor='chestnut.50' textAlign="center" width="100%">
          <Heading paddingTop="24px">Our Mission</Heading>

          <Text textAlign="center" fontSize="32px">
          To make the world a better place one cookie at a time.
          </Text>
        </Box>
    </Box>
  );
};

export default AboutUsPage ;
