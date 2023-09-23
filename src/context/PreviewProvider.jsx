// Import necessary modules
import React, { createContext, useState, useMemo, useEffect } from "react";

// Create a context named PreviewTextContext
export const PreviewContext = createContext();

function PreviewProvider({ children }) {

  const [uploadedFiles, setUploadedFiles] = useState(() => {
    
    // Initializing state from local storage
    const savedFiles = localStorage.getItem("uploadedFiles");
    return savedFiles ? JSON.parse(savedFiles) : [];
  });

  useEffect(() => {
    // Storing uploadedFiles in local storage whenever it changes
    localStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  // Reset other state variables to their initial values
  const resetPreviewValues = () => {
    setUploadedFiles([]);
    localStorage.removeItem("uploadedFiles");  // Removing the item from local storage when reset
  };
  // Create the value object to be passed to the context provider
  const value = useMemo(
    () => ({
      uploadedFiles,
      setUploadedFiles,
      resetPreviewValues,
    }),
    [uploadedFiles]
  );

  return (
    <>
      {/*  Render the PreviewTextContext.Provider with the provided value */}
      <PreviewContext.Provider value={value}>
        {children} {/* Render the components wrapped by the provider */}
      </PreviewContext.Provider>
    </>
  );
}

export default React.memo(PreviewProvider);
