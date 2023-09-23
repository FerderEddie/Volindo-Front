import React from "react";
// Import necessary modules
import { createContext, useState, useEffect  } from "react";

// Create a context named PreviewTextContext
export const PriceSummaryContext = createContext();

function PriceSummaryProvider({ children }) {

    const [budgetAndDaysValue, setBudgetAndDaysValue] = useState("");
    const [transactionFee, setTransactionFee] = useState("");
    const [totalPrice, setTotalPrice] = useState("");

    useEffect(() => {
      // Load values from localStorage when component mounts
      const storedBudgetAndDaysValue = localStorage.getItem("budgetAndDaysValue");
      const storedTransactionFee = localStorage.getItem("transactionFee");
      const storedTotalPrice = localStorage.getItem("totalPrice");
  
      if (storedBudgetAndDaysValue) {
        setBudgetAndDaysValue(storedBudgetAndDaysValue);
      }
  
      if (storedTransactionFee) {
        setTransactionFee(storedTransactionFee);
      }
  
      if (storedTotalPrice) {
        setTotalPrice(storedTotalPrice);
      }
    }, []);
  
    useEffect(() => {
      // Save values to localStorage whenever they change
      localStorage.setItem("budgetAndDaysValue", budgetAndDaysValue);
      localStorage.setItem("transactionFee", transactionFee);
      localStorage.setItem("totalPrice", totalPrice);
    }, [budgetAndDaysValue, transactionFee, totalPrice]);
  
    
    const resetPriceSummaryValues = () => {
      setBudgetAndDaysValue("");
      setTransactionFee("");
      setTotalPrice("");
      localStorage.removeItem("budgetAndDaysValue");
      localStorage.removeItem("transactionFee");
      localStorage.removeItem("totalPrice");
    };

  // Create the value object to be passed to the context provider
  const value = {
    budgetAndDaysValue, setBudgetAndDaysValue,
    transactionFee, setTransactionFee,
    totalPrice, setTotalPrice,
    resetPriceSummaryValues
  };

  return (

    <>
    {/*  Render the PreviewTextContext.Provider with the provided value */}
    <PriceSummaryContext.Provider value={value}>
      {children} {/* Render the components wrapped by the provider */}
    </PriceSummaryContext.Provider>
    </>
  )
}

export default PriceSummaryProvider
