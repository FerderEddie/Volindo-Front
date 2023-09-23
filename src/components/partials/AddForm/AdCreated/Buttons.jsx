import { Stack, Button, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

// Importing various contexts to manage state throughout the application
import { BudgetContext } from "../../../../context/BudgetProvider";
import { DaysValueContext } from "../../../../context/DaysProvider";
import { PreviewContext } from "../../../../context/PreviewProvider";
import { PreviewTextContext } from "../../../../context/PreviewTextProvider";
import { SocialContext } from "../../../../context/SocialProvider";
import { TypeContext } from "../../../../context/TypeProvider";
import { ExpectationsContext } from "../../../../context/ExpectationsProvider";
import { PriceSummaryContext } from "../../../../context/PriceSummaryProvider";

function Buttons() {
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();
  const [ mainPageSpinner, setMainPageSpinner ] = useState(false);
  const [ newAdSpinner, setNewAdSpinner ] = useState(false);

  // Extracting reset functions from various contexts to reset state values
  const { resetBudgetValues } = useContext(BudgetContext);
  const { resetDaysValues } = useContext(DaysValueContext);
  const { resetPreviewValues, uploadedFiles } = useContext(PreviewContext);
  const { resetPreviewTextValues } = useContext(PreviewTextContext);
  const { resetSocialValues } = useContext(SocialContext);
  const { resetTypeValues } = useContext(TypeContext);
  const { resetExpectationsValues } = useContext(ExpectationsContext);
  const { resetPriceSummaryValues } = useContext(PriceSummaryContext);


  // function to delete uploaded files from server to reset the uploaded files value
  const deleteUploadedFiles = async () => {
    try {
      // Get ids of all uploaded files
      const fileIds = uploadedFiles.map((file) => file._id); // Assuming `_id` is the identifier

      // Send DELETE request to server with file ids
      await axios.delete("https://volindo-back.onrender.com/files/deleteUploadedFiles", {
        data: { ids: fileIds },
      });

      // Reset preview values after files have been deleted
      resetPreviewValues();
    } catch (error) {
      console.error("Error deleting uploaded files:", error);
    }
  };

  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 4, lg: 4 }}
        mt={{ base: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
        w={{ base: "100%", lg: "100%" }}
        m={"0 auto"}
        align={{ base: "center", lg: "flex-start" }}
      >
        <Button
          w={{ base: "60%", sm: "40%", md: "60%", lg: "45%", xl: "35%" }}
          fontSize={{
            base: "sm",
            sm: "15px",
            md: "sm",
            lg: "sm",
            xl: "md",
          }}
          textTransform={"capitalize"}
          paddingBlock={{ base: 5, sm: 5, md: 5, lg: 5, xl: "22px" }}
          bgColor={"#AACD5F"}
          color={"black"}
          borderRadius={20}
          _hover={{ bgColor: "#AACD5F", border: "solid 1px transparent" }}
          _focus={{ outline: "none" }}
          onClick={async () => {

            setNewAdSpinner(true)
            // Resetting state values using functions from contexts
            resetDaysValues();
            resetBudgetValues();
            resetPreviewTextValues();
            resetSocialValues();
            resetTypeValues();
            resetExpectationsValues();
            resetPriceSummaryValues();

            await deleteUploadedFiles();

            // Navigating to the AddForm route
            navigate("/");
          }}
        >
          {newAdSpinner ? (
            <Spinner
              size={{
                base: "sm",
                sm: "sm",
                md: "sm",
                lg: "sm",
                xl: "md",
              }}
            />
          ) : (
            "Create new advertising"
          )}{" "}
        </Button>

        {/* Link to navigate to volindos main page */}
        <Button
          w={{ base: "60%", sm: "40%", md: "60%", lg: "45%", xl: "35%" }}
          fontSize={{
            base: "sm",
            sm: "15px",
            md: "sm",
            lg: "sm",
            xl: "md",
          }}
          mb={10}
          textTransform={"capitalize"}
          paddingBlock={{ base: 5, sm: 5, md: 5, lg: 5, xl: "22px" }}
          bgColor="black"
          color="#AACD5F"
          border="solid 2px #AACD5F"
          borderRadius={20}
          _hover={{ bgColor: "black", border: "solid 2px #AACD5F" }}
          _focus={{ outline: "none" }}
          onClick={() => {
            setMainPageSpinner(true);
            window.location.href = "https://Dashboard.Volindo.com";
          }}
        >
          {mainPageSpinner ? (
            <Spinner
              size={{
                base: "sm",
                sm: "sm",
                md: "sm",
                lg: "sm",
                xl: "md",
              }}
            />
          ) : (
            "Main page"
          )}{" "}
        </Button>
      </Stack>
    </>
  );
}

export default Buttons;
