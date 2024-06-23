import {
  Flex,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Input,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Img,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

import { CookieCard } from "./CookieCard";
import { useForm, Controller } from "react-hook-form";
import { STATES } from "../CONSTANTS";
import { SendEmail } from "./SendEmail";
import cookies from "../Data/COOKIE_DATA.json";

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  state: string;
  zipCode: number;
  customersOrderedItems: any;
}
// Service ID

const fieldStyles = {
  backgroundColor: "cream.50",
  border: "4px",
  borderColor: "chestnut.base",
  color: "chestnut.700",
  borderRadius: "8px",
  focusBorderColor: "chestnut.700",
  _hover: { borderColor: "chestnut.800", opacity: 0.5 },
  _placeholder: { color: "inherit", opacity: 0.5 },
  isRequired: true,
};

const CookieForm = () => {
  //const form = useRef();

  const { control, handleSubmit, setValue, formState: {errors} } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log('submitted data: ', data);
    // Commented out so as not to spam my email with tests
    SendEmail(data);
  };

  const [orderItemData, setOrderItemData] = useState({});

  // all cookies available to map over
  const [availableCookies, setAvailableCookies] = useState([...cookies])
  const [selectedCookies, setSelectedCookies] = useState([])

  const handleSetItemNum = (num: number, code: string): void => {
    setOrderItemData({...orderItemData, [code]: num })
  }

  useEffect(() => {
    console.log('selectedCookies', selectedCookies);
    console.log('availableCookies', availableCookies);
  }, [selectedCookies])

  useEffect(() => {
    console.log('order Item Data: ', orderItemData)
    setValue('customersOrderedItems', {...orderItemData});
  }, [orderItemData])

  return (
    <Box
      backgroundColor="chestnut.200"
      rounded="16px"
      padding="16px"
      margin="16px"
    >
      <Flex flexDirection="column" alignItems="center">
        <Heading color="chestnut.800">
          Order Cookies!
        </Heading>

        <Text color="red">
          We are only delivering in Omaha currently! Other areas soon to follow.
        </Text>

        <FormControl>
          <FormLabel fontSize="20px" color="chestnut.800">
            Name
          </FormLabel>

          <Flex gap="8px">
            <Box>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    {...fieldStyles}
                    placeholder="Jerry"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />

              {errors.firstName?.type === "required" && (
                <Text color="red" fontSize="small">First name is Required</Text>
              )}

              <FormHelperText color="chestnut.800">First Name</FormHelperText>
            </Box>

            <Box>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    {...fieldStyles}
                    placeholder="Sprinkles"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />

              {errors.lastName?.type === "required" && (
                <Text color="red" fontSize="small">Last Name is Required</Text>
              )}

              <FormHelperText color="chestnut.800">Last Name</FormHelperText>
            </Box>
          </Flex>
        </FormControl>

        <FormControl>
          <Box>
            <FormLabel fontSize="20px" color="chestnut.800">
              Email
            </FormLabel>

            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                  {...fieldStyles}
                  placeholder="JSprinkles@gumdrop.com"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors.email?.type === "required" && (
              <Text color="red" fontSize="small">Email is Required</Text>
            )}
          </Box>
        </FormControl>

        <FormControl>
          <Box width="100%">
            <FormLabel fontSize="20px" color="chestnut.800">
              Address
            </FormLabel>

            <Controller
              name="addressOne"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Input
                  {...fieldStyles}
                  placeholder="Candy Lane"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors.addressOne?.type === "required" && (
              <Text color="red" fontSize="small">Address One is Required</Text>
            )}

            <FormHelperText color="chestnut.800">
              Address One
            </FormHelperText>

            <Controller
              name="addressTwo"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  {...fieldStyles}
                  placeholder="Apt. 29"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            <FormHelperText color="chestnut.800">
              Address Two
            </FormHelperText>
          </Box>

          <Flex gap="4px">
            <Box flex={2}>
              <Controller
                name="city"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    {...fieldStyles}
                    placeholder="chip"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />

              {errors.city?.type === "required" && (
              <Text color="red" fontSize="small">City is Required</Text>
              )}

              <FormHelperText color="chestnut.800">City</FormHelperText>
            </Box>

            <Box flex={1}>
              <Controller
                name="state"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Select
                    {...fieldStyles}
                    placeholder="Cookie"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  >
                    {STATES.map((state: string) => (
                      <option key={state}>{state}</option>
                    ))}
                  </Select>
                )}
              />
              
              {errors.state?.type === "required" && (
              <Text color="red" fontSize="small">State is Required</Text>
              )}

              <FormHelperText color="chestnut.800">State</FormHelperText>
            </Box>

            <Box flex={1}>
              <Controller
                name="zipCode"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Input
                    {...fieldStyles}
                    placeholder="99999"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
              {errors.city?.type === "required" && (
              <Text color="red" fontSize="small">Zip Code is Required</Text>
              )}

              <FormHelperText color="chestnut.800">Zip Code</FormHelperText>
            </Box>
          </Flex>
        </FormControl>

        <Flex
          borderRadius={4}
          padding="8px 8px 8px 8px"
          flexWrap="wrap"
          gap="32px"
        >
          {selectedCookies && selectedCookies.map((cookie: any) => {
            return (
              <Flex flexDirection='column' flex="1 1 0px" justifyContent="flex-end">
                <Text
                  textAlign="center"
                  fontSize="24px"
                  backgroundColor="chestnut.400"
                  borderRadius="4px 4px 0 0"
                  textColor="chestnut.800"
                >
                  {cookie.type}
                </Text>
                  <CookieCard
                    key={cookie.type}
                    type={cookie.type}
                    ingredients={cookie.ingredients}
                    allergens={cookie.allergens}
                    code={cookie.code}
                    setItemNum={handleSetItemNum}
                  />
                </Flex>
            );
          })}

          {availableCookies.length > 0 && 
            <Menu>
              <MenuButton
                isRound
                backgroundColor="chestnut.base"
                aria-label="subtract cookie"
                alignSelf="center"
                as={IconButton}
              >
                <AddIcon />
              </MenuButton>

              <MenuList>
                {availableCookies.map((cookie: any) => (
                  <MenuItem onClick={() => {
                    setSelectedCookies([...selectedCookies, cookie])
                    setAvailableCookies(availableCookies.filter(x => x.code !== cookie.code))
                  }}>
                    <Img width="25px" mr="8px" src={`./Images/${cookie.code}-Cookie-Icon.png`} />
                    {cookie.type}
                  </MenuItem>
                )
                )}
              </MenuList>
            </Menu>
          }
        </Flex>

        <Button
          _hover={{ backgroundColor: "pink.200" }}
          marginTop={4}
          alignSelf="center"
          backgroundColor="pink.300"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export { CookieForm };
