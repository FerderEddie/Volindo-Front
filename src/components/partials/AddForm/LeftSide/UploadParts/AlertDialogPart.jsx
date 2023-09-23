// Importing necessary Chakra UI components for AlertDialog
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogCloseButton,
  Button
} from '@chakra-ui/react';


function AlertDialogPart({ isOpen, onClose, onDelete, cancelRef }) {
return (
  <div>
     {/* The main AlertDialog that pops up when triggered */}
     <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
          {/* Semi-transparent overlay for the dialog */}
          <AlertDialogOverlay bgColor="rgba(0, 0, 0, 0.12)">
              
              {/* Container that holds the content of the AlertDialog */}
              <AlertDialogContent bgColor={"#141414"} w={{base:"80%", lg:"100%"}}>
                  
                  {/* Header section of the AlertDialog */}
                  <AlertDialogHeader  fontSize={{base: "md", lg: "lg"}} fontWeight="bold" pt={{base: 6, lg: 4}}
                   color={"white"} textAlign={{base:"center", lg:"left"}} textTransform={"capitalize"}>
                      Are you sure you want to delete this file ?
                  </AlertDialogHeader>
                  
                  {/* Close button for the AlertDialog */}
                  <AlertDialogCloseButton color={"white"} border={"none"} outline={"none"}
                   _focus={{border:"none", outline:"none"}}
                    display={{base:"none", sm:"none", md:"inline", lg:"inline", xl:"inline"}}/>
                  
                  {/* Footer section of the AlertDialog containing the action buttons */}
                  <AlertDialogFooter pb={6} m={{base:"0 auto", lg:"0"}} gap={{base: 2, lg: 0}}>
                      
                      {/* Cancel button that closes the AlertDialog */}
                      <Button ref={cancelRef} bgColor={"black"} color={"#AACD5F"} size={{base:"sm", lg:"md"}}
                      border={"solid 1px #AACD5F"} outline={"none"} borderRadius={6}
                      _hover={{border:"solid 1px #AACD5F"}}
                      _focus={{border:"solid 1px #AACD5F", outline:"none", bgColor:"black"}}
                      onClick={onClose}>
                          Cancel
                      </Button>
                      
                      {/* Button to confirm file deletion */}
                      <Button colorScheme="#AACD5F" bgColor={"#AACD5F"} color={"black"} ml={3} borderRadius={6}
                        onClick={onDelete} size={{base:"sm", lg:"md"}}
                        _hover={{border:"solid 1px #AACD5F"}}
                        _focus={{border:"solid 1px #AACD5F", outline:"none", bgColor:"#AACD5F"}}
                      >
                        Delete file
                      </Button>
                  </AlertDialogFooter>
              </AlertDialogContent>
          </AlertDialogOverlay>
      </AlertDialog>
  </div>
)
}

export default AlertDialogPart;
