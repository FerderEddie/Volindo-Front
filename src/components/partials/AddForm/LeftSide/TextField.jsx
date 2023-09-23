// Import required components and hooks from Chakra UI and React
import { Flex, Textarea, Text, useBreakpointValue, Heading } from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import { PreviewTextContext } from "../../../../context/PreviewTextProvider";

// Component for rendering a custom textarea
function CustomTextArea({ placeholder, value, onblur }) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value); // synchronize local state with prop
  }, [value]);

  // Calculate the maximum box width based on breakpoint value
  const maxBoxWidth = useBreakpointValue({ base: "100%", sm: "100%" });


  return (
    <>
      <Flex
        maxW={maxBoxWidth}
        p={{ base: "2px", md: "12px" }}
        borderRadius="15px"
        bg="rgba(0, 0, 0, 0.80)"
        mx={["20px", "20px", "auto"]}
        my="2px"
        pb={{base: 2, lg: "auto"}}
        backgroundColor={"#141414"}
        direction={"column"}
        gap={{ base: 2, md: 0 }}
      >
        <Heading
          fontFamily="Poppins"
          fontSize= {{ base: "lg", sm:"lg", md: "lg", lg:"19px", xl:"19px" }}
          mb={{base: 2, sm: 2, md: 4, lg: 5, xl: 4}}
          pt={{base: 2, lg: 0}}
          color="white"
          textAlign="left"
        >
          Text
        </Heading>

        {/* Textarea for user input */}
        <Textarea
          fontSize={{base: "sm", lg: "md"}}
          fontFamily="Poppins"
          minH={{ base: "190px", sm:"190px", md: "150px", lg:"170px", xl:"150px" }}
          w={"auto"}
          letterSpacing={0.5}
          placeholder={placeholder}
          _placeholder={{
            base: { p: 1, lineHeight: "170%" },
            md: { p: 0 },
          }}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)} 
          onBlur={(e) => {
            onblur(e); 
          }}
          color="white"
          backgroundColor="#202020"
          border="1px solid #3F3F3F"
          borderRadius="10px"
          px={5}
          py={4}
          _focus={{
            boxShadow: "none",
            border: "1px solid #797979",
          }}
          _hover={{
            outline: "none",
            border: "1px solid #797979",
          }}
          sx={{
            "&::placeholder": { color: "#7f827f" },
            "&:not(:focus)::before": {
              display: "block",
              fontSize: "lg",
              mb: "0",
            },
          }}
          css={{
            lineHeight: "1.6",
            resize: "none",
            maxHeight: "150px",
            paddingRight: "8px",
            "::-webkit-scrollbar": {
              width: "6px",
              height: "5px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "rgba(255, 255, 255, 0.3)",
            },
          }}
        />

        <Text
          fontSize= {{ base: "sm", sm:"sm", md: "15px", lg:"15px", xl:"md" }}
          pb={{base: 2, lg: 0}}
          fontFamily="Poppins"
          color="#7f827f"
          textAlign="left"
          pt={{base: 3, lg: 5}}
        >
          or let Volindo handle the creative aspects.
        </Text>
      </Flex>
    </>
  );
}

// Function to render a custom text field component
function TextField() {
  // Context for the value of previewTextValue
  const { previewTextValue, setPreviewTextValue } =
    useContext(PreviewTextContext);

  // Render the custom text area component with appropriate props
  return (
    <>
      <CustomTextArea
        title="Text"
        placeholder="Write your text that will be displayed in the advertisement"
        value={previewTextValue}
        onblur={(e) => setPreviewTextValue(e.target.value)}
      />
    </>
  );
}

// Export the TextField component as the default export
export default TextField;
