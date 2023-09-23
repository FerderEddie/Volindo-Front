// Import required components and hooks from Chakra UI and React
import { Box, Radio, RadioGroup, Stack, Center, Text, Flex, useStyleConfig } from "@chakra-ui/react";
import { useContext } from "react";

import { TypeContext } from "../../../../context/TypeProvider";


// Component for rendering individual radio options
function RadioOption({ title, label, value, selectedValue, setSelectedValue }) {

  
  // Check if this radio option is selected
  const isChecked = selectedValue === value;
  const radioStyles = useStyleConfig("Radio", { colorScheme: "white" } );


  // Function to handle the radio button click
  const handleRadioClick = () => {
    setSelectedValue((prevSelected) => (prevSelected === value ? "" : value));
  };


  return (
    <>
    <Box display="flex" alignItems="flex-start" mb={2}>

      <Box mt={{base: "3px", md: "4px"}} mr="2">
        {/* Radio button input */}
        <Radio sx={radioStyles} colorScheme="white" size={{base: "md", md: "md"}} bgColor={"#141414"} border={"solid 1px gray"}
         value={value} isChecked={isChecked} onChange={handleRadioClick} onClick={handleRadioClick}  />
      </Box>


      {/* Clicking on the box will select the corresponding radio option */}
      <Box
        onClick={handleRadioClick}
        style={{ cursor: "pointer" }}
      >

        {/* Heading for the radio option */}
        <Text fontSize= {{ base: "15px", sm:"15px", md:"md", lg:"md", xl: "17px" }}color="white" mb="1" fontFamily="Poppins">
          {title}
        </Text>

        {/* Label for the radio option */}
        <Text fontSize= {{ base: "13px", sm:"13px", md: "15px", lg:"15px", xl:"md" }} fontFamily= "Poppins" color="#7f827f" mb="2">
          {label}
        </Text>

      </Box>

    </Box>
    </>
  );
}


// Component for rendering radio options group
function RadioOptions({ title, primaryOption, secondaryOption, selectedOption, setSelectedOption }) {
  return (
    <>
    <Flex
      direction={"column"}
      w="100%"
      p={{base:"0px", md:"16px"}}
      borderRadius="15"
      bg="RGBA(0, 0, 0, 0.80)"
      mx={["20px", "20px", "auto"]}
      backgroundColor={"#141414"}
    >


      {/* Title for the radio options group */}
      <Text
        fontSize= {{ base: "17px", sm:"md", md: "lg", lg:"lg", xl:"19px"}}
        fontFamily= "Poppins"
        mb={{base: "20px", md: "20px"}}
        mt={{base: 3, md: 0}}
        color="white"
      >
        {title}
      </Text>


      {/* Radio group to contain the individual radio options */}
      <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e)}>


        <Stack direction="column">
          {/* Render the primary radio option */}
          <RadioOption
            title={primaryOption.title}
            label={primaryOption.label}
            value={primaryOption.value}
            selectedValue={selectedOption}
            setSelectedValue={setSelectedOption}
          />


          {/* Render the secondary radio option */}
          <RadioOption
            title={secondaryOption.title}
            label={secondaryOption.label}
            value={secondaryOption.value}
            selectedValue={selectedOption}
            setSelectedValue={setSelectedOption}
          />
        </Stack>
      </RadioGroup>
    </Flex>
    </>
  );
}



// This function represents a React component called 'Type'.
// It is responsible for rendering a radio button group with two options and managing the selected option state.


function Type() {
  // Define the constant variable 'optionTypeTitle' with the value "Type".
  const optionTypeTitle = "Type";


  // Define an object 'profileEngagementOption' representing the first radio button option.
  // It contains 'value', 'title', and 'label' properties that describe the option.
  const profileEngagementOption = {
    value: "Profile Engagement",
    title: "Profile Engagement (Brand Awareness)",
    label: "Type of advertising to draw attention to your brand and increase activity",
  };


  // Define another object 'otherOption' representing the second radio button option.
  // It also contains 'value', 'title', and 'label' properties to describe the option.
  const otherOption = {
    value: "Deals",
    title: "Deals",
    label: "Type of advertising for transactions and purchases",
  };

  // type context
  const { typeValue, setTypeValue } = useContext(TypeContext)


  return (
    <>
    <Center>
      <RadioOptions
        title={optionTypeTitle}
        primaryOption={profileEngagementOption}
        secondaryOption={otherOption}
        selectedOption={typeValue}
        setSelectedOption={setTypeValue}
      />
    </Center>
    </>
  );
}


export default Type;
