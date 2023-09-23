// Import required components and hooks from Chakra UI and React
import React, { useContext, useCallback  } from "react";
import { BiDollar } from 'react-icons/bi';
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Input,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormControl,
  InputLeftElement,
  InputGroup,
  Tooltip
} from "@chakra-ui/react";
import { BudgetContext } from '../../../../context/BudgetProvider';




const styles = [
  // Styles for the main heading
  {
    color: "white",
    textAlign: "left",
    fontSize: { base: "17px", sm:"17px", md: "lg", lg:"lg", xl:"19px" },
    letterSpacing: 0.5,
    fontFamily: "Poppins",
  },
  // Styles for the subheading
  {
    my: {base: 0, md: 1},
    fontSize: { base: "sm", sm:"sm", md: "15px", lg:"15px", xl:"md" },
    color: "#7f827f",
    textAlign: "left",
    letterSpacing: 0.4,
    fontFamily: "Poppins",
  },
];


function Finances() {

  // State to track the budget amount
  const {budgetAmount, setBudgetAmount} = useContext(BudgetContext)


  // Event handler for the range slider change
  const handleSliderChange = useCallback((value) => {
    setBudgetAmount(value[1]);
  }, []);

  // Event handler for the input change
  const handleInputChange = useCallback((e) => {
    const inputValue = e.target.value.trim();
    const parsedValue = inputValue === '' ? 0 : parseInt(inputValue);
    const limitedValue = Math.min(Math.max(parsedValue, 0), 1000);
    setBudgetAmount(limitedValue);
  }, []);
  

  return (
    <>
      <Stack gap={{base: 5, md: 3}} p={{base: 2, sm: 2, md: 4, lg: 4, xl: 4}}
       textAlign={{ base: "center", md: "left" }}
       >


        {/* Main heading */}
        <Heading {...styles[0]}>Finances</Heading>


        {/* Subheading */}
        <Text {...styles[1]}>
          Specify your maximum daily budget. When your advertisement has a
          better chance of getting the desired results, you can spend more than
          the daily budget, but the average amount will always be no more than
          you indicated for the day.
        </Text>


        <Text fontFamily={"Poppins"} color= {"#D3D3D3"} pt={{base: 2, lg: 0}} px={{base: 2, lg: 0}}
         fontSize={{base:"13px", sm:"13px", md:"sm", lg:"sm", xl:"15px"}} 
         >
          Enter the finances amount or use the slider
         </Text>

        <FormControl>
        <InputGroup
            align="center"
            w={{ base: '100%', sm:"80%", md: '65%', lg:"70%", xl:"50%" }}
            borderRadius={22}
            m={{base:"0", sm:"0 auto", md:"0"}}
            mb={{base: 4, lg: 5}}
            backgroundColor="#202020"
            border="1px solid #3F3F3F"
          >
            <InputLeftElement pl={"15"} pt={1} pointerEvents="none" children={<BiDollar color="#797979" fontSize="16px" />} />

            {/* Wrap the Input element with Tooltip */}
            <Tooltip
              label="Budget should be at least $50 USD"
              isOpen={budgetAmount < 50}
              hasArrow
              placement="auto"
              bg="red.600"
              color="white"
              borderRadius="md"
              textTransform={"capitalize"}
              ml={1}
              py={2}
              px={3}
              mb={{base: 1.5, lg: 0.5}}
              fontSize={{base:"xs", sm:"xs", md:"sm", lg:"sm", xl:"sm"}}
            >
              <Input
                style={{
                  borderRadius: '20px',
                  paddingLeft: '45px',
                }}
                _hover={{ border: 'solid 1px #797979' }}
                _focus={{ outline: "none", boxShadow: "none", border: 'solid 1px #797979' }}
                value={budgetAmount}
                onChange={handleInputChange}
                p={5}
                fontSize={{base:"sm", lg:"md"}}
                autoComplete="off"
              />
            </Tooltip>
          </InputGroup>
        </FormControl> 


        <Stack direction={"column"} >

          {/* Range slider */}
          <RangeSlider
            aria-label={["min", "max"]}
            value={[50, budgetAmount]}
            min={50} 
            max={1000}
            onChange={handleSliderChange}
            mt={{base: 10, sm: 14, md: 14, lg: 10, xl: 10}}
            mb={-1}
            w={{base:"90%", sm:"93%", md:"92%", lg:"88%", xl:"90%"}}   
            ml={{base: 1, sm: 1.5, md: 4, lg: 6, xl: 9}}       
          >
            <RangeSliderTrack style={{backgroundColor:"#797979"}}>
              <RangeSliderFilledTrack style={{backgroundColor:"lightgray"}} />
            </RangeSliderTrack>


            {/* RangeSliderThumb for the upper value */}
            <RangeSliderThumb index={1}>
              <Flex alignItems="center" justifyContent="center">

                {/* Styled box for displaying value above the thumb */}
                <Box
                  border="solid 1px #3F3F3F"
                  borderRadius={20}
                  w={{base:"60px", sm:"64px", md:"68px", lg: "74px", xl: "78px"}}
                  h={{base: 8, sm: 8, md: 8, lg: 8, xl: 8}}
                  mb={20}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{base:"sm", sm:"sm", md:"15px", lg:"md", xl:"md"}}
                  _hover={{ border: 'solid 1px #797979' }} 
                >
                  <Box fontSize={{base:"sm", sm:"sm", md:"md", lg:"md", xl:"lg"}}>
                 <BiDollar style={{marginRight:-2}} />
                 </Box>
                 
                  {budgetAmount}
                </Box>

              </Flex>
            </RangeSliderThumb>
          </RangeSlider>
        

          {/* Min and Max labels */}
          <Stack justify={"space-between"} direction={"row"} pt={{base: 0, lg: 0}}>

            <Flex align={"center"} fontSize={{base:"15px", sm:"15px", md:"md", lg:"md", xl:"17px"}}>
              <BiDollar color="#797979" />
              <Text color="#797979" ml={-0.5}>50</Text>
            </Flex>

            <Flex align={"center"} fontSize={{base:"15px", sm:"15px", md:"md", lg:"md", xl:"17px"}}>
              <BiDollar color="#797979"  />
              <Text color="#797979" ml={-0.5}>1000</Text>
            </Flex>

          </Stack>

        </Stack>
      </Stack>
    </>
  );
}

export default React.memo(Finances);

