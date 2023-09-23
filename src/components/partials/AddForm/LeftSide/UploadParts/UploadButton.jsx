import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { BsFillPlusCircleFill } from "react-icons/bs"; // Plus icon from react-icons
import { BsImage } from "react-icons/bs"; // Plus icon from react-icons
import { AiFillPlayCircle } from "react-icons/ai"; // Play icon from react-icons

const baseURL = "http://localhost:4000";

function UploadButton({ index, uploadedFiles, onOpen }) {
  // Retrieves the file object based on the given index from the uploadedFiles array
  const file = uploadedFiles[index];

  // If the file is a video, use its thumbnail as a preview, otherwise null
  const isVideo = file && file.type.startsWith("video/");
  const ThumbnailFileURL = isVideo ? `${baseURL}${file.thumbnail}` : null;

  // Modifies the file URL to retrieve a button-sized thumbnail or preview
  const buttonSizeFileURL =
    file && file.file ? file.file.replace("/uploads/", "/uploads/") : null;

  const backgroundImageURL = isVideo ? ThumbnailFileURL : buttonSizeFileURL;

  return (
    <>
      <Flex
        as="button"
        bgColor="#202020"
        border="solid 2px #3F3F3F"
        w={{base:"32%", sm:"32%", md:"32%", lg:"32%", xl:"32%"}}
        h={{base:"120px", sm:"70px", md:"80px", lg:"70px", xl:"90px"}}
        borderRadius={15}
        justify="center"
        transition="all 0.3s ease-in-out"
        _hover={{
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          border: "solid 2px #797979",
          transform: "scale(1.04)",
        }}
        _focus={{
          outline: "none",
          boxShadow: "none",
          border: "solid 1px #797979",
        }}
        onClick={() => onOpen()}
      >
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius={10}
          backgroundImage={
            backgroundImageURL ? `url(${backgroundImageURL})` : "none"
          }
          backgroundSize="cover"
          backgroundPosition="center"
        >
          {/* If there's no file, show the Plus icon */}
          {!file && (
            <BsFillPlusCircleFill
              bg="#202020"
              color="#7f827f"
              fontSize="26px"
              border="none"
              _hover={{ bg: "transparent", outline: "none", border: "none" }}
              _focus={{ bg: "transparent", outline: "none", border: "none" }}
            />
          )}
          {file && file.type.startsWith("image/") && (
            <BsImage
              color="white"
              fontSize="28px"
              border="none"
              _hover={{ bg: "transparent", outline: "none", border: "none" }}
              _focus={{ bg: "transparent", outline: "none", border: "none" }}
            />
          )}
          {/* If the file is a video, show the Play icon */}
          {isVideo && (
            <AiFillPlayCircle
              color="white"
              fontSize="36px"
              border="none"
              _hover={{ bg: "transparent", outline: "none", border: "none" }}
              _focus={{ bg: "transparent", outline: "none", border: "none" }}
            />
          )}
        </Box>
      </Flex>
    </>
  );
}

export default UploadButton;
