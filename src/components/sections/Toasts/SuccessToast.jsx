import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { IoIosCheckmarkCircle } from "react-icons/io";

function SuccessToast({ onClose, message }) {
  return (
    <>
      <Flex
        width={{ base: "80vw", sm:"55vw", md:"50vw", lg: "45vw", xl:"35vw" }}
        textAlign={"center"}
        m={"0 auto"}
        px={4}
        py={3}
        mt={2}
        color="white"
        bg="green.500"
        rounded="md"
        boxShadow="lg"
        direction={"column"}
        fontFamily={"Poppins"}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="start">
            <Box fontSize={{ base: "19px", sm:"20px", md:"20px", lg: "21px", xl:"22px" }}>
              <IoIosCheckmarkCircle color="white" />
            </Box>
            <Text
              fontWeight="bold"
              ml={1.5}
              fontSize={{ base: "sm", sm:"md", md:"15px", lg: "md", xl:"17px" }}
            >
              Success
            </Text>
          </Flex>

          <Box fontSize={{ base: "sm", sm:"sm", md:"sm", lg: "16px", xl:"16px" }}>
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
          pl={{ base: "26px", sm:"27px", md:"27px", lg: "28px", xl:"30px" }}
          mt={{ base: 1, lg: 0 }}
          textAlign={"left"}
          fontSize={{ base: "xs", sm:"sm", md:"sm", lg: "15px", xl:"15px" }}
        >
          <Text>{message}</Text>
        </Box>
      </Flex>
    </>
  );
}

export default SuccessToast;
