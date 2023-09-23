// Importing necessary modules and components
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; // UI component library
import { ToastContainer } from "react-toastify"; // Toast notifications container
import { HelmetProvider } from "react-helmet-async"; // Management of document head tags
import App from "./App.jsx"; // Main App component
import "./index.css"; // Global styles
import DaysProvider from "./context/DaysProvider.jsx"; // Context provider for "days"
import PreviewProvider from "./context/PreviewProvider.jsx"; // Context provider for "preview"
import SocialProvider from "./context/SocialProvider.jsx"; // Context provider for "social"
import PreviewTextProvider from "./context/PreviewTextProvider.jsx"; // Context provider for "preview text"
import BudgetProvider from "./context/BudgetProvider.jsx"; // Context provider for "budget"
import TypeProvider from "./context/TypeProvider.jsx"; // Context provider for "type"
import ExpectationsProvider from "./context/ExpectationsProvider.jsx"; // Context provider for "expectations"
import PriceSummaryProvider from "./context/PriceSummaryProvider.jsx"; // Context provider for "price summary"

// Rendering the app component tree with nested context providers and necessary wrappers
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>

    <DaysProvider>
      <PreviewProvider>
        <SocialProvider>
          <PreviewTextProvider>
            <BudgetProvider>
              <TypeProvider>
                <ExpectationsProvider>
                  <PriceSummaryProvider>

                    <ChakraProvider>
                      <ToastContainer />

                      <App />

                    </ChakraProvider>
                    
                  </PriceSummaryProvider>
                </ExpectationsProvider>
              </TypeProvider>
            </BudgetProvider>
          </PreviewTextProvider>
        </SocialProvider>
      </PreviewProvider>
    </DaysProvider>

  </HelmetProvider>
);
