// Importing necessary modules and components
import React from "react";
import { HStack, Flex, Spinner, Stack } from "@chakra-ui/react";
import UploadButton from "./UploadButton";

// Defining the ButtonsStack component which accepts props 
function ButtonsStack({ isButtonsLoading, uploadedFiles, onOpen }) {
  return (
    <> 
      {/* VStack to arrange children elements in a vertical stack */}
      <Stack spacing={{base: 6, lg: 5}} py={2}>
        {isButtonsLoading ? (
          <Flex height="100px" alignItems="center" justifyContent="center">
            <Spinner color="#AACD5F" />
          </Flex>
        ) : (
          // Create an array with a length depending on the uploaded files count (min 3, max 10) and map over it to create rows of buttons
          Array(Math.ceil(Math.min(10, Math.max(uploadedFiles.length, 3)) / 3))
            .fill(null)
            .map((_, rowIndex) => (
              // Creating a horizontal stack for each row of buttons
              <HStack justify="flex-start" key={rowIndex} w="100%" spacing={4}>
                {[0, 1, 2].map((offset) => {

                  // Calculating the index of the current button
                  const idx = rowIndex * 3 + offset;

                  // Check if the button should be displayed within the limit (max 10 buttons)
                  const isWithinLimit = idx < Math.min(10, uploadedFiles.length);

                    // Determine if the button should be shown (if within the limit or less than 3 files uploaded)
                  const shouldShowButton = isWithinLimit || uploadedFiles.length < 3;

                  return shouldShowButton ? (
                    // If the button should be displayed, render the UploadButton component
                    <UploadButton
                      key={offset}
                      index={idx}
                      uploadedFiles={uploadedFiles}
                      onOpen={onOpen}
                      minW="100px"
                    />
                  ) : null;
                })}
              </HStack>
            ))
        )}
      </Stack>
    </>
  );
}

export default ButtonsStack;
