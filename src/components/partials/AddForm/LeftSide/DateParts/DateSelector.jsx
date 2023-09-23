// Importing necessary components and hooks from react, chakra UI and other libraries
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftElement,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import React, { useContext } from "react";

import { BiCalendarAlt } from "react-icons/bi";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { PreviewContext } from "../../../../../context/PreviewProvider";
import { computeTopStyle } from "./TopDaypicker";

// DateSelector component definition
function DateSelector({
  selectedStartDate,
  selectedFinishDate,
  todayDate,
  selectedInput,
  CustomRow,
  handleToggleDayPicker,
  handleDaySelect,
  showDayPicker,
  dayPickerRef,
  inputDateStyles,
  maxTwoYears,
}) {
  // Use context hook to get uploadedFiles from PreviewContext
  const { uploadedFiles } = useContext(PreviewContext);

  return (
    <>
      <Flex direction="column" gap={4} minW={{md:"48%" ,lg:"50%", xl:"50%" }}>
        {/* Start Date Input */}
        <Flex gap={1.5} >
          <FormControl>
            <FormLabel color={"#D3D3D3"} fontSize={{base:"md", sm:"md", md:"md", lg:"md", xl:"17px"}} >Start date</FormLabel>
            <InputGroup>
              {/* Input icon */}
              <InputLeftElement
                pl={"16px"}
                mt={{ base: "6px", lg: "6px" }}
                pointerEvents="none"
              >
                <BiCalendarAlt color="#797979" size={20} />
              </InputLeftElement>

              {/* Start date input field with conditional styling and formatting */}
              <Input
                p={6}
                pl={"50px"}
                readOnly
                fontWeight={selectedStartDate === null ? "medium" : "normal"}
                color={selectedStartDate === null ? "#797979" : "white"}
                fontSize={{
                  base: selectedStartDate === null ? "13px" : "14px", 
                  sm: selectedStartDate === null ? "14px" : "15px", 
                  md: selectedStartDate === null ? "14px" : "15px", 
                  lg: selectedStartDate === null ? "14px" : "15px", 
                  xl: selectedStartDate === null ? "15px" : "16px",
                }}
                  value={
                  selectedStartDate === null
                    ? format(todayDate, "dd/MM/yyyy")
                    : format(selectedStartDate, "dd/MM/yyyy")
                }
                onClick={handleToggleDayPicker("start")}
                {...inputDateStyles}
              />
            </InputGroup>
          </FormControl>
        </Flex>

        {/* Finish Date Input */}
        <Flex gap={1.5}>
          <FormControl>
            <FormLabel color={"#D3D3D3"} fontSize={{base:"md", sm:"md", md:"md", lg:"md", xl:"17px"}} >Finish date</FormLabel>
            <InputGroup>
              <InputLeftElement
                pl={"18px"}
                mt={{ base: "6px", lg: "6px" }}
                pointerEvents="none"
              >
                <BiCalendarAlt color="#797979" size={20} />
              </InputLeftElement>

              {/* Finish date input field with conditional styling and formatting */}
              <Input
                p={6}
                pl={"50px"}
                fontWeight={selectedFinishDate === null ? "medium" : "normal"}
                color={selectedFinishDate === null ? "#797979" : "white"}
                fontSize={{
                  base: selectedFinishDate === null ? "13px" : "14px", 
                  sm: selectedFinishDate === null ? "14px" : "15px", 
                  md: selectedFinishDate === null ? "14px" : "15px", 
                  lg: selectedFinishDate === null ? "14px" : "15px", 
                  xl: selectedFinishDate === null ? "15px" : "16px",
                }}                value={
                  selectedFinishDate === null
                    ? format(todayDate, "dd/MM/yyyy")
                    : format(selectedFinishDate, "dd/MM/yyyy")
                }
                readOnly
                onClick={handleToggleDayPicker("finish")}
                {...inputDateStyles}
              />
            </InputGroup>
          </FormControl>
        </Flex>

        {/* DayPicker Container - displays the day picker component when showDayPicker is true */}
        {showDayPicker && (
          <Flex
            ref={dayPickerRef}
            position={{ base: "absolute", md: "absolute" }}
            top={computeTopStyle(uploadedFiles)}
            left={{ base: "8%", sm:"15%", md: "14%", lg:"9.5%", xl:"11%" }}
            zIndex={2}
            borderRadius={{ base: "20px", md: "20px" }}
            w={{ base: "85%", sm: "70%", md: "auto", lg: "auto", xl: "auto" }}
            direction={{base:"column", sm:"column", md:"row", lg:"row", xl:"row"}}
            fontSize={{ base: "13px", lg: "14px" }}
            style={{
              top: { uploadedFiles },
              backgroundColor: "#141414",
              border: "solid 1px gray",
            }}
          >
            {/* DayPicker component configuration */}
            <DayPicker
              mode="single"
              selected={
                selectedInput === "start"
                  ? selectedStartDate
                  : selectedFinishDate
              }
              onSelect={handleDaySelect}
              numberOfMonths={2}
              pagedNavigation
              required
              toYear={maxTwoYears}
              weekStartsOn={1}
              fromDate={new Date()}
              components={{ Row: CustomRow }}
              showOutsideDays
              fixedWeeks
              styles={{
                month: { marginInline: 4 },
                day: { color: "white", marginInline: 7 },
                head: { color: "white", fontSize: 18 },
                caption: { color: "white", padding: 2 },
                cell: { backgroundColor: "#141414" },
              }}
            />
          </Flex>
        )}
      </Flex>
    </>
  );
}

export default DateSelector;
