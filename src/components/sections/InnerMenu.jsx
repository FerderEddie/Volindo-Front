import { Box, Divider,AbsoluteCenter ,Stack } from '@chakra-ui/react'
import React from 'react'

// InnerMenu component which renders a menu with various buttons
function InnerMenu() {

  return (
    <>

<Box mb={{base: 4, lg: 0}}> 

{/* Stack for holding the menu buttons */}
  <Stack
    maxW={{base: "75%", sm: "55%", md: "65%", lg: "80%", xl: "100%"}}
    direction={{base: "column", lg: "row"}}
    fontSize={{base: "md", sm:"md", md:"md", lg: "12.5px", xl: "13.5px"}}
    color={"#7f827f"} 
    bg="#141414"
    p={2}
    borderRadius={8}
    border={"solid 1px #3F3F3F"}
    gap={{base: 0, lg: 2}}
    fontFamily={"Poppins"}
    justify={"space-evenly"}
    m={{base: "0 auto", lg: "0"}}
    textAlign={"center"}
  >
    
    {/* ad button currently refresh page */}
    <Box as='button' borderRadius={10} bgColor={"#323232"} p={{base: 0, lg: 2}} mt={{base: 2, lg: 0}}
     border={"solid 1px #3F3F3F "} _hover={{border:"solid 1px #797979"}}
     _focus={{ outline:"none"}} onClick={()=>{location.reload()}} cursor={"pointer"} color={"white"}>
      AD Manager
    </Box>


    {/* Following boxes are currently not actionable (cursor: "not-allowed"), representing future features perhaps */}

    <Box borderRadius={10} p={2} cursor={"not-allowed"} border={"none"} _focus={{ outline:"none"}}>
      Offers Library
    </Box>

    <Box borderRadius={10} p={2} cursor={"not-allowed"} border={"none"} _focus={{ outline:"none"}}>
      Branding Packges
    </Box>

    <Box borderRadius={10} p={2} cursor={"not-allowed"} border={"none"} _focus={{ outline:"none"}}>
      Volindo Academy
    </Box>

    <Box borderRadius={10} p={2} cursor={"not-allowed"} border={"none"} _focus={{ outline:"none"}}>
      Events
    </Box>

    <Box borderRadius={10} p={2} cursor={"not-allowed"} border={"none"} _focus={{ outline:"none"}}>
      Private Session
    </Box>
    
  </Stack>
</Box>

<Box w={{base:"85%", sm:"85%", md:"100%", lg:"none", xl:"none"}} m={"0 auto"}>
  <Divider 
    borderColor={"#3F3F3F"} 
    borderWidth={"1px"} 
    display={{base:"inline-block", sm:"inline-block", md:"inline-block", lg:"none", xl:"none"}}
  />
</Box>

      
    </>
  )
}

export default InnerMenu
