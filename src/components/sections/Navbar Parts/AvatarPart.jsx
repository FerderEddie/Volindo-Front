import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Wrap,
  WrapItem,
  Stack,
  MenuDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Tooltip,
} from "@chakra-ui/react";

import AlertDialogPart from "./AlertDialogPart";


function AvatarPart({ onAlertClose, cancelRef, isAlertOpen, onClose, isOpen, onOpen, onAlertOpen  }) {
  return (
    <>
      <Menu>
        <MenuButton
          _hover={{
            bg: "black",
            border: "solid 1px transparent",
            outline: "none",
          }}
          _focus={{
            bg: "black",
            border: "solid 1px transparent",
            outline: "none",
          }}
          _active={{
            bg: "black",
            border: "solid 1px transparent",
            outline: "none",
          }}
          fontSize={"sm"}
        >
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/code-beast"
            size={{ base: "md", sm:"md", md:"md", lg: "md", xl:"md" }}
          />
        </MenuButton>

        <MenuList
          bgColor={"black"}
          border={"solid 3px #202020"}
          ml={{ base: "8%", sm:"8%", md:"0%", lg: "0%", xl:"0%" }}
          mt={{ base: 2, lg: 0 }}
        >
          <Stack align={"center"}>
            {/* Avatar image with modal */}
            <Box onClick={onOpen} cursor={"pointer"} pt={2}>
              <Tooltip
                mr={2}
                bgColor={"#141414"}
                placement="left"
                hasArrow
                label="Click For Full Size"
              >
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size={{ base: "xl", sm:"xl", md:"xl", lg: "xl", xl:"xl" }}
                      name="Dan Abrahmov"
                      src="https://bit.ly/code-beast"
                    />
                  </WrapItem>
                </Wrap>
              </Tooltip>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />

                <ModalContent w={{ base: "70%", sm:"50%", md:"40%", lg: "40%", xl:"30%" }}>
                  <ModalHeader
                    border={"solid 2px #141414"}
                    fontSize={{ base: "lg", lg: "xl" }}
                    color={"#AACD5F"}
                    textAlign={"center"}
                    bgColor={"black"}
                  >
                    JC Yung
                  </ModalHeader>

                  <ModalCloseButton
                    color={"white"}
                    border={"none"}
                    outline={"none"}
                    _hover={{ color: "gray" }}
                    _focus={{ border: "none", outline: "none" }}
                  />

                  <ModalBody
                    bgColor={"black"}
                    border={"solid 2px #141414"}
                    py={{ base: 6, lg: 8 }}
                  >
                    <Avatar
                      size={{ base: "3xl", sm:"3xl", md:"3xl", lg: "3xl", xl:"3xl" }}
                      name="Dan Abrahmov"
                      src="https://bit.ly/code-beast"
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>

            <Box
              color="#AACD5F"
              my={1}
              border={"solid 1px transparent"}
              w={"75%"}
              textAlign={"center"}
              _hover={{
                borderColor: "#AACD5F",
                transition: "border-color 1s ease",
              }}
              padding={1}
              transition="border-color 1s ease"
              borderWidth="1px"
              borderStyle="solid"
              borderRadius="md"
            >
              JC Yung
            </Box>
          </Stack>

          <MenuDivider pb={1} />

          {/* Menu items */}
          <MenuItem
            as={"button"}
            pl={3}
            onClick={() => {
              alert("No Settings Yet");
            }}
            w={"fit-content"}
            fontSize={{ base: "15px", lg: "md" }}
            bgColor={"black"}
            color={"white"}
            border={"none"}
            _focus={{ outline: "none" }}
            _hover={{
              textDecoration: "underline",
              textDecorationColor: "#AACD5F",
            }}
            m={"0 auto"}
          >
            Account Settings
          </MenuItem>

          <MenuItem
            as={"button"}
            pb={{ base: 3, lg: 3 }}
            pl={3}
            onClick={onAlertOpen}
            bgColor={"black"}
            color={"white"}
            w={"fit-content"}
            border={"none"}
            _focus={{ outline: "none" }}
            _hover={{
              textDecoration: "underline",
              textDecorationColor: "#AACD5F",
            }}
            m={"0 auto"}
            fontSize={{ base: "15px", lg: "md" }}
          >
            Logout
          </MenuItem>

          {/* AlertDialog for Logout */}
          <AlertDialogPart
            isAlertOpen={isAlertOpen}
            cancelRef={cancelRef}
            onAlertClose={onAlertClose}
          />
        </MenuList>
      </Menu>
    </>
  );
}

export default AvatarPart;
