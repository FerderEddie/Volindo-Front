// Import necessary components and modules
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useMemo } from "react";
import { BudgetContext } from "../../../../context/BudgetProvider";
import { DaysValueContext } from "../../../../context/DaysProvider";
import { PriceSummaryContext } from "../../../../context/PriceSummaryProvider";

// Define the PriceSummary component
function PriceSummary() {
  const { budgetAmount } = useContext(BudgetContext);
  const { daysValue } = useContext(DaysValueContext);
  const { setBudgetAndDaysValue, setTransactionFee, setTotalPrice } =
    useContext(PriceSummaryContext);

  const {
    budgetAndDaysValue,
    transactionFee,
    totalPrice,
    formattedBudgetAndDaysValue,
    formattedTransactionFee,
    formattedTotalPrice,
  } = useMemo(() => {
    const budgetAndDaysValue = budgetAmount * daysValue;
    const transactionFee = (budgetAndDaysValue * 0.04).toFixed(0);
    const totalPrice = (
      parseFloat(budgetAndDaysValue) + parseFloat(transactionFee)
    ).toFixed(0);

    return {
      budgetAndDaysValue,
      transactionFee,
      totalPrice,
      formattedBudgetAndDaysValue: budgetAndDaysValue.toLocaleString(),
      formattedTransactionFee: parseFloat(transactionFee).toLocaleString(),
      formattedTotalPrice: parseFloat(totalPrice).toLocaleString(),
    };
  }, [budgetAmount, daysValue]);

  useEffect(() => {
    if (budgetAndDaysValue > 0 && transactionFee > 0 && totalPrice > 0) {
      setBudgetAndDaysValue(formattedBudgetAndDaysValue);
      setTransactionFee(formattedTransactionFee);
      setTotalPrice(formattedTotalPrice);
    }
  }, [
    budgetAndDaysValue,
    transactionFee,
    totalPrice,
    formattedBudgetAndDaysValue,
    formattedTransactionFee,
    formattedTotalPrice,
  ]);

  return (
    <>
      {/* Heading */}
      <Heading
        fontSize={{ base: "17px", sm: "17px", md: "lg", lg: "lg", xl: "19px" }}
        mb={4}
        p={4}
        color={"white"}
        textAlign={"left"}
        fontFamily={"Poppins"}
        pb={0}
        pl={{base: 4, sm: 5, md: 6, lg: 4, xl: 5}}
      >
        Your Price Summary
      </Heading>

      {/* Container for price summary sections */}
      <Flex
        direction={"column"}
        justify={"space-evenly"}
        textAlign={"left"}
        fontFamily={"Poppins"}
        px={1}
      >
        {/* Section for daily price */}
        <Stack
          w={"100%"}
          m={"0 auto"}
          borderRadius={14}
          p={3}
          direction={"row"}
          justify={"space-between"}
          color="#7f827f"
        >
          <Text
            pl={2}
            fontSize={{ base: "sm", sm: "sm", md: "15px", lg: "sm", xl: "15px" }}
          >
            ${budgetAmount} x {daysValue ? daysValue : "0"}{" "}
            {daysValue === 1 ? "day" : "days"}
          </Text>
          <Text
            pl={2}
            fontSize={{ base: "sm", sm: "sm", md: "15px", lg: "sm", xl: "15px" }}
          >
            ${formattedBudgetAndDaysValue}
          </Text>
        </Stack>

        {/* Section for transaction fees */}
        <Stack
          w={"100%"}
          m={"0 auto"}
          borderRadius={14}
          p={3}
          direction={"row"}
          justify={"space-between"}
          color="#7f827f"
        >
          <Text
            pl={2}
            fontSize={{ base: "sm", sm: "sm", md: "15px", lg: "sm", xl: "15px" }}
          >
            Transaction fees 4%
          </Text>
          <Text
            pl={2}
            fontSize={{ base: "sm", sm: "sm", md: "15px", lg: "sm", xl: "15px" }}
          >
            ${formattedTransactionFee}
          </Text>
        </Stack>

        {/* Section for total */}
        <Stack
          w={"100%"}
          bgColor={"#202020"}
          m={"0 auto"}
          mb={4}
          borderRadius={14}
          p={3}
          direction={"row"}
          justify={"space-between"}
        >
          <Text
            pl={2}
            color={"#AACD5F"}
            fontSize={{ base: "sm", sm: "sm", md: "15px", lg: "sm", xl: "15px" }}
          >
            Total
          </Text>
          <Text
            pl={2}
            color={"#AACD5F"}
            fontSize={{ base: "sm", sm: "sm", md: "15px", lg: "sm", xl: "15px" }}
          >
            ${formattedTotalPrice}
          </Text>
        </Stack>
      </Flex>
    </>
  );
}

// Export the PriceSummary component as default
export default React.memo(PriceSummary);
