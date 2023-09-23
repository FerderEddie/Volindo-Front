// Necessary UI component imports from Chakra UI
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Stack,
  Heading,
  Text,
  Input,
} from "@chakra-ui/react"; 

import { BsCloudArrowDown } from "react-icons/bs";

function SelectField({handleFileChange }) {
  return (
    <>
      {/* Label wrapping the drop area and input, with associated event handlers for file drop and drag-over actions */}
      <label
        htmlFor="file-input"
        style={{ cursor: "pointer" }}
        onDrop={(e) => {
          e.preventDefault();
          handleFileChange(e.dataTransfer.files);
        }}
        onDragOver={(e) => e.preventDefault()}
        multiple
      >
        {/* Drop area */}
        <Box w={{base:"100%", lg:"auto"}} mx={{base:"0px", lg:"12px"}}
          style={{
            backgroundImage: `
                repeating-linear-gradient(-22deg, #7f827f, #7f827f 8px, transparent 8px, transparent 14px, #7f827f 14px), 
                repeating-linear-gradient(68deg, #7f827f, #7f827f 8px, transparent 8px, transparent 14px, #7f827f 14px), 
                repeating-linear-gradient(158deg, #7f827f, #7f827f 8px, transparent 8px, transparent 14px, #7f827f 14px), 
                repeating-linear-gradient(248deg, #7f827f, #7f827f 8px, transparent 8px, transparent 14px, #7f827f 14px)
            `,
            backgroundSize: "1.5px 100%, 100% 1.5px, 1.5px 100%, 100% 1.5px",
            backgroundPosition: "0 0, 0 0, 100% 0, 0 100%",
            backgroundRepeat: "no-repeat",
            paddingTop: "42px",
            marginTop: "52px",
            marginBottom: "8px",
          }}
        >
          <Flex direction={"column"} pb={{base:6, lg:8}}>
            {/* Drag and drop indicator */}
            <HStack
              color={"gray"}
              bgColor={"transparent"}
              justifyContent={"center"}
            >
              <Box fontSize={{base:"50px", sm:"55px", md:"60px", lg:"65px", xl:"65px"}}>
              <BsCloudArrowDown/>
              </Box>
            </HStack>

            {/* File input */}
            <Stack gap={4} mt={5} pb={2} mb={2} p={{base:3, lg:0}}> 

            <Box fontSize={{base:"lg", lg:"xl"}}>
              <Heading fontSize={{base:"md", sm:"lg", md:"lg", lg:"xl", xl:"19px"}} color="white" px={{base: 1, lg: 0}}>
                Drag & drop files or{" "}
                <label
                  htmlFor="file-input"
                  style={{
                    cursor: "pointer",
                    color: "#AACD5F",
                    textDecoration: "underline",
                  }}
                >
                  Browse
                </label>
                
                {/* Hidden file input to handle file selection */}
                <Input
                  type="file"
                  id="file-input"
                  multiple
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e.target.files)}
                />
              </Heading>
              </Box>

              
               {/* Stack containing file input field and instructions for file types and quantity */}
              <Stack gap={{base:2, lg:1}} pt={1}>
                <Text fontSize={{base:"xs", sm:"sm", md:"sm", lg:"sm", xl:"15px"}} px={{base:2, lg:0}} color={"#7f827f"}>
                  Supported formates: JPEG, PNG, GIF, MP4, AVI
                </Text>
                <Text
                  fontSize={{base:"xs", sm:"sm", md:"sm", lg:"sm", xl:"15px"}}
                  color={"#7f827f"}
                >{`( Up to 10 files max )`}</Text>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </label>
    </>
  );
}

export default SelectField;
