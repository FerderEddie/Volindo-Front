import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

function Language({ language, languageHandler }) {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          bg="black"
          color="white"
          border="solid 2px gray"
          outline={"none"}
          padding="0.2px"
          fontSize="sm"
          size="md"
          _hover={{
            bg: "black",
            border: "2px solid gray",
            outline: "none",
          }}
          _focus={{
            bg: "black",
            border: "2px solid gray",
            outline: "none",
          }}
          _active={{
            bg: "black",
            border: "2px solid gray",
            outline: "none",
          }}
        >
          {language}
        </MenuButton>

        {/* Language Menu List */}
        <MenuList
          width="fit-content"
          bg="black"
          pl={{ base: "0%", sm:"0%", md:"0%", lg: "76%", xl:"75%" }}
          mr={{ base: 10, sm: 10, md: 0, lg: 0, xl: 0 }}
          mt={{ base: 2, sm: 2, md: 1, lg: 0, xl: 0 }}
          border={{ base: "solid 2px #3F3F3F", lg: "none" }}
          _hover={{ bg: "black", border: "none", outline: "none" }}
          _focus={{ bg: "black", border: "none", outline: "none" }}
          _active={{ bg: "black", border: "none", outline: "none" }}
        >
          {/* Language Menu Items */}
          <MenuItem
            as={Button}
            onClick={() => languageHandler("EN")}
            bg="black"
            color="white"
            width="fit-content"
            border={"none"}
            _hover={{ bg: "black", border: "none", outline: "none" }}
            _focus={{ bg: "black", border: "none", outline: "none" }}
            _active={{ bg: "black", border: "none", outline: "none" }}
          >
            English
          </MenuItem>

          <MenuItem
            as={Button}
            onClick={() => languageHandler("ES")}
            bg="black"
            color="white"
            width="fit-content"
            border={"none"}
            _hover={{ bg: "black", border: "none", outline: "none" }}
            _focus={{ bg: "black", border: "none", outline: "none" }}
            _active={{ bg: "black", border: "none", outline: "none" }}
          >
            Español
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Language;
