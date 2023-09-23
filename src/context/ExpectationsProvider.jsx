import React from "react";
// Import necessary modules
import { createContext, useState, useEffect } from "react";

// Create a context named PreviewTextContext
export const ExpectationsContext = createContext();

function ExpectationsProvider({ children }) {

  const [numberOfLeads, setNumberOfLeads] = useState(() => {
    return JSON.parse(localStorage.getItem('numberOfLeads')) || 0;
  });
  const [numberOfViews, setNumberOfViews] = useState(() => {
    return JSON.parse(localStorage.getItem('numberOfViews')) || 0;
  });
  const [numberOfClicks, setNumberOfClicks] = useState(() => {
    return JSON.parse(localStorage.getItem('numberOfClicks')) || 0;
  });

  const resetExpectationsValues = () => {
    setNumberOfLeads(0);
    setNumberOfViews(0);
    setNumberOfClicks(0);
  };

  useEffect(() => {
    localStorage.setItem('numberOfLeads', JSON.stringify(numberOfLeads));
  }, [numberOfLeads]);

  useEffect(() => {
    localStorage.setItem('numberOfViews', JSON.stringify(numberOfViews));
  }, [numberOfViews]);

  useEffect(() => {
    localStorage.setItem('numberOfClicks', JSON.stringify(numberOfClicks));
  }, [numberOfClicks]);

  // Create the value object to be passed to the context provider
  const value = {
    numberOfLeads, setNumberOfLeads,
    numberOfViews, setNumberOfViews,
    numberOfClicks, setNumberOfClicks,
    resetExpectationsValues
  };

  return (
    <>
    {/*  Render the PreviewTextContext.Provider with the provided value */}
    <ExpectationsContext.Provider value={value}>
      {children} {/* Render the components wrapped by the provider */}
    </ExpectationsContext.Provider>
    </>
  )
}

export default ExpectationsProvider
