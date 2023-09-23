// Importing necessary modules and components
import React from "react";
import { Heading, Flex, Input, Text } from "@chakra-ui/react";

// Email component definition taking email and setEmail as props
function Email({ email, setEmail }) {
  return (
    <>
      {/* Flex container to hold the email input section */}
      <Flex p={2} direction={"column"}>
        {/* Heading to display 'Email' */}
        <Heading
          fontSize={{ base: "17px", sm: "17px", md: "lg", lg: "lg", xl: "19px" }}
          mb={1}
          p={4}
          color={"white"}
          textAlign={"left"}
          letterSpacing={0.5}
          pb={0}
        >
          Email
        </Heading>

        {/* Flex container to hold the email input field */}
        <Flex my={4} pl={4}>
          <Input
            type="email"
            w={"95%"}
            fontSize={{ base: "13px", sm:"sm", md:"sm", lg: "sm", xl:"15px" }}
            borderRadius={"md"}
            cursor="text"
            border="2px solid #3F3F3F"
            color="white"
            placeholder="Your Email"
            letterSpacing={0.4}
            _focus={{
              boxShadow: "none",
              border: "solid 2px #7f827f",
            }}
            _hover={{
              border: "solid 2px #7f827f",
            }}
            defaultValue={email}
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Flex>

        {/* Text component to display additional information about the email input field */}
        <Text
          textAlign={"left"}
          pl={5}
          color={"#7f827f"}
          fontSize={{ base: "13px", sm: "13px", md: "sm", lg: "sm", xl: "15px" }}
          mb={3}
          letterSpacing={0.5}
        >
          Enter the email you'd like to <br /> receive the advertisement
          details.
        </Text>
      </Flex>
    </>
  );
}

export default Email;
