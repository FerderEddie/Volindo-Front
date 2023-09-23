// Importing various components and hooks from Chakra UI library
import {
  Box,
  Flex,
  HStack,
  Link,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";

// Importing useState hook from React
import React, { useState } from "react";
import SVG from "./Navbar Parts/SVG";
import Language from "./Navbar Parts/Language";
import AvatarPart from "./Navbar Parts/AvatarPart";

function Navbar() {
  const [language, setLanguage] = useState("EN"); // State to store selected language

  const languageHandler = (changeLanguage) => {
    // Function to update the selected language
    setLanguage(changeLanguage);
  };

  // Disclosure for modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Disclosure for alert dialog
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  // Ref for alert dialog
  const cancelRef = React.useRef();

  return (
    <>
      {/* main box */}
      <Box
        maxW={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
        pt={{ base: 2, sm: 2, md: 2, lg: 0.5, xl: 0.5 }}
        mb={{ base: 0, sm: 0, md: 2, lg: 2, xl: 6 }}
      >
        {/* Flex container for wrapping navbar content */}
        <Flex
          justify={"space-between"}
          align={"center"}
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
        >
          {/* Logo section with link and SVG image */}
          <Link
            href="https://Dashboard.Volindo.com"
            color={"white"}
            w={{ base: "100%", sm: "100%", md: "22%", lg: "16%", xl: "12%" }}
            mb={{ base: 2, lg: 2 }}
          >
            <HStack
              justify={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "center",
              }}
              w={{ base: "40%", sm: "80%", md: "55%", lg: "60%", xl: "100%" }}
              m={{base:"0 auto"}}
            >
              <SVG />
            </HStack>
          </Link>

          {/* right side - language btn + avatar */}
          <Flex
            direction={"row"}
            gap={6}
            align={"center"}
            justify={{
              base: "space-evenly",
              sm: "center",
              md: "space-evenly",
              lg: "center",
              xl: "center",
            }}
            w={{ base: "50%", sm: "50%", md: "20%", lg: "19%", xl: "14%" }}
            mb={{ base: 4, lg: 0 }}
          >
            {/* language menu */}
            <Box
              mr={{ base: "auto", sm: "auto", md: "auto", lg: "0", xl: "0" }}
            >
              <Language languageHandler={languageHandler} language={language} />
            </Box>

            {/* avatar */}
            <Box
              ml={{ base: "auto", sm: "auto", md: "0", lg: "0", xl: "0" }}
              mr={{ base: 0, sm: 0, md: 8, lg: 0, xl: 0 }}
            >
              <AvatarPart
                onAlertClose={onAlertClose}
                cancelRef={cancelRef}
                isAlertOpen={isAlertOpen}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
                onAlertOpen={onAlertOpen}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box
        w={{ base: "85%", sm: "85%", md: "80%", lg: "none", xl: "none" }}
        m={"0 auto"}
      >
        <Divider
          borderColor={"#3F3F3F"}
          borderWidth={"1px"}
          display={{
            base: "inline-block",
            sm: "inline-block",
            md: "inline-block",
            lg: "none",
            xl: "none",
          }}
        />
      </Box>
    </>
  );
}

export default Navbar;
