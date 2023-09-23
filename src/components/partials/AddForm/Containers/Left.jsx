import { Stack, Flex, Box, Spinner } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";

import Finances from "../LeftSide/Finances";
import SocialNetwork from "../LeftSide/SocialNetwork";
import Dates from "../LeftSide/Dates";
import Type from "../LeftSide/Type";
import TextField from "../LeftSide/TextField";

// Lazily importing components to optimize initial load time
const Upload = lazy(() => import("../LeftSide/Upload"));

function Left() {
  return (
    <>
      <Stack
        textAlign={{ base: "left", md: "left" }}
        w={{ base: "100%", sm: "90%", md: "80%", lg: "64%", xl: "57.5%" }}
        h={{ base: "100%", md: "auto" }}
        px={{ base: 4, md: "auto" }}
        pl={{ base: "none", sm: "none", md: "none", lg: 12, xl: "auto" }}
        alignItems={{ base: "left", md: "left" }}
        mr={{ base: "0", sm: "0", md: "0", lg: "-20px", xl: "-18px" }}
        m={{
          base: "0",
          sm: "0 auto",
          md: "0 auto",
          lg: "none",
          xl: "none",
        }}
      >
        {/* Social network component */}
        <Box
          borderRadius={12}
          bg="#141414"
          mb={1}
          mx={"auto"}
          p={2}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
        >
          <SocialNetwork />
        </Box>

        {/* type component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          my={1}
          mx={"auto"}
          p={2}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
        >
          <Type />
        </Box>

        {/* upload component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          my={1}
          mx={"auto"}
          p={2}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
        >
          <Suspense
            fallback={
              <Flex height="225px" alignItems="center" justifyContent="center">
                <Spinner color="#AACD5F" />
              </Flex>
            }
          >
            <Upload />
          </Suspense>
        </Box>

        {/* text field component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          my={1}
          mx={"auto"}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
          p={2}
        >
          <TextField />
        </Box>

        {/* dates component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          my={1}
          mx={"auto"}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
          p={2}
        >
          <Dates />
        </Box>

        {/* finances component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          my={1}
          mx={"auto"}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
          mb={{ base: 4, lg: 10 }}
          p={{ base: 4, md: 2 }}
        >
          <Finances />
        </Box>
      </Stack>
    </>
  );
}

export default Left;
