// Importing necessary UI components, icons, and hooks from Chakra UI and React Icons
import { Flex, Box } from "@chakra-ui/react";
import React, { useContext } from "react";

// Importing individual components from various directories
import Nav from "../../components/sections/Navbar";
import Head from "../../components/sections/Head";

import { TypeContext } from "../../context/TypeProvider";
import Top from "../../components/partials/AddForm/TopSection/Top";
import Left from "../../components/partials/AddForm/Containers/Left";
import Right from "../../components/partials/AddForm/Containers/Right";

function AddForm() {
  // Setting up initial properties for the Head component
  const head = {
    title: "Volindo - Create New Advertisement",
    name: "Volindo AD Manager",
    des: "create new advertisement for volindo agent",
    keywords: "create, new, social, agent, volindo, form, add",
  };

  // Utilizing context API for managing advertisement name and email state
  const { advertisementName, setAdvertisementName, email, setEmail } =
    useContext(TypeContext);

  return (
    <>
      {/* Header component with SEO meta tags */}
      <Head
        title={head.title}
        name={head.name}
        description={head.des}
        keywords={head.keywords}
      />

      {/* Main container with nested component structure and styling */}
      <Box bg={"black"} maxW={{ base: "100vw" }}>
        {/* Navigation bar component */}
        <Box>
          <Nav />
        </Box>

        {/* top container */}
        <Top
          setAdvertisementName={setAdvertisementName}
          advertisementName={advertisementName}
        />

        {/* Main Container */}
        <Flex
          direction={{base: "column", lg: "row",}}
          justifyContent="center"
          pt={{ base: 2, lg: 2 }}
        >
          {/* Left Container */}
          <Left />

          {/* Right Container */}
          <Right email={email} setEmail={setEmail} />
        </Flex>
      </Box>
    </>
  );
}
// Exporting the AddForm component with memoization to prevent unnecessary re-renders
export default React.memo(AddForm);
