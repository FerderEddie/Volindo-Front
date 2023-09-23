import React, { useState, useRef } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Flex,
  useToast,
} from "@chakra-ui/react"; // Necessary UI component imports from Chakra UI

import AlertDialogPart from "./AlertDialogPart"; // Alert Dialog for handling confirmations
import { limitFileName } from "./LimitFileName"; // Utility function for limiting the length of file names
import { uploadFilesHandler } from "./UploadFilesHandler"; // Utility function for handling file uploads
import ModalFooterPart from "./ModalFooterPart"; // Modal footer component
import ErrorMessagesPart from "./ErrorMessagesPart"; // Component that displays error messages
import RemoveFile from "./RemoveFile"; // Component to handle or show the functionality of removing a file
import UploadProgText from "./UploadProgText"; // Text component indicating the progress of the upload
import UploadProgInfo from "./UploadProgInfo"; // Component showing detailed information about the upload progress
import SelectField from "./SelectField"; // Field/component for selecting or dropping files for upload

// File validations
const validFileTypes = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "video/mp4",
  "video/avi",
];
const maxFileSize = {
  image: 5 * 1024 * 1024, // 5MB in bytes
  video: 50 * 1024 * 1024, // 50MB in bytes
};

// The ModalSection component handles the modal interactions for the Upload feature
function ModalSection({
  isOpen,
  onClose,
  setButtonValue,
  handleFileChange,
  selectedFiles,
  setSelectedFiles,
  uploadedFiles,
  spinnerValue,
  isAlertOpen,
  onAlertClose,
  onAlertOpen,
  cancelRef,
  fileIndexToDelete,
  removeFileHandler,
  setFileIndexToDelete,
  theme,
  setSpinnerValue,
  setUploadedFiles,
  fileStatus,
  setFileStatus,
}) {
  const [validFiles, setValidFiles] = useState([]); // Files that are valid for upload
  const [invalidFiles, setInvalidFiles] = useState([]); // Files that are invalid for upload
  const [uploadProgress, setUploadProgress] = useState({}); // Progress of each file's upload
  const [filesToUpload, setFilesToUpload] = useState([]); // Files ready to be uploaded
  const [isUploadClicked, setIsUploadClicked] = useState(false); // State for tracking the upload button click

  const toast = useToast(); // Chakra-UI toast for feedback
  const fileRefs = useRef([]); // Refs for file elements

  // Handler for upload operation
  const handleUpload = () => {
    const options = {
      selectedFiles,
      setIsUploadClicked,
      setFileStatus,
      maxFileSize,
      setValidFiles,
      setInvalidFiles,
      setFilesToUpload,
      toast,
      setSpinnerValue,
      setUploadedFiles,
      setButtonValue,
      setUploadProgress,
      setSelectedFiles,
      uploadedFiles,
    };

    uploadFilesHandler(options);
  };

  // Combine all selected and uploaded files
  const allFiles = [...selectedFiles, ...uploadedFiles];

  // variables to handle file status display
  const totalFiles = uploadedFiles.length + selectedFiles.length;
  const isUploading = fileStatus === "uploading";
  const shouldShowUploading =
    isUploading && totalFiles <= 10 && invalidFiles.length === 0;

  return (
    <div>
      {/* --------------------------------------------------------Modal Section--------------------------------------------------------------- */}

      {/* Modal structure */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setButtonValue(false), onClose();
        }}
        size={"xl"}
      >
        {/* Modal overlay */}
        <ModalOverlay
          bgColor="rgba(0, 0, 0, 0.5)"
          backdropInvert="80%"
          backdropBlur="2px"
        />

        {/* Modal content */}
        <ModalContent
          w={{ base: "85%", sm: "75%", md: "65%", lg: "80%", xl: "100%" }}
          bgColor={"#141414"}
          textAlign={"center"}
          borderRadius={16}
          fontFamily="Poppins"
          maxH={{
            base: "500px",
            sm: "500px",
            md: "450px",
            lg: "450px",
            xl: "520px",
          }}
          overflowY={"auto"}
          css={{
            "::-webkit-scrollbar": {
              width: "8px",
              height: "5px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          {/* Modal close button */}
          <ModalCloseButton
            w={{ base: "25px", lg: "30px" }}
            h={{ base: "25px", lg: "30px" }}
            mt={1}
            size={{ base: "sm", lg: "md" }}
            color={"gray"}
            bg="#202020"
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ borderRadius: "50%" }}
            border="none"
            _hover={{ outline: "none", border: "none" }}
            _focus={{ outline: "none", border: "none" }}
          />

          {/* Modal body */}
          <ModalBody textAlign={"center"}>
            {/* file select field */}
            <SelectField handleFileChange={handleFileChange} />

            {/* displays upload progress information. */}
            <UploadProgInfo
              uploadedFiles={uploadedFiles}
              selectedFiles={selectedFiles}
              validFiles={validFiles}
              invalidFiles={invalidFiles}
              fileStatus={fileStatus}
              totalFiles={totalFiles}
              isUploading={isUploading}
              shouldShowUploading={shouldShowUploading}
            />

            {/* ---------------------------------------------loop through all files and display them----------------------------------------------------- */}

            <Flex
              justify={"center"}
              direction={"column-reverse"}
              w={{ base: "100%", lg: "95%" }}
              m={"0 auto"}
              gap={{ base: 2, lg: 0 }}
            >
              {/* Map through all files to display them */}
              {allFiles.map((file, index) => (
                <Flex
                  direction="column"
                  key={index}
                  mt={1}
                  mb={{ base: 0, lg: 2 }}
                  ref={(el) => (fileRefs.current[index] = el)}
                >
                  {/* Top section displaying file name and status */}
                  <Flex
                    color={"white"}
                    direction={{ base: "row", lg: "row" }}
                    // Conditional styling based on file validity or position
                    border={`solid 1px ${
                      invalidFiles.includes(file) ||
                      (selectedFiles.indexOf(file) >= 10 && isUploadClicked)
                        ? theme.colors.red[500]
                        : "#797979"
                    }`}
                    borderBottom={
                      uploadedFiles.includes(file)
                        ? `solid 4px #AACD5F`
                        : (isUploadClicked && index >= 10) ||
                          invalidFiles.includes(file)
                        ? `solid 1px ${theme.colors.red[500]}`
                        : `solid 1px #797979`
                    }
                    borderRadius={6}
                    textAlign={{ base: "left", lg: "left" }}
                    py={2.5}
                    px={2.5}
                    fontSize={"sm"}
                    justify={"space-between"}
                  >
                    {/* Limit the display name length for each file */}
                    <Box
                      fontSize={{
                        base: "11px",
                        sm: "xs",
                        md: "sm",
                        lg: "sm",
                        xl: "15פס",
                      }}
                      w={{
                        base: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "auto",
                        xl: "auto",
                      }}
                      pt={{ base: 2, lg: 0 }}
                    >
                      {limitFileName(file.name)}
                    </Box>

                    <Flex>
                      {/* Show upload progress for the file */}
                      <UploadProgText
                        uploadedFiles={uploadedFiles}
                        file={file}
                        fileStatus={fileStatus}
                        uploadProgress={uploadProgress}
                        selectedFiles={selectedFiles}
                      />

                      {/* AlertDialog for File Deletion */}
                      <AlertDialogPart
                        isOpen={isAlertOpen}
                        onClose={onAlertClose}
                        onDelete={() => {
                          removeFileHandler(fileIndexToDelete);
                          onAlertClose();
                        }}
                        cancelRef={cancelRef}
                      />

                      {/* Remove icon with logic to delete */}
                      <RemoveFile
                        invalidFiles={invalidFiles}
                        file={file}
                        theme={theme}
                        setFileIndexToDelete={setFileIndexToDelete}
                        uploadedFiles={uploadedFiles}
                        onAlertOpen={onAlertOpen}
                        removeFileHandler={removeFileHandler}
                        index={index}
                      />
                    </Flex>
                  </Flex>

                  {/* Error messages for invalid files */}
                  <ErrorMessagesPart
                    validFileTypes={validFileTypes}
                    invalidFiles={invalidFiles}
                    file={file}
                    theme={theme}
                  />
                </Flex>
              ))}
            </Flex>
          </ModalBody>

          {/* Modal footer */}
          <ModalFooter
            justifyContent={"center"}
            pb={{ base: 8, sm: 9, md: 9, lg: 10, xl: 10 }}
            pt={{ base: 6, sm: 6, md: 8, lg: 5, xl: 4 }}
          >
            <ModalFooterPart
              selectedFiles={selectedFiles}
              handleUpload={handleUpload}
              spinnerValue={spinnerValue}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default React.memo(ModalSection);
