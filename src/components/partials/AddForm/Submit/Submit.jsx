// Importing necessary modules and components
import React, { useState, useContext } from "react";
import { Button, useToast, Spinner } from "@chakra-ui/react";
import ErrorToast from "../../../sections/Toasts/ErrorToast";
import SuccessToast from "../../../sections/Toasts/SuccessToast";

// Importing various contexts that store different state values
import { BudgetContext } from "../../../../context/BudgetProvider";
import { DaysValueContext } from "../../../../context/DaysProvider";
import { PreviewContext } from "../../../../context/PreviewProvider";
import { PreviewTextContext } from "../../../../context/PreviewTextProvider";
import { SocialContext } from "../../../../context/SocialProvider";
import { TypeContext } from "../../../../context/TypeProvider";
import { ExpectationsContext } from "../../../../context/ExpectationsProvider";
import { PriceSummaryContext } from "../../../../context/PriceSummaryProvider";

// Importing axios for API calls
import axios from "axios";

// Importing useNavigate hook for routing
import { useNavigate } from "react-router-dom";

function Submit() {
  // Initializing hooks and contexts
  const navigate = useNavigate();
  const toast = useToast();
  const [spinnerValue, setSpinnerValue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Destructuring values from various contexts
  const { budgetAmount } = useContext(BudgetContext);
  const { startDateWithTime, finishDateWithTime, daysValue } =
    useContext(DaysValueContext);
  const { uploadedFiles } = useContext(PreviewContext);
  const { previewTextValue } = useContext(PreviewTextContext);
  const { socialValue } = useContext(SocialContext);
  const { typeValue, advertisementName, email } = useContext(TypeContext);
  const { numberOfLeads, numberOfViews, numberOfClicks } =
    useContext(ExpectationsContext);
  const { budgetAndDaysValue, transactionFee, totalPrice } =
    useContext(PriceSummaryContext);

  // Formatting date values
  const finalStartDate = startDateWithTime?.toString().slice(0, 21);
  const finalFinishDate = finishDateWithTime?.toString().slice(0, 21);

  // Creating an object to hold all form values
  const formValues = {
    advertisementName: advertisementName,
    socialValue: socialValue,
    typeValue: typeValue,
    uploadedFiles: uploadedFiles,
    previewTextValue: previewTextValue,
    finalStartDate: finalStartDate,
    finalFinishDate: finalFinishDate,
    daysValue: daysValue,
    budgetAmount: budgetAmount,
    numberOfLeads: numberOfLeads,
    numberOfViews: numberOfViews,
    numberOfClicks: numberOfClicks,
    budgetAndDaysValue: budgetAndDaysValue,
    transactionFee: transactionFee,
    totalPrice: totalPrice,
    email: email,
  };

  // HandleSubmit function to process form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinnerValue(true);

    try {
      // API call to submit the advertisement data
      const response = await axios.post(
        "https://volindo-back.onrender.com/advertisements/addAdvertisement",
        JSON.stringify(formValues),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // If response indicates success, display a success toast and navigate to a new page
      if (response.data.success) {
        setTimeout(() => {
          const showSuccessToast = (response) => {
            toast({
              title: "success",
              render: ({ onClose }) => (
                <SuccessToast
                  onClose={onClose}
                  response={response}
                  message={response.data.message}
                />
              ),
              status: "success",
              position: "top",
              duration: 2000,
              isClosable: true,
            });
          };

          showSuccessToast(response);
          setSpinnerValue(false);

          setTimeout(() => {
            navigate("/AdvertisementCreated");
          }, 2500);
        }, 3000);
      }
    } catch (error) {
      // If there is an error, display an error toast
      setTimeout(() => {
        const showErrorToast = (error) => {
          toast({
            title: "Error",
            render: ({ onClose }) => (
              <ErrorToast error={error} onClose={onClose} />
            ),
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        };

        showErrorToast(error);
        setSpinnerValue(false);
      }, 1200);
    }
  };

  // Rendering the component with a form and a submit button
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Button
          type="submit"
          mx={"auto"}
          w={{ base: "90%", sm: "90%", md: "100%", lg: "100%", xl: "100%" }}
          bgColor={"#AACD5F"}
          borderRadius={26}
          mt={{ base: 3, lg: 2 }}
          mb={{ base: 6, lg: 6 }}
          py={{ base: 4, sm: 4, md: 5, lg: 5, xl: 6 }}
          border={"solid 2px #AACD5F"}
          fontFamily={"Poppins"}
          fontSize={{ base: "md", sm: "md", md: "md", lg: "md", xl: "lg" }}
          transition="all 0.7s ease"
          _hover={{
            bgColor: "black",
            border: "solid 2px #AACD5F",
            color: "#AACD5F",
            transition: "all 0.7s ease",
            outline: "none",
          }}
          _focus={{
            bgColor: "black",
            border: "solid 2px #AACD5F",
            color: "#AACD5F",
            outline: "none",
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          {spinnerValue ? (
            <Spinner
              size={{ base: "sm", sm: "sm", md: "sm", lg: "sm", xl: "md" }}
              color={isFocused ? "#AACD5F" : "black"}
            />
          ) : (
            "Create"
          )}
        </Button>
      </form>
    </>
  );
}

export default Submit;
