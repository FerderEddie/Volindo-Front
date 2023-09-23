import React from "react";
// Import necessary modules
import { createContext, useState, useEffect } from "react";

// Create a context named PreviewTextContext
export const BudgetContext = createContext();

function BudgetProvider({ children }) {

  const [budgetAmount, setBudgetAmount] = useState(() => {
    // Retrieve the budget amount from local storage or set it to 50 if not found
    const savedBudget = localStorage.getItem("budgetAmount");
    return savedBudget ? JSON.parse(savedBudget) : 50;
  });


  useEffect(() => {
    // Save the budget amount to local storage whenever it changes
    localStorage.setItem("budgetAmount", JSON.stringify(budgetAmount));
  }, [budgetAmount]);


  // Reset other state variables to their initial values
  const resetBudgetValues = () => {
    setBudgetAmount(50);
  };

  // Create the value object to be passed to the context provider
  const value = {
    budgetAmount,
    setBudgetAmount,
    resetBudgetValues,
  };

  return (
    // Render the PreviewTextContext.Provider with the provided value
    <BudgetContext.Provider value={value}>
      {children} {/* Render the components wrapped by the provider */}
    </BudgetContext.Provider>
  );
}

export default BudgetProvider;
