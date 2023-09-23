// Import necessary modules
import { createContext, useState, useEffect  } from "react";

// Create a context named PreviewTextContext
export const SocialContext = createContext();

function SocialProvider({ children }) {
  const [socialValue, setSocialValue] = useState("");

  useEffect(() => {
    // Load socialValue from localStorage when component mounts
    const storedSocialValue = localStorage.getItem("socialValue");
    if (storedSocialValue) {
      setSocialValue(storedSocialValue);
    }
  }, []);

  useEffect(() => {
    // Save socialValue to localStorage whenever it changes
    if (socialValue) {
      localStorage.setItem("socialValue", socialValue);
    }
  }, [socialValue]);
  

  const resetSocialValues = () => {
    setSocialValue("");
    localStorage.removeItem("socialValue");
  };
  // Create the value object to be passed to the context provider
  const value = {
    socialValue,
    setSocialValue,
    resetSocialValues,
  };

  return (
    <>
      {/*  Render the PreviewTextContext.Provider with the provided value */}
      <SocialContext.Provider value={value}>
        {children} {/* Render the components wrapped by the provider */}
      </SocialContext.Provider>
    </>
  );
}

export default SocialProvider;
