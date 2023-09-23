// Import necessary modules
import { createContext, useState, useEffect } from "react";

// Create a context named PreviewTextContext
export const TypeContext = createContext();

function TypeProvider({ children }) {
  const [typeValue, setTypeValue] = useState("");
  const [advertisementName, setAdvertisementName] = useState("");
  const [email, setEmail] = useState("");



  useEffect(() => {
    // Load values from localStorage when component mounts
    const storedTypeValue = localStorage.getItem("typeValue");
    const storedAdvertisementName = localStorage.getItem("advertisementName");
    const storedEmailInput = localStorage.getItem("email");

    if (storedTypeValue) {
      setTypeValue(storedTypeValue);
    }
    
    if (storedAdvertisementName) {
      setAdvertisementName(storedAdvertisementName);
    }

    if (storedEmailInput) {
      setEmail(storedEmailInput);
    }

  }, []);

  useEffect(() => {
    // Save values to localStorage whenever they change
    if (typeValue) {
      localStorage.setItem("typeValue", typeValue);
    }

    if (advertisementName) {
      localStorage.setItem("advertisementName", advertisementName);
    }

    if (email) {
      localStorage.setItem("email", email);
    }

  }, [typeValue, advertisementName, email]);


  // Reset other state variables to their initial values
  const resetTypeValues = () => {
    setTypeValue("");
    setAdvertisementName("");
    setEmail("")
    localStorage.removeItem("typeValue");
    localStorage.removeItem("advertisementName");
    localStorage.removeItem("email");
  };

  // Create the value object to be passed to the context provider
  const value = {
    typeValue,
    setTypeValue,
    advertisementName,
    setAdvertisementName,
    email,
    setEmail,
    resetTypeValues,
  };

  return (
    <>
      {/*  Render the PreviewTextContext.Provider with the provided value */}
      <TypeContext.Provider value={value}>
        {children} {/* Render the components wrapped by the provider */}
      </TypeContext.Provider>
    </>
  );
}

export default TypeProvider;
