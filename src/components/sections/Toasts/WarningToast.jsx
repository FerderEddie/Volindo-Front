import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { IoIosWarning } from "react-icons/io";

function WarningToast({ onClose, message }) {
  return (
    <>
      <Flex
        width={{ base: "85vw", sm:"55vw", md:"50vw", lg: "45vw", xl:"35vw" }}
        textAlign={"center"}
        m={"0 auto"}
        px={4}
        py={3}
        mt={2}
        color="white"
        bg="orange.500"
        rounded="md"
        boxShadow="lg"
        direction={"column"}
        fontFamily={"Poppins"}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="start">
            <Box fontSize={{ base: "20px", sm:"20px", md:"22px", lg: "22px", xl:"22px" }}>
              <IoIosWarning color="white" />
            </Box>
            <Text
              fontWeight="bold"
              ml={1.5}
              fontSize={{ base: "sm", sm:"md", md:"md", lg: "md", xl:"17px" }}
            >
              Warning
            </Text>
          </Flex>

          <Box fontSize={{ base: "12px", sm:"14px", md:"15px", lg: "15px", xl:"md" }}>
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
          pl={{ base: "28px", sm:"28px", md:"30px", lg: "30px", xl:"30px" }}
          mt={{ base: 1, lg: 0 }}
          textAlign={"left"}
          fontSize={{ base: "xs", sm:"sm", md:"sm", lg: "sm", xl:"15px" }}
        >
          <Text>{message}</Text>
        </Box>
      </Flex>
    </>
  );
}

export default WarningToast;
