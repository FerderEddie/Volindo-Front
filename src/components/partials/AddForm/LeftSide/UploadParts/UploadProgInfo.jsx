import React from "react";
import { Stack, Text } from "@chakra-ui/react"; // Necessary UI component imports from Chakra UI

function UploadProgInfo({
  uploadedFiles,
  fileStatus,
  selectedFiles,
  validFiles,
  invalidFiles,
  totalFiles,
  isUploading,
  shouldShowUploading,
}) {
  return (
    <>
      <Stack
        textAlign={"left"}
        justify={"space-between"}
        align={{base:"center", sm:"center", md:"start", lg:"center", xl:"center"}}
        direction={{base:"column", sm:"column", md:"row", lg:"row", xl:"row"}}
        color={"gray"}
        py={{base: 3, lg: 3}}
        w={{base:"100%", sm:"100%", md:"100%", lg:"95%", xl:"95%"}}
        m={"0 auto"}
        pt={
          ((validFiles.length > 0 || selectedFiles.length > 0) &&
            selectedFiles.length > 0) ||
          uploadedFiles.length > 0
            ? 4
            : 0
        }
      >
        {/* Display selected files */}
        {selectedFiles.length > 0 &&
          (fileStatus !== "uploading" || totalFiles > 10) && (
            <Text fontSize={{base:"sm", sm:"sm", md:"md", lg:"md", xl:"md"}}>
              Selected files: {selectedFiles.length}
              </Text>
          )}

        {/* Display the number of uploaded files */}
        {uploadedFiles.length > 0 && (!isUploading || totalFiles > 10) && (
          <Text fontSize={{base:"sm", sm:"sm", md:"md", lg:"md", xl:"md"}}>
            Uploaded: {uploadedFiles.length}/{uploadedFiles.length} files
          </Text>
        )}

        {/* Display only uploading status if currently uploading and total files <= 10 */}
        {shouldShowUploading && (
          <Text fontSize={{base:"sm", sm:"sm", md:"md", lg:"md", xl:"md"}}>
            Uploading: {validFiles.length - selectedFiles.length}/
            {validFiles.length} files
          </Text>
        )}
        <Text
          fontSize={{base:"2xs", sm:"xs", md:"xs", lg:"xs", xl:"13px"}}
          textAlign={{base:"center", sm:"center", md:"left", lg:"left", xl:"left"}}
          px={{base:2, sm: 1, md:0, lg: 0, xl: 0}}
          pt={{base:1, lg:0}}
          display={
            fileStatus === "uploading" &&
            selectedFiles.length <= 10 &&
            invalidFiles.length === 0 &&
            uploadedFiles.length + selectedFiles.length <= 10
              ? "inline-block"
              : "none"
          }
        >
          Please be patient during upload process
        </Text>
      </Stack>
    </>
  );
}

export default UploadProgInfo;
