import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { BiSolidErrorCircle } from "react-icons/bi";

function ErrorToast({ error, onClose, }) {
  return (
    <>
      <Flex
        width={{ base: "88vw", sm:"60vw", md:"50vw", lg: "45vw", xl:"35vw" }}
        textAlign={"center"}
        m={"0 auto"}
        px={4}
        py={3}
        mt={2}
        color="white"
        bg="red.500"
        rounded="md"
        boxShadow="lg"
        direction={"column"}
        fontFamily={"Poppins"}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="start">
          <Box fontSize={{ base: "19px", sm:"19px", md:"19px", lg: "20px", xl:"21px" }}>
              <BiSolidErrorCircle color="white" />
            </Box>
            <Text
              fontWeight="bold"
              ml={1.5}
              fontSize={{ base: "15px", sm:"15px", md:"md", lg: "md", xl:"17px" }}
            >
              Error
            </Text>
          </Flex>

          <Box fontSize={{ base: "14px", sm:"15px", md:"16px", lg: "16px", xl:"16px" }}>
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </Box>
        </Flex>

        <Box
          textTransform={"capitalize"}
          pl={{ base: "25px", sm:"26px", md:"26.5px", lg: "27px", xl:"28px" }}
          mt={{ base: 1, lg: 0 }}
          textAlign={"left"}
          fontSize={{ base: "13px", sm:"13px", md:"sm", lg: "sm", xl:"15px" }}
        >
          {error.response?.data.error || error.message}
        </Box>
      </Flex>
    </>
  );
}

export default ErrorToast;
{
}
