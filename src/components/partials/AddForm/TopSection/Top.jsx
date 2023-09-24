import React from "react";
import { Heading, Stack, Flex, Input } from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";
import InnerMenu from "../../../sections/InnerMenu";

function Top({advertisementName, setAdvertisementName}) {
  return (
    <>
      <Stack
        w={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        mt={{ base: 0, lg: 4 }}
      >
        {/* header */}
        <Flex
          mx={"auto"}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "85%", xl: "79%" }}
        >
          <Heading
            fontSize={{
              base: "2xl",
              sm: "2xl",
              md: "28px",
              lg: "xx-large",
              xl: "xx-large",
            }}
            pb={{ base: 3, sm: 3, md: 6, lg: 5, xl: 5 }}
            pt={{ base: 4, lg: 0 }}
            textAlign={{ base: "center", lg: "left" }}
            color={"white"}
            m={{ base: "0 auto", lg: "0" }}
          >
            Marketing Studio
          </Heading>
        </Flex>

        {/* inner menu */}
        <Flex
          w={{ base: "100%", lg: "max-content" }}
          mx={{ base: "auto", lg: "0" }}
          ml={{ lg: "7.5%", xl: "10.6%" }}
          direction={"column"}
        >
          <InnerMenu />
        </Flex>

        {/* advertisement name section */}
        <Flex
          my={{ base: 3, lg: 4 }}
          pb={{ base: 1, lg: 0 }}
          mx={"auto"}
          align={"center"}
          gap={2}
          fontFamily={"Poppins"}
          w={{ base: "80%", sm: "80%", md: "75%", lg: "85%", xl: "78.5%" }}
        >
          <Input
            borderRadius={"md"}
            fontSize={{ base: "sm", lg: "md" }}
            cursor="text"
            border="2px solid #3F3F3F"
            color="white"
            placeholder="New Advertisement"
            w={{ base: "100%", sm: "70%", md: "60%", lg: "30%", xl: "30%" }}
            _focus={{
              boxShadow: "none",
              border: "solid 2px #7f827f",
            }}
            _hover={{
              border: "solid 2px #7f827f",
            }}
            defaultValue={advertisementName}
            onBlur={(e) => {
              setAdvertisementName(e.target.value);
            }}
          />
        </Flex>
      </Stack>
    </>
  );
}

export default Top;
