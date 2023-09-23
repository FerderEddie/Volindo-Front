import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { format } from "date-fns";


function InfoToast({ startDateWithTime, finishDateWithTime, onClose }) {
  return (
    <>
      <Flex
        width={{ base: "93vw", sm:"60vw", md:"55vw", lg: "45vw", xl:"35vw" }}
        textAlign={"center"}
        m={"0 auto"}
        px={4}
        py={3}
        mt={2}
        color="white"
        bg="blue.500"
        rounded="md"
        boxShadow="lg"
        direction={"column"}
        fontFamily={"Poppins"}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" justifyContent="start" pl={{base: 1, lg: 1}}>
          <Box fontSize={{ base: "16px", sm:"17px", md:"18px", lg: "18px", xl:"18px" }}>
              <BsFillCalendarCheckFill color="white" />
            </Box>
            <Text
              fontWeight="bold"
              ml={{base: 2, lg: 2}}
              fontSize={{ base: "sm", sm:"sm", md:"md", lg: "md", lg:"16px" }}
            >
              Date Range Has Been Defined
            </Text>
          </Flex>

          <Box fontSize={{ base: "14px", sm:"14px", md:"16px", lg: "16px", xl:"16px" }}>
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
          mt={{ base: 2, lg: 1 }}
          px={2}
          ml={{base:"0", sm:"0", md:"3vw", lg:"2.4vw", xl:"1.4vw"}}
          textAlign={{base:"center", sm:"center", md:'left', lg:"left", xl:"left"}}
          fontSize={{ base: "13px", sm:"sm", md:"sm", lg: "sm", xl:"15px" }}
        >
          <Text>{`Start: ${format(
            startDateWithTime,
            "dd-MM-yyyy HH:mm"
          )} - Finish: ${format(
            finishDateWithTime,
            "dd-MM-yyyy HH:mm"
          )}`}</Text>
        </Box>
      </Flex>
    </>
  );
}

export default InfoToast;
