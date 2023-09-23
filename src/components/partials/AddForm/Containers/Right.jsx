import { Stack, Flex, Box, Spinner } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";

import Expectations from "../RightSide/Expectations";
import PriceSummary from "../RightSide/PriceSummary";
import Submit from "../Submit/Submit";
import Email from "../RightSide/Email";

const Preview = lazy(() => import("../RightSide/Preview"));

function Right({ setEmail, email }) {
  return (
    <>
      <Stack
        direction={"column"}
        textAlign={{ base: "center", md: "right" }}
        w={{ base: "100%", sm: "90%", md: "80%", lg: "35%", xl: "30%" }}
        h={{ base: "auto", md: "auto", lg: "auto", xl: "auto" }}
        px={{ base: 4, sm: 4, md: 4, lg: 12, xl: 12 }}
        ml={{ base: "0", sm: "0", md: "0", lg: "-20px", xl: "-18px" }}
        m={{
          base: "0",
          sm: "0 auto",
          md: " 0 auto",
          lg: "none",
          xl: "none",
        }}
      >
        {/* preview component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          mx={"auto"}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
          p={2}
        >
          <Suspense
            fallback={
              <Flex height="300px" alignItems="center" justifyContent="center">
                <Spinner color="#AACD5F" />
              </Flex>
            }
          >
            <Preview />
          </Suspense>
        </Box>

        {/* expectations component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          my={2}
          mx={"auto"}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
          p={2}
        >
          <Expectations />
        </Box>

        {/* price summary component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          p={2}
          mx={"auto"}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
        >
          <PriceSummary />
        </Box>

        {/* email component */}
        <Box
          color="white"
          borderRadius={12}
          bg="#141414"
          my={2}
          mx={"auto"}
          pb={{ base: 0, sm: 0.5, md: 1, lg: 1, xl: 1 }}
          w={{ base: "95%", sm: "95%", md: "100%", lg: "100%", xl: "100%" }}
          fontFamily={"Poppins"}
        >
          <Email email={email} setEmail={setEmail} />
        </Box>

        {/* submit component */}
        <Box
          w={{ base: "95%", sm: "80%", md: "70%", lg: "100%", xl: "100%" }}
          my={{ base: 0, sm: 0, md: 2, lg: 0, xl: 0 }}
          m={"0 auto"}
        >
          <Submit />
        </Box>
      </Stack>
    </>
  );
}

export default Right;
