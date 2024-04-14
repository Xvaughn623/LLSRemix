import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Flex borderBottomRadius={8}>
      <Tabs display="flex" alignItems="center"  variant="unstyled" color="chestnut.base">
        <TabList>
          <Tab _hover={{ color: "cream.base" }} onClick={() => navigate("/")}>Home</Tab>
          <Tab _hover={{ color: "cream.base" }} onClick={() => navigate("/AboutUs")}>About Us</Tab>
          <Tab _hover={{ color: "cream.base" }} onClick={() => navigate("/Order")}>Order Now</Tab>
          <Tab _hover={{ color: "cream.base" }} onClick={() => navigate("/ContactUs")}>Contact Us</Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
};

export { Navbar };
