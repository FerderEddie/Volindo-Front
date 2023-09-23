import React from "react";
import {
  Box,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";

function TimeSelector({
  label,
  selectedTime,
  handleTimeChange,
  generateTimeOptions,
  inputTimeStyles,
}) {
  return (
    <>
      {/*// -----------------------------------------Reusable TimeSelector Component---------------------------------------------------*/}

      <Stack
        mt={{ base: -0.5, sm: -0.5, md: -1, lg: -0.5, xl: -0.5 }}
        mb={{ base: 4, sm: 4, md: 5, lg: 0, xl: 0 }}
      >
        <Flex
          fontSize={{ base: "md", sm: "md", md: "md", lg: "md", xl: "17px" }}
        >
          <label style={{ fontWeight: "500", color: "#D3D3D3" }}>{label}</label>
        </Flex>

        <Menu>
          {/* Menu Button for Time */}
          <MenuButton
            style={inputTimeStyles}
            border={"solid 1px #3F3F3F"}
            as={Button}
            _hover={{ border: "solid 1px #797979" }}
            _focus={{
              outline: "none",
              boxShadow: "none",
              border: "solid 1px #797979",
            }}
            fontWeight={selectedTime === null ? "medium" : "normal"}
            fontSize={{
              base: selectedTime === null ? "13px" : "14px",
              sm: selectedTime === null ? "14px" : "15px",
              md: selectedTime === null ? "14px" : "15px",
              lg: selectedTime === null ? "14px" : "15px",
              xl: selectedTime === null ? "15px" : "16px",
            }}
            color={selectedTime === null ? "#797979" : "white"}
            p={{ base: 6, lg: 6 }}
          >
            <Flex alignItems="center">
              <BsClock
                style={{
                  marginRight: "18px",
                  color: "#797979",
                  fontSize: 19,
                }}
              />
              {selectedTime || "00:00"}
            </Flex>
          </MenuButton>

          {/* Menu List for Time */}
          <MenuList
            bgColor="#141414"
            maxHeight="140px"
            minWidth={"78px"}
            overflowY="auto"
            textAlign="center"
            border={"solid 1px gray"}
            borderRadius={15}
            position={"absolute"}
            left={10}
            css={{
              cursor: "pointer",
              "::-webkit-scrollbar": {
                width: "4px",
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
          >
            {generateTimeOptions().map((time, index) => {
              const [formattedTime, ampm] = time.split(" ");
              return (
                <MenuItem
                  key={index}
                  bgColor="#141414"
                  textAlign="center"
                  color="whitesmoke"
                  fontSize={"13px"}
                  p={1}
                  borderRadius={0}
                  _hover={{
                    bgColor: "#3F3F3F",
                    outline: "none",
                    border: "none",
                  }}
                  _focus={{ outline: "none" }}
                  onClick={() => handleTimeChange(time)}
                >
                  <Box w="78px" color="whitesmoke">
                    <span style={{ padding: "6px" }}>{formattedTime}</span>
                    <span style={{ padding: "4px" }}>{ampm}</span>
                  </Box>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Stack>
    </>
  );
}

export default TimeSelector;
