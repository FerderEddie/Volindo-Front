// Import necessary components and modules
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { BudgetContext } from "../../../../context/BudgetProvider";
import { ExpectationsContext } from "../../../../context/ExpectationsProvider";

// Define the Expectations component
function Expectations() {
  const { budgetAmount } = useContext(BudgetContext);
  const {
    numberOfLeads,
    numberOfClicks,
    numberOfViews,
    setNumberOfViews,
    setNumberOfClicks,
    setNumberOfLeads,
  } = useContext(ExpectationsContext);

  // Function to calculate number of leads
  const leadsCalc = () => {
    let totalLeads = 0;

    if (budgetAmount >= 10) {
      totalLeads = budgetAmount / 10;
    }

    setNumberOfLeads(Math.floor(totalLeads).toLocaleString());
  };

  // Function to calculate number of views
  const viewsCalc = () => {
    const totalViews = budgetAmount / 0.02;
    setNumberOfViews(Math.round(totalViews).toLocaleString());
  };

  // Function to calculate number of clicks
  const clicksCalc = () => {
    let totalClicks = 0;

    if (budgetAmount >= 10) {
      totalClicks = budgetAmount / 2.5;
    }

    setNumberOfClicks(Math.floor(totalClicks).toLocaleString());
  };

  useEffect(() => {
    leadsCalc();
    viewsCalc();
    clicksCalc();
  }, [budgetAmount]);

  return (
    <>
      {/* Heading */}
      <Heading
        fontSize={{ base: "17px", sm: "17px", md: "lg", lg: "lg", xl: "19px" }}
        mb={4}
        p={4}
        color={"white"}
        textAlign={"left"}
        letterSpacing={0.5}
        fontFamily={"Poppins"}
        pb={0}
        pl={{base: 4, sm: 5, md: 7, lg: 4, xl: 5}}
      >
        Expectations
      </Heading>

      {/* Container for expectation sections */}
      <Flex
        direction={"column"}
        justify={"space-evenly"}
        textAlign={"left"}
        gap={4}
        fontFamily={"Poppins"}
      >
        {/* Section for number of leads */}
        <Stack
          w={"90%"}
          bgColor={"#202020"}
          m={"0 auto"}
          borderRadius={14}
          p={3}
        >
          <Text pl={2}
           fontSize={{ base: "sm", sm:"sm", md:"15px", lg: "sm", xl:"15px" }}
           >
            Number of leads
          </Text>
          <Text pl={2}
           fontSize={{ base: "sm", sm:"sm", md:"15px", lg: "sm", xl:"15px" }}
          >
            {budgetAmount} usd = {numberOfLeads} leads
          </Text>
        </Stack>

        {/* Section for number of views */}
        <Stack
          w={"90%"}
          bgColor={"#202020"}
          m={"0 auto"}
          borderRadius={14}
          p={3}
        >
          <Text pl={2}
           fontSize={{ base: "sm", sm:"sm", md:"15px", lg: "sm", xl:"15px" }}
           >
            Number of views
          </Text>
          <Text pl={2}
           fontSize={{ base: "sm", sm:"sm", md:"15px", lg: "sm", xl:"15px" }}
           >
            {budgetAmount} usd = {numberOfViews.toLocaleString()} views
          </Text>
        </Stack>

        {/* Section for number of clicks */}
        <Stack
          w={"90%"}
          bgColor={"#202020"}
          m={"0 auto"}
          mb={4}
          borderRadius={14}
          p={3}
        >
          <Text pl={2} 
           fontSize={{ base: "sm", sm:"sm", md:"15px", lg: "sm", xl:"15px" }}
           >
            Number of clicks
          </Text>
          <Text pl={2} 
           fontSize={{ base: "sm", sm:"sm", md:"15px", lg: "sm", xl:"15px" }}
           >
            {budgetAmount} usd = {numberOfClicks} clicks
          </Text>
        </Stack>
      </Flex>
    </>
  );
}

// Export the Expectations component as default
export default React.memo(Expectations);
