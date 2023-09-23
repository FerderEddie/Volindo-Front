// Necessary UI component imports from Chakra UI
import React from "react";
import { Text } from "@chakra-ui/react";

function UploadProgText({
  uploadedFiles,
  file,
  fileStatus,
  uploadProgress,
  selectedFiles,
}) {
  return (
    <>
      {/* Text component to display the upload progress with specific styling properties */}
      <Text
        color={"#797979"}
        pr={{ base: 2.5, sm: 4, md: 4, lg: 4, xl: 4 }}
        fontSize={{ base: "9px", sm: "2xs", md: "xs", lg: "xs", xl: "xs" }}
        mt={{base: 2, sm: 2, md: 2, lg: 1, xl: 0.5}}
        whiteSpace="nowrap"
      >
        {uploadedFiles.includes(file)
          ? "Downloaded 100%"
          : fileStatus === "uploading" &&
            uploadProgress[file.name] &&
            uploadedFiles.length + selectedFiles.length <= 10
          ? `Downloading ${uploadProgress[file.name].percentage}%`
          : ""}
      </Text>
    </>
  );
}

export default UploadProgText;
