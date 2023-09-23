import React, { useState } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Spinner,
} from "@chakra-ui/react";

function AlertDialogPart({ isAlertOpen, cancelRef, onAlertClose }) {
  const [showSpinner, setShowSpinner] = useState(false);

  return (
    <>
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={onAlertClose}
      >
        {/* AlertDialog Content */}
        <AlertDialogOverlay>
          <AlertDialogContent
            bgColor={"#141414"}
            w={{ base: "80%", sm: "80%", md: "50%", lg: "100%", xl: "100%" }}
          >
            <AlertDialogHeader
              textTransform={"capitalize"}
              fontSize={{ base: "md", sm: "md", md: "lg", lg: "lg", xl: "lg" }}
              fontWeight="bold"
              color={"white"}
              textAlign={{ base: "center", lg: "left" }}
              pt={{ base: 6, lg: 4 }}
            >
              are you sure you want to logout ?
            </AlertDialogHeader>

            <AlertDialogCloseButton
              color={"white"}
              display={{ base: "none", lg: "inline-block" }}
              border={"none"}
              outline={"none"}
              _focus={{ border: "none", outline: "none" }}
            />

            <AlertDialogFooter
              pb={6}
              m={{ base: "0 auto", lg: "0" }}
              gap={{ base: 2, lg: 0 }}
            >
              <Button
                ref={cancelRef}
                bgColor={"black"}
                color={"#AACD5F"}
                w={{ base: "45%", sm: "50%", md:"60%", lg: "25%", xl: "25%" }}
                border={"solid 1px #AACD5F"}
                outline={"none"}
                borderRadius={6}
                _hover={{ border: "solid 1px #AACD5F" }}
                _focus={{
                  border: "solid 1px #AACD5F",
                  outline: "none",
                  bgColor: "black",
                }}
                onClick={onAlertClose}
              >
                Cancel
              </Button>

              <Button
                colorScheme="#AACD5F"
                bgColor={"#AACD5F"}
                color={"black"}
                ml={3}
                borderRadius={6}
                w={{ base: "45%", sm: "50%", md:"60%", lg: "25%", xl: "25%" }}
                onClick={() => {
                  onAlertClose
                    ? (setShowSpinner(true),
                      (window.location.href = "https://Dashboard.Volindo.com"))
                    : onAlertClose();
                }}
                _hover={{ border: "solid 1px #AACD5F" }}
                _focus={{
                  border: "solid 1px #AACD5F",
                  outline: "none",
                  bgColor: "#AACD5F",
                }}
              >
                {showSpinner ? (
                  <Spinner
                    size={{
                      base: "sm",
                      sm: "sm",
                      md: "sm",
                      lg: "sm",
                      xl: "sm",
                    }}
                  />
                ) : (
                  "Logout"
                )}{" "}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertDialogPart;
