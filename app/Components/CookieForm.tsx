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
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";

import emailjs from "@emailjs/browser";
import { CookieCard } from "./CookieCard";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { STATES } from "../CONSTANTS";
import { SendEmail } from "./SendEmail";
import cookies from "../Data/COOKIE_DATA.json";

const orderItems = {
  RVC: 0,
  SDC:0,
  CCC: 0,
  ORC: 0,
  CPBC: 0,
  MC: 0,
  SSCC: 0,
};

interface Cookie {
  type: string;
  allergens: number;
}

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  addressOne: string;
  addressTwo: string;
  city: string;
  state: string;
  zipCode: number;
  //totalCookieAmount: number;
  customersOrderedItems: object;
}
// Service ID

const fieldStyles = {
  backgroundColor: "cream.50",
  border: "4px",
  borderColor: "chestnut.base",
  color: "chestnut.700",
  borderRadius: "4px",
  focusBorderColor: "chestnut.700",
  _hover: { borderColor: "chestnut.800", opacity: 0.5 },
  _placeholder: { color: "inherit", opacity: 0.5 },
  isRequired: true,
};

const CookieForm = () => {
  const form = useRef();

  const { control, handleSubmit, setValue } = useForm<IFormInput>();
  //: SubmitHandler<IFormInput> submit form type

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    // Commented out so as not to spam my email with tests
    //SendEmail(data);
  };

  const [orderItemData, setOrderItemData] = useState({});

  const handleSetItemNum = (num: number, code: string): any => {
    setOrderItemData({...orderItemData, [code]: num })

    setValue('customersOrderedItems', orderItemData);
    console.log('testing set: ', num, code);
  }

  useEffect(() => {
    console.log('order Item Data: ', orderItemData)
  }, [orderItemData])

  return (
    <Box
      backgroundColor="chestnut.200"
      rounded="16px"
      padding="16px"
      margin="16px"
    >
      <Flex flexDirection="column">
        <Heading alignSelf="center" color="chestnut.800">
          Order Cookies!
        </Heading>

        <FormControl>
          <FormLabel fontSize="20px" color="chestnut.800">
            Name
          </FormLabel>

          <Flex gap="8px">
            <Box>
              <Controller
                name="firstName"
                control={control}
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

              <FormHelperText color="chestnut.800">First Name</FormHelperText>
            </Box>

            <Box>
              <Controller
                name="lastName"
                control={control}
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

            <FormHelperText color="chestnut.800">
              Address Field 1
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
              Address Field 2
            </FormHelperText>
          </Box>

          <Flex gap="4px">
            <Box flex={2}>
              <Controller
                name="city"
                control={control}
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

              <FormHelperText color="chestnut.800">City</FormHelperText>
            </Box>

            <Box flex={1}>
              <Controller
                name="state"
                control={control}
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

              <FormHelperText color="chestnut.800">State</FormHelperText>
            </Box>

            <Box flex={1}>
              <Controller
                name="zipCode"
                control={control}
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

              <FormHelperText color="chestnut.800">Zip Code</FormHelperText>
            </Box>
          </Flex>
        </FormControl>
        <hr />

        <Flex
          borderRadius={4}
          padding="8px 8px 8px 8px"
          flexWrap="wrap"
          gap="32px"
        >
          {cookies.map((cookie) => {
            return (
              <Flex flexDirection='column' flex="1 1 0px" justifyContent="flex-end">
                <Heading
                  textAlign="center"
                  fontSize="24px"
                >
                  {cookie.type}
                </Heading>

                  <CookieCard
                    key={cookie.type}
                    type={cookie.type}
                    ingredients={cookie.ingredients}
                    allergens={cookie.allergens}
                    code={cookie.code} // use code to set state in 
                    setItemNum={handleSetItemNum}
                  />
                </Flex>
            );
          })}
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
