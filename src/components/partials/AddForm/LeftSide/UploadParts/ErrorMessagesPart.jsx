import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";

function ErrorMessagesPart({ invalidFiles, validFileTypes, file, theme }) {
  return (
    <>
      {/* Flex container to hold the error message section */}
      <Box>
        {/* Check if the current file is in the invalidFiles list */}
        {invalidFiles.includes(file) && (
          <Stack spacing={2} align="center" fontSize={{base:"xl", sm:"xl", md:"lg", lg:"lg", xl:"xl"}} direction={{base:"column", sm:"column", md:"row"}}
           mt={{ base: 2, sm: 2, md: 2, lg: 2, xl: 2 }} pl={{base: 1}}>
            {/* Box to contain the info icon */}
            <Flex color={theme.colors.red[500]}>
              <AiOutlineInfoCircle />
            </Flex>
            {/* Text component to display the appropriate error message */}
            <Text color={theme.colors.red[500]}
             fontSize={{ base: "11px", sm: "xs", md: "xs", lg: "sm", xl: "sm" }}>
              {/* Conditional rendering of error message based on file type and size */}
              {validFileTypes.includes(file.type)
                ? file.type.startsWith("image")
                  ? "This image is too large. Please upload only files less than 5MB."
                  : "This video is too large. Please upload only files less than 50MB."
                : "Invalid file type. Please upload only supported file formats."}
            </Text>
          </Stack>
        )}
      </Box>
    </>
  );
}

export default ErrorMessagesPart;
