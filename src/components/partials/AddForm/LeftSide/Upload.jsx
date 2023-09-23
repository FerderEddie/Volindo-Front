// Importing required modules and components
import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import { Heading, Stack, Text, useDisclosure } from "@chakra-ui/react";

// Using Chakra-UI theme for dynamic styling
import { useTheme } from "@emotion/react";
import axios from "axios";

import { PreviewContext } from "../../../../context/PreviewProvider";
import ButtonsStack from "./UploadParts/ButtonsStack";
const ModalSection = lazy(() => import("./UploadParts/ModalSection"));

function Upload() {
  const { uploadedFiles, setUploadedFiles } = useContext(PreviewContext);

  // Using Chakra-UI theme for dynamic styling
  const theme = useTheme();

  // Hooks for controlling modal visibility
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Disclosure for alert dialog
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  // Ref for alert dialog
  const cancelRef = React.useRef();

  // State to manage which file (by index or ID) is to be deleted
  const [fileIndexToDelete, setFileIndexToDelete] = useState(null);

  // State variables for button values
  const [buttonValue, setButtonValue] = useState(false);

  // States for managing selected and files respectively
  const [selectedFiles, setSelectedFiles] = useState([]);

  // State to manage spinner (loading indicator) display
  const [spinnerValue, setSpinnerValue] = useState(false);

  // State to manage status of the file (e.g., selected, uploaded)
  const [fileStatus, setFileStatus] = useState("");

  const [isButtonsLoading, setIsButtonsLoading] = useState(true);

  // Function to handle when files are selected for upload
  const handleFileChange = (files) => {
    const filesArray = Array.from(files);
    setSelectedFiles(filesArray);
    setFileStatus("selected");
  };

  // Function to handle removal of a selected or uploaded file
  const removeFileHandler = (idOrIndex) => {
    let fileToDelete;

    // If we're passing an ID, then it's an uploaded file.
    if (typeof idOrIndex === "string") {
      fileToDelete = uploadedFiles.find((file) => file._id === idOrIndex);
      if (fileToDelete) {
        setUploadedFiles((prevFiles) =>
          prevFiles.filter((file) => file._id !== fileToDelete._id)
        );
        deleteUploadedFile(fileToDelete._id);
      }
    }
    // Else, it's an index from the selectedFiles array.
    else {
      fileToDelete = selectedFiles[idOrIndex];
      if (fileToDelete) {
        setSelectedFiles((prevFiles) =>
          prevFiles.filter((_, idx) => idx !== idOrIndex)
        );
      }
    }

    // Check for file status
    if (selectedFiles.length > 0) {
      setFileStatus("selected");
    } else if (uploadedFiles.length > 0) {
      setFileStatus("uploaded");
    } else {
      setFileStatus("");
    }
  };

  // Function to delete a file from the server after it has been uploaded
  const deleteUploadedFile = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/files/delete/${id}`
      );
      if (response.data.success) {
        setUploadedFiles((prevFiles) =>
          prevFiles.filter((file) => file._id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting the file:", error);
    }
  };

  // Function to fetch the list of already uploaded files from the server
  const fetchUploadedFiles = async () => {
    try {
      setIsButtonsLoading(true);
      const response = await axios.get("http://localhost:4000/files/get");

      // Check if the response contains a valid 'files' array
      if (response.data?.files && Array.isArray(response.data.files)) {
        setUploadedFiles(response.data.files);
        setSpinnerValue(false);

        // Update the file status if there are uploaded files
        if (response.data.files.length > 0) {
          setFileStatus("uploaded");
        }
      }
    } catch (error) {
      console.error("Error fetching uploaded files:", error);
    } finally {
      setIsButtonsLoading(false);
    }
  };

  // Fetch the list of uploaded files on component mount
  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  // Re-fetch the list of uploaded files whenever a file's status changes to "uploaded"
  useEffect(() => {
    if (fileStatus === "uploaded") {
      fetchUploadedFiles();
    }
  }, [fileStatus]);

  /* -------------------------------------------------------------Buttons Stack------------------------------------------------------------ */

  return (
    <>
      {/* Container for the stack */}
      <Stack
        gap={{ base: 2, md: 2 }}
        p={4}
        textAlign={{ base: "left", md: "left" }}
        >
        <Heading
          color="white"
          fontSize={{ base: "17px", sm:"md", md: "17px", lg:"lg", xl:"19px" }}
          pb={2}
          letterSpacing={0.5}
          fontFamily="Poppins"
        >
          Upload photos/videos
        </Heading>

        {/* buttons stack */}
        <ButtonsStack
          isButtonsLoading={isButtonsLoading}
          uploadedFiles={uploadedFiles}
          onOpen={onOpen}
        />

        {/* --------------------------------------------------------Modal Section--------------------------------------------------------------- */}
        {/* modal component props */}
        <Suspense>
          <ModalSection
            isOpen={isOpen}
            onClose={onClose}
            setButtonValue={setButtonValue}
            handleFileChange={handleFileChange}
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
            uploadedFiles={uploadedFiles}
            spinnerValue={spinnerValue}
            isAlertOpen={isAlertOpen}
            onAlertClose={onAlertClose}
            onAlertOpen={onAlertOpen}
            cancelRef={cancelRef}
            fileIndexToDelete={fileIndexToDelete}
            removeFileHandler={removeFileHandler}
            setFileIndexToDelete={setFileIndexToDelete}
            theme={theme}
            setSpinnerValue={setSpinnerValue}
            setUploadedFiles={setUploadedFiles}
            fileStatus={fileStatus}
            setFileStatus={setFileStatus}
          />
        </Suspense>

        {/* Text for alternative option */}
        <Text
          fontSize= {{ base: "sm", sm:"sm", md: "15px", lg:"15px", xl:"md" }}
          fontFamily="Poppins"
          color="#7f827f"
          textAlign="left"
          pt={1}
        >
          or let Volindo handle the creative aspects.
        </Text>
      </Stack>
    </>
  );
}

export default Upload;
