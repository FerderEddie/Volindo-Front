import axios from "axios";
import React from "react";
import WarningToast from "../../../../sections/Toasts/WarningToast";
import SuccessToast from "../../../../sections/Toasts/SuccessToast";

export const uploadFilesHandler = async (options) => {
  const {
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
    setSelectedFiles,
    setUploadProgress,
    uploadedFiles,
  } = options;

  // Set the upload state to clicked
  setIsUploadClicked(true);
  setFileStatus("uploading");

  const newValidFiles = [];
  const newInvalidFiles = [];

  selectedFiles.forEach((file) => {
    let fileType;

    if (file.type.startsWith("image")) {
      fileType = "image";
    } else if (file.type.startsWith("video")) {
      fileType = "video";
    } else {
      // For any other types, you can either set a default value, or ignore them
      fileType = "other";
    }

    if (
      (fileType === "image" || fileType === "video") &&
      file.size <= maxFileSize[fileType]
    ) {
      newValidFiles.push(file); // Add valid file to the valid array
    } else {
      newInvalidFiles.push(file); // Add invalid file to the invalid array or if it exceeds the size limit
      setFileStatus("invalid");
    }
  });

  // Update the state with valid and invalid files, limiting valid files to 10
  setValidFiles(newValidFiles.slice(0, 10));
  setInvalidFiles(newInvalidFiles);

  setFilesToUpload([...newValidFiles]);

  let successfulUploads = 0; // Counter for successful uploads

  // Check for file limit
  if (!uploadedFiles || uploadedFiles.length === 0) {
    if (newValidFiles.length > 10) {
      setValidFiles(newValidFiles.slice(0, 10));

      // Notify the user of the file limit
      toast({
        render: ({ onClose }) =>
          React.createElement(
            WarningToast,
            {
              onClose: onClose,
              message: "You Can Upload Up To 10 Valid Files Max !",
            },
            null
          ),
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      return;
    }
  }

  // Check the combined count of already uploaded files and new valid ones
  const totalFilesAfterUpload =
    newValidFiles.length + (uploadedFiles ? uploadedFiles.length : 0);

  if (totalFilesAfterUpload > 10 || selectedFiles.length > 10) {
    toast({
      render: ({ onClose }) =>
        React.createElement(
          WarningToast,
          {
            onClose: onClose,
            message: `You Already Uploaded ${
              uploadedFiles.length
            } Files, You Can Only Upload ${
              10 - uploadedFiles.length
            } More Files`,
          },
          null
        ),
      duration: 3000,
      position: "top",
      isClosable: true,
    });
    return;
  }

  // If there are no invalid files and at least one valid file
  if (newInvalidFiles.length === 0 && newValidFiles.length > 0) {
    setSpinnerValue(true);

    for (const file of newValidFiles) {
      const formData = new FormData();
      formData.append("files", file); // Add the current file to form data
      formData.append("name", file.name);
      formData.append("size", file.size);
      formData.append("type", file.type);

      try {
        // Try uploading the file
        const response = await axios.post(
          "https://volindo-back.onrender.com/files/addFiles",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            // Update the upload progress in real-time
            onUploadProgress: (e) => {
              const fileLoaded = Math.floor((e.loaded / e.total) * 100);
              setUploadProgress((prevProgress) => ({
                ...prevProgress,
                [file.name]: { percentage: fileLoaded },
              }));
            },
          }
        );

        // If the file uploads successfully, increment the success counter
        successfulUploads++;

        // Update uploadedFiles directly
        if (response.status === 200) {
          setUploadedFiles((prevUploadedFiles) => {
            // Check if the file is already in the uploadedFiles state
            if (!prevUploadedFiles.find((f) => f.name === file.name)) {
              return [
                ...prevUploadedFiles,
                {
                  name: file.name,
                  size: file.size,
                  type: file.type,
                  // Assuming the server returns the file URL, add it as well
                  fileUrl: response.data.fileUrl,
                },
              ];
            }
            return prevUploadedFiles; // If file already exists, return the previous state
          });

          setFilesToUpload((prev) => prev.filter((f) => f.name !== file.name));
          setSelectedFiles((prevSelectedFiles) => {
            return prevSelectedFiles.filter((f) => f.name !== file.name);
          });
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  }

  // Once all files are uploaded successfully
  if (newValidFiles.length > 0 && successfulUploads === newValidFiles.length) {
    setFileStatus("uploaded");
    setSpinnerValue(false);

    // Show a success notification after a brief delay
    setTimeout(() => {
      toast({
        render: ({ onClose }) =>
          React.createElement(
            SuccessToast,
            {
              onClose: onClose,
              message: "Files Uploaded !",
            },
            null
          ),
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }, 1000);

    // Close the modal or upload interface after a longer delay
    setTimeout(() => {
      setButtonValue(false);
    }, 3000);
  }
};
