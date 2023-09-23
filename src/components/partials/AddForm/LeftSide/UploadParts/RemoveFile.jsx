// Importing necessary modules and components
import React from "react";
import { Box } from "@chakra-ui/react"; 
import { GrClose } from "react-icons/gr";

function RemoveFile({
  invalidFiles,
  file,
  theme,
  setFileIndexToDelete,
  uploadedFiles,
  onAlertOpen,
  removeFileHandler,
  index,
}) {
  return (
    <>
      {/* Box component representing a clickable area to remove a file */}
      <Box
        w={{base:"17px", sm:'17px', md:"19px", lg:"19px", xl:"20px"}}
        h={{base:"17px", sm:'17px', md:"19px", lg:"19px", xl:"20px"}}
        p={{base:1, lg:0}}
        mt={{base: 1.5, sm: 1.5, md: 1.5, lg: 0.5, xl: 0.4}}
        color={"gray"}
        display="flex"
        alignItems="center"
        bg={invalidFiles.includes(file) ? theme.colors.red[500] : "gray"}
        justifyContent="center"
        style={{ borderRadius: "50%" }}
        cursor={"pointer"}
        border="none"
        fontSize={"10px"}
        onClick={() => {
          // Click handler to determine the appropriate remove action based on file _id
          if (
            uploadedFiles.some((uploadedFile) => uploadedFile._id === file._id)
          ) {
            // If the file is in the uploadedFiles list, trigger the alert dialog
            setFileIndexToDelete(file._id);
            onAlertOpen();
          } else {
            // Otherwise, directly remove the file using removeFileHandler function
            removeFileHandler(index);
          }
        }}
      >
        <GrClose />
      </Box>
    </>
  );
}

export default RemoveFile;
