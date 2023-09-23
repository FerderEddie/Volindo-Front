// Import necessary modules and components
import React from "react";
import Nav from "../../components/sections/Navbar";
import { Flex, Box } from "@chakra-ui/react";
import Head from "../../components/sections/Head";
import Main from "../../components/partials/AddForm/AdCreated/Main";

// Main component for the Advertisement Created page
function AdvertisementCreated() {
  // Setting metadata for the head element
  const head = {
    title: "Volindo - Advertisement Created",
    name: "Volindo AD Manager",
    des: "new advertisement for volindo agent have been created successfully",
    keywords: "create, new, social, agent, volindo, form, add",
  };

  return (
    <>
      {/* Inserting head component to set the head properties of the page */}
      <Head
        title={head.title}
        name={head.name}
        description={head.des}
        keywords={head.keywords}
      />

      {/* main container */}
      <Flex
        bgColor="black"
        direction="column"
        minH={{ base: "100vh" }}
        minW={"100vw"}
      >
        {/* Navbar component */}
        <Box>
          <Nav />
        </Box>

        {/* Main content section */}
        <Main />
      </Flex>
    </>
  );
}

export default AdvertisementCreated;
