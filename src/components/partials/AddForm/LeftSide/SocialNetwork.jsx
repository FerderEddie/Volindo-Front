// Import required components and hooks from Chakra UI and React
import React, { useState, useContext } from "react";
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Text,
  Stack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { SocialContext } from "../../../../context/SocialProvider";

const styles = [
  // Styles for the main heading
  {
    color: "white",
    textAlign: "left",
    fontSize: { base: "17px", sm: "md", md: "lg", lg: "lg", xl: "19px" },
    letterSpacing: 0.5,
    fontFamily: "Poppins",
  },
  // Styles for the subheading
  {
    my: 1,
    color: "#7f827f",
    textAlign: "left",
    fontSize: { base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" },
    letterSpacing: 0.5,
    fontFamily: "Poppins",
  },
];

function SocialNetwork() {
  // Options for the social networks
  const options = [
    { label: "TikTok - social networks", value: "tiktok", icon: faTiktok },
    {
      label: "Instagram - social networks",
      value: "instagram",
      icon: faInstagram,
    },
    {
      label: "Facebook - social networks",
      value: "facebook",
      icon: faFacebook,
    },
  ];

  // social context value
  const { socialValue, setSocialValue } = useContext(SocialContext);

  // State to handle the menu button toggle
  const [menuButtonValue, setMenuButtonValue] = useState(false);

  // Function to handle the change when a social network is selected
  const handleChange = (selectedLabel) => {
    setSocialValue(selectedLabel);
    setMenuButtonValue(false);
  };

  // Function to handle the menu button toggle
  const handleToggle = () => {
    setMenuButtonValue((prevState) => !prevState);
  };

  // Get the icon for the selected social network based on the selectedValue
  const icon = options.find((option) => option.label === socialValue)?.icon;

  return (
    <>
      <Stack
        p={4}
        gap={2}
        textAlign={{ base: "center", md: "left" }}
        pb={{ base: 5, lg: 5 }}
      >
        {/* Main Heading */}
        <Heading {...styles[0]}>Social Networks</Heading>

        {/* Subheading */}
        <Text {...styles[1]}>
          select your social networks, where you want to advertise
        </Text>

        {/* Dropdown Menu */}
        <Menu>
          {/* Menu Button */}
          <MenuButton
            w={{ base: "100%", sm: "86%", md: "70%", lg: "80%", xl: "60%" }}
            m={{ base: "0 auto", sm: "0", md: "0", lg: "0", xl: "0" }}
            fontSize={{ base: "xs", sm: "xs", md: "sm", lg: "sm", xl: "15px" }}
            border={"solid 1px #3F3F3F"}
            p={{ base: 2.5, md: 3 }}
            
            style={{
              borderRadius: 22,
              marginTop: 5,
              letterSpacing: 0.5,
              paddingLeft: socialValue !== "" ? "0.7em" : "1.5em",
              color: "white",
              fontFamily: "Poppins",
              backgroundColor: "#202020",
            }}
            _hover={{ border: "solid 1px #797979" }}
            _focus={{
              outline: "none",
              boxShadow: "none",
              border: "solid 1px #797979",
            }}
            onClick={handleToggle}
          >
            <Flex alignItems="center">
              {/* Show the icon for the selected social network */}
              {socialValue && (
                <Box
                  as={FontAwesomeIcon}
                  icon={icon}
                  marginRight={{ base: "10px", md: "20px" }}
                  marginLeft={{ base: "14px", md: "16px" }}
                  fontSize={{ base: "18px", md: "20px" }}
                />
              )}

              {/* Show the selected social network or default text */}
              {socialValue || "Select Social Network"}

              {/* Show the chevron icon based on the menu button toggle */}
              {menuButtonValue ? (
                <Box
                  as={GoChevronUp}
                  marginLeft="auto"
                  mr={{ base: 1, lg: 4 }}
                  color={"gray"}
                  fontSize={{ base: "22px", lg: "20px" }}
                />
              ) : (
                <Box
                  as={GoChevronDown}
                  marginLeft="auto"
                  mr={{ base: 1, lg: 4 }}
                  color={"gray"}
                  fontSize={{ base: "22px", lg: "20px" }}
                />
              )}
            </Flex>
          </MenuButton>

          {/* Menu List */}
          <MenuList
            w={{
              base: "71vw",
              sm: "60vw",
              md: "48vw",
              lg: "37.5vw",
              xl: "30vw",
            }}
            py={{ base: 3, lg: 3 }}
            style={{
              color: "white",
              marginTop: 5,
              borderRadius: "25px",
              backgroundColor: "#202020",
              border: "solid 1px gray",
            }}
          >
            {/* Render each social network option */}
            {options.map((option) => (
              <MenuItem
                fontSize={{
                  base: "xs",
                  sm: "xs",
                  md: "sm",
                  lg: "sm",
                  xl: "15px",
                }}
                p={{ base: 2.5, md: 2 }}
                pl={{ md: 5 }}
                py={2}
                style={{
                  backgroundColor: "transparent",
                  color: "#797979",
                  border: "none",
                  borderRadius: "unset",
                  boxShadow: "none",
                  outline: "none",
                }}
                key={option.value}
                onClick={() => handleChange(option.label)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#141414";
                  e.target.style.borderRadius = "20px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                {/* Show the icon for each social network option */}
                <Flex align="center">
                  {option.icon && (
                    <Box
                      mr={{ base: "16px", md: "20px" }}
                      ml={{ base: "10px", md: "6px" }}
                    >
                      <Icon
                        as={FontAwesomeIcon}
                        icon={option.icon}
                        fontSize={{ base: "18px", md: "20px" }}
                      />
                    </Box>
                  )}
                </Flex>

                {/* Show the label for each social network option */}
                {option.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>
    </>
  );
}

export default SocialNetwork;
