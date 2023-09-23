import { Flex, Stack, Heading, Text } from "@chakra-ui/react";

import SVG from "../AdCreated/SVG";

import Buttons from "./Buttons";

function Main() {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify={"center"}
        textTransform={"capitalize"}
        mt={{ base: "-12%", sm: "-6%", md: "0%", lg: "8%", xl: "-2%" }}
      >
        {/* Left container with SVG icon */}
        <Flex
          mt={{ base: 0, sm: 0, md: 0, lg: -8, xl: "2.5%" }}
          mb={{ base: 6, sm: 0, md: 0, lg: 0, xl: "2.5%" }}
          mx={{ base: "auto", sm: "auto", md: "0", lg: "0", xl: "0" }}
          w={{ base: "34%", sm: "24%", md: "24%", lg: "20%", xl: "17%" }}
          justify={"center"}
        >
          <SVG />
        </Flex>

        {/* Right container with thank you message and action buttons */}
        <Flex
          mt={{
            base: "-90px",
            sm: "-30px",
            md: "50px",
            lg: "50px",
            xl: "50px",
          }}
          w={{ base: "100%", sm: "100%", md: "45%", lg: "45%", xl: "45%" }}
          pt={{ base: 0, sm: 0, md: 2, lg: 2, xl: 16 }}
          gap={{ base: 2, sm: 3, md: 2, lg: 4, xl: 4 }}
          pl={{ base: 0, sm: 0, md: 6, lg: 8, xl: 8 }}
          direction={"column"}
        >
          <Heading
            fontSize={{
              base: "xl",
              sm: "xl",
              md: "xl",
              lg: "xl",
              xl: "40px",
            }}
            color={"white"}
            textAlign={{ base: "center", lg: "left" }}
            letterSpacing={0.5}
            fontFamily={"Poppins"}
            px={{ base: 10, lg: 0, xl: 0 }}
          >
            Thank you for creating advertising with Volindo.
          </Heading>

          {/* Additional info text */}
          <Text
            w={{ base: "100%", lg: "80%" }}
            color="#7f827f"
            textAlign={{ base: "center", lg: "left" }}
            fontSize={{
              base: "lg",
              sm: "lg",
              md: "17px",
              lg: "lg",
              xl: "xl",
            }}
            px={{ base: 8, sm: "20%", lg: 0 }}
            mt={{ base: 4, lg: 0 }}
            mb={{ base: 8, sm: 8, md: 5, lg: 0 }}
          >
            The created advertisement will be moderated in the near future and
            will start working.
          </Text>

          <Text
            w={{ base: "100%", lg: "80%" }}
            color="whitesmoke"
            textAlign={{ base: "center", lg: "left" }}
            fontSize={{
              base: "sm",
              sm: "sm",
              md: "sm",
              lg: "sm",
              xl: "md",
            }}
            px={{ base: 8, lg: 0 }}
            mt={{ base: 0, lg: 2 }}
            mb={{ base: 6, sm: 4, md: 0, lg: 0, xl: 0 }}
          >
            check email to see the details of your new ad
          </Text>

          {/* Action buttons to create new advertisement or navigate to main page */}
          <Buttons />
          
        </Flex>
      </Stack>
    </>
  );
}

export default Main;
