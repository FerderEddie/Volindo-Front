// Importing necessary modules and components
import React from 'react'
import {
    Button,
    Spinner,
  } from "@chakra-ui/react"; // Necessary UI component imports from Chakra UI

// ModalFooterPart function component which accepts the props: selectedFiles, handleUpload, and spinnerValue
function ModalFooterPart({selectedFiles, handleUpload, spinnerValue}) {
  return (
    <>
           {/* Button component for triggering the file upload process */}
           <Button
              // Dynamic background color based on whether any files are selected
              bgColor={selectedFiles.length === 0 ? "gray" : (spinnerValue ? "black" : "#AACD5F")}
              // Styling properties for the button component
              borderRadius={22}
              fontSize={{base:"sm", sm:"sm", md:"md", lg:"md", xl:"17px"}}
              px={{base: 8, lg: "26%"}}
              w={{base:"70%", lg:"100%"}}
              py={{base: 0, lg: "1.35em"}}
              color={"black"}
              border={spinnerValue ? "solid 2px #AACD5F" : "none"}
              maxW={{base:"80%", sm:"80%", md:"80%", lg:"60%", xl:"60%"}}
              _hover={{ outline: "none", border: spinnerValue ? "solid 2px #AACD5F" : "none" }}
              _focus={{ outline: "none", border: spinnerValue ? "solid 2px #AACD5F" : "none" }}
              
              // Event handler for the button's click event
              onClick={handleUpload}
              
              // Disabling the button if no files are selected
              isDisabled={selectedFiles.length === 0}
            >
              {/* Conditional rendering of a spinner component or 'Upload Files' text based on the spinnerValue */}
              {spinnerValue ? <Spinner thickness="3px"
               size={{base:"sm", sm:"sm", md:"sm", lg:"md", xl:"md"}} color='#AACD5F'/> : "Upload Files"}
            </Button>
    </>
  )
}

export default ModalFooterPart
