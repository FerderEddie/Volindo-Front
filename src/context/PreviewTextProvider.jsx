// Import necessary modules
import { createContext, useState, useEffect } from "react";

// Create a context named PreviewTextContext
export const PreviewTextContext = createContext();

function PreviewTextProvider({ children }) {

const [previewTextValue, setPreviewTextValue] = useState("");

useEffect(() => {
  // Load the previewTextValue from localStorage when the component mounts
  const storedPreviewTextValue = localStorage.getItem("previewTextValue");
  if (storedPreviewTextValue) {
    setPreviewTextValue(storedPreviewTextValue);
  }
}, []);

useEffect(() => {
  // Save the previewTextValue to localStorage whenever it changes
  localStorage.setItem("previewTextValue", previewTextValue);
}, [previewTextValue]);

const resetPreviewTextValues = () => {
  setPreviewTextValue("");
  localStorage.removeItem("previewTextValue");
};
   // Create the value object to be passed to the context provider
   const value = {
    previewTextValue,
    setPreviewTextValue,
    resetPreviewTextValues,
  };

  return (
    <>
       {/*  Render the PreviewTextContext.Provider with the provided value */}
    <PreviewTextContext.Provider value={value}>
      {children} {/* Render the components wrapped by the provider */}
    </PreviewTextContext.Provider>
    </>
  )
}

export default PreviewTextProvider
