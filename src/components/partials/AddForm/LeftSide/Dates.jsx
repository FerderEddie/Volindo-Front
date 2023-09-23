// Importing necessary components and hooks from Chakra UI and other libraries
import React, { useState, useRef, useEffect, useContext } from "react";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import { DaysValueContext } from "../../../../context/DaysProvider";

// Import reusable components and functions
import TimeSelector from "./DateParts/TimeSelector";
import { generateTimeOptions } from "./DateParts/GeneratedTimeOptions";
import DateSelector from "./DateParts/DateSelector";

// Importing components and functions from 'react-day-picker' library
import { Row } from "react-day-picker";
import { format, differenceInCalendarDays } from "date-fns";

// Importing the default styles for 'react-day-picker' + additional style
import "react-day-picker/dist/style.css";
import "../../Styles/dayPicker.css";
import { inputTimeStyles, inputDateStyles } from "../../Styles/DatesInputs";

import { useToast } from "@chakra-ui/react"; // Necessary UI component imports from Chakra UI
import WarningToast from "../../../sections/Toasts/WarningToast";
import InfoToast from "../../../sections/Toasts/InfoToast";

function Dates() {
  // Get the current date
  const todayDate = new Date();
  const toast = useToast();

  /* ---------------------------------------------------------hooks-------------------------------------------------- */

  // Get initial values from localStorage
  const [selectedStartDate, setSelectedStartDate] = useState(() => {
    const storedValue = localStorage.getItem("selectedStartDate");
    return storedValue ? new Date(storedValue) : null;
  });

  const [selectedFinishDate, setSelectedFinishDate] = useState(() => {
    const storedValue = localStorage.getItem("selectedFinishDate");
    return storedValue ? new Date(storedValue) : null;
  });

  const [selectedStartTime, setSelectedStartTime] = useState(() =>
    localStorage.getItem("selectedStartTime")
  );

  const [selectedFinishTime, setSelectedFinishTime] = useState(() =>
    localStorage.getItem("selectedFinishTime")
  );

  // Store values in localStorage whenever they change
  useEffect(() => {
    if (selectedStartDate) {
      localStorage.setItem(
        "selectedStartDate",
        selectedStartDate.toISOString()
      );
    }
  }, [selectedStartDate]);

  useEffect(() => {
    if (selectedFinishDate) {
      localStorage.setItem(
        "selectedFinishDate",
        selectedFinishDate.toISOString()
      );
    }
  }, [selectedFinishDate]);

  useEffect(() => {
    if (selectedStartTime) {
      localStorage.setItem("selectedStartTime", selectedStartTime);
    }
  }, [selectedStartTime]);

  useEffect(() => {
    if (selectedFinishTime) {
      localStorage.setItem("selectedFinishTime", selectedFinishTime);
    }
  }, [selectedFinishTime]);

  // State for toggling day picker visibility
  const [showDayPicker, setShowDayPicker] = useState(false);

  // State for tracking which input is currently selected
  const [selectedInput, setSelectedInput] = useState("");

  // Ref for the day picker component
  const dayPickerRef = useRef(null);

  /* -------------------------------------------------------small functions----------------------------------------------------------- */

  // Function to check if a date is in the past
  function isPastDate(date) {
    return differenceInCalendarDays(date, new Date()) < 0;
  }

  // Component to display rows with past days grayed out
  function CustomRow(props) {
    // Apply different styles to past and future days
    return (
      <Row
        {...props}
        className={props.dates.every(isPastDate) ? "past-row" : "future-row"}
      />
    );
  }

  // Calculate the maximum year for the date selection
  const limitTwoYears = new Date().getFullYear();
  const maxTwoYears = limitTwoYears + 2;

  /* ---------------------- Context and useEffect Hooks for calculating and setting day values ---------------------- */

  const {
    setDaysValue,
    setStartDateWithTime,
    setFinishDateWithTime,
    setStartDate,
    setFinishDate,
    setStartTime,
    setFinishTime,
  } = useContext(DaysValueContext);

  useEffect(() => {
    setStartDate(selectedStartDate);
  }, [selectedStartDate]);

  useEffect(() => {
    setFinishDate(selectedFinishDate);
  }, [selectedFinishDate]);

  useEffect(() => {
    setStartTime(selectedStartTime);
  }, [selectedStartTime]);

  useEffect(() => {
    setFinishTime(selectedFinishTime);
  }, [selectedFinishTime]);

  useEffect(() => {
    if (
      selectedStartDate &&
      selectedFinishDate &&
      selectedStartTime &&
      selectedFinishTime
    ) {
      const startDateWithTime = new Date(
        `${format(selectedStartDate, "yyyy-MM-dd")} ${selectedStartTime}`
      );
      const finishDateWithTime = new Date(
        `${format(selectedFinishDate, "yyyy-MM-dd")} ${selectedFinishTime}`
      );

      // Calculate milliseconds difference
      const msDifference = finishDateWithTime - startDateWithTime;

      if (msDifference >= 0) {
        // Calculate days only when both dates are selected and msDifference is non-negative
        const days = Math.floor(msDifference / (1000 * 60 * 60 * 24));

        setDaysValue(days);
        setStartDateWithTime(startDateWithTime);
        setFinishDateWithTime(finishDateWithTime);

        const showInfoToast = () => {
          toast({
            title: "info",
            render: ({ onClose }) => (
              <InfoToast
                onClose={onClose}
                startDateWithTime={startDateWithTime}
                finishDateWithTime={finishDateWithTime}
              />
            ),
            status: "info",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        };

        showInfoToast(msDifference);
      } else {
        setDaysValue(""); // Set daysValue to an empty string
        const showWarningToast = () => {
          toast({
            title: "warning",
            render: ({ onClose }) => (
              <WarningToast
                onClose={onClose}
                message={"Finish Date Cannot Be Earlier Than The Start Date !"}
              />
            ),
            status: "warning",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        };

        showWarningToast();
      }
    } else {
      setDaysValue(""); // Set daysValue to an empty string when dates are not both selected
    }
  }, [
    selectedStartDate,
    selectedFinishDate,
    selectedStartTime,
    selectedFinishTime,
    setDaysValue,
  ]);

  /* ----------------------------------------------------------------handlers-------------------------------------------------------- */

  // Toggle day picker visibility and set selected input
  const handleToggleDayPicker = (selected) => () => {
    if (selectedInput === selected) {
      setShowDayPicker(!showDayPicker); // Toggle day picker visibility
    } else {
      setSelectedInput(selected);
      setShowDayPicker(true);
    }
  };

  // Handle day selection
  const handleDaySelect = (date) => {
    if (selectedInput === "start") {
      setSelectedStartDate(date);
    } else if (selectedInput === "finish") {
      setSelectedFinishDate(date);
    }
    setShowDayPicker(false);
  };

  // Handle start time selection
  const handleStartTimeChange = (time) => {
    setSelectedStartTime(time);
  };

  // Handle finish time selection
  const handleFinishTimeChange = (time) => {
    setSelectedFinishTime(time);
  };

  return (
    <>
      <Heading
        fontSize={{ base: "lg", sm: "lg", md: "lg", lg: "lg", xl: "19px" }}
        p={{ base: 4, lg: 4 }}
        pl={{ base: 4, lg: "auto" }}
        color={"white"}
        textAlign={"left"}
        letterSpacing={0.5}
        fontFamily={"Poppins"}
      >
        Dates
      </Heading>

      <Stack
        gap={{ base: 5, md: 4 }}
        textAlign={{ base: "center", md: "left" }}
        direction={{ base: "column", md: "row" }}
        p={{ base: 3, lg: 4 }}
        mb={{ base: 0, lg: 2 }}
      >
        {/* ------------------------------------------------Date Select Section------------------------------------------- */}

        <DateSelector
          selectedStartDate={selectedStartDate}
          selectedFinishDate={selectedFinishDate}
          todayDate={todayDate}
          CustomRow={CustomRow}
          isPastDate={isPastDate}
          selectedInput={selectedInput}
          handleToggleDayPicker={handleToggleDayPicker}
          handleDaySelect={handleDaySelect}
          showDayPicker={showDayPicker}
          dayPickerRef={dayPickerRef}
          inputDateStyles={inputDateStyles}
          maxTwoYears={maxTwoYears}
        />

        {/* -----------------------------------------------Time Select Section---------------------------------------------------- */}

        <Flex
          direction="column"
          justify={"space-between"}
          mt={{ base: 2, sm: 0, md: 1, lg: 0, xl: 0 }}
          minW={{md:"48%",lg:"43%" ,xl:"46%"}}
        >
          <TimeSelector
            label="Start time"
            selectedTime={selectedStartTime}
            handleTimeChange={handleStartTimeChange}
            generateTimeOptions={generateTimeOptions}
            inputTimeStyles={inputTimeStyles}
          />

          <TimeSelector
            label="Finish time"
            selectedTime={selectedFinishTime}
            handleTimeChange={handleFinishTimeChange}
            generateTimeOptions={generateTimeOptions}
            inputTimeStyles={inputTimeStyles}
          />
        </Flex>
      </Stack>
    </>
  );
}

export default Dates;
