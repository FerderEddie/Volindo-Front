// Import necessary components and modules
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  Suspense,
  lazy,
} from "react";
import { PreviewContext } from "../../../../context/PreviewProvider";
import { SocialContext } from "../../../../context/SocialProvider";
import { PreviewTextContext } from "../../../../context/PreviewTextProvider";

const PreviewSwiper = lazy(() => import("./previewParts/PreviewSwiper"));

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "../../Styles/swiper.css";

// import svg component
import SVG from "./previewParts/SVG";
/* import PreviewSwiper from "./previewParts/PreviewSwiper";
 */
function Preview() {
  // Get data from the context
  const { previewTextValue } = useContext(PreviewTextContext);
  const { uploadedFiles } = useContext(PreviewContext);
  const { socialValue } = useContext(SocialContext);

  // Refs for the Stack and Swiper components
  const stackRef = useRef(null);
  const swiperRef = useRef(null);

  // Position for SVG element and box height and State for autoplay delay
  const [svgPosition, setSvgPosition] = useState({
    bottom: "14%",
    right: "-25%",
  });
  const [boxHeight, setBoxHeight] = useState("150px");
  const [autoplayDelay, setAutoplayDelay] = useState(3000);

  // Effect to update SVG position and box height based on data
  useEffect(() => {
    if (!stackRef.current) return; // Exit early if the ref is not set

    const defaultPosition = {
      bottom: { base: "12%", lg: "14%" },
      right: { base: "-20%", sm:"-70px", md:"-130px", lg: "-10%", xl:"-44px" },
    };
    const defaultBoxHeight = "170px";

    const determineGroup = (length) => {
      if (length === 0) return "A";
      if (length >= 1 && length <= 10) return "B";
      if (length > 10) return null;
      return "default";
    };

    const commonPosition = {
      "Facebook - social networks": {
        bottom: { base: "8%", lg: "12%" },
        right: "8%",
      },
      "Instagram - social networks": {
        bottom: { base: "6%", lg: "10%" },
        right: "8%",
      },
      "TikTok - social networks": {
        bottom: { base: "4%", lg: "6%" },
        right: "8%",
      },
      default: defaultPosition,
    };

    const positionMappings = {
      A: {
        "Facebook - social networks": { bottom: "23%", right: "18%" },
        "Instagram - social networks": { bottom: "23%", right: "15%" },
        "TikTok - social networks": { bottom: "23%", right: "15%" },
        default: defaultPosition,
      },
      B: commonPosition,
    };

    const boxHeightMappings = {
      "Facebook - social networks": {
        base: "130px",
        sm: "150px",
        md: "160px",
        lg: "170px",
        xl: "180px",
      },
      "Instagram - social networks": {
        base: "230px",
        sm: "240px",
        md: "260px",
        lg: "290px",
        xl: "300px",
      },
      "TikTok - social networks": {
        base: "300px",
        sm: "330px",
        md: "400px",
        lg: "500px",
        xl: "550px",
      },
      default: defaultBoxHeight,
    };

    const group = determineGroup(uploadedFiles.length);
    const position =
      positionMappings[group][socialValue] ||
      positionMappings[group].default ||
      positionMappings.default;

    // Additional condition to adjust the SVG position based on uploadedFiles and socialValue
    if (
      (uploadedFiles.length === 0 && socialValue) ||
      (uploadedFiles.length > 0 && !socialValue)
    ) {
      position.bottom = { base: "10%", sm:"12%", md:"12%", lg: "14%", xl:"14%" };
      position.right = { base: "-20%", sm:"-75px", md:"-80%", lg: "-10%", xl:"-25%" };
    }

    const height = boxHeightMappings[socialValue] || boxHeightMappings.default;

    setSvgPosition(position);
    setBoxHeight(height);
  }, [socialValue, uploadedFiles]);

  // Function to handle slide change
  const handleSlideChange = () => {
    const currentSlide = swiperRef.current.swiper.realIndex;
    const currentSlideData = uploadedFiles[currentSlide];

    // Update autoplay delay based on slide type
    if (currentSlideData && currentSlideData.type.startsWith("video/")) {
      setAutoplayDelay(5000); // Delay for videos
    } else {
      setAutoplayDelay(3000); // Delay for images
    }
  };

  return (
    <>
      <Box maxWidth={"800px"}>
        {/* Heading */}
        <Heading
          fontSize={{
            base: "17px",
            sm: "17px",
            md: "lg",
            lg: "lg",
            xl: "19px",
          }}
          mb={{
            base: uploadedFiles.length > 0 && socialValue !== "" ? 0 : 0.5,
            sm: uploadedFiles.length > 0 && socialValue !== "" ? 1 : 1,
            md: uploadedFiles.length > 0 && socialValue !== "" ? 3 : 1.5,
            lg: uploadedFiles.length > 0 && socialValue !== "" ? 2 : 2,
            xl: uploadedFiles.length > 0 && socialValue !== "" ? 4 : 2,
          }}
          p={4}
          color={"white"}
          textAlign={"left"}
          letterSpacing={0.5}
          fontFamily={"Poppins"}
          pl={{ base: 4, sm: 5, md: 7, lg: 4, xl: 5 }}
        >
          Preview
        </Heading>

        {
          <Suspense>
            <PreviewSwiper
              uploadedFiles={uploadedFiles}
              socialValue={socialValue}
              boxHeight={boxHeight}
              autoplayDelay={autoplayDelay}
              handleSlideChange={handleSlideChange}
              swiperRef={swiperRef}
              svgPosition={svgPosition}
              stackRef={stackRef}
              SVG={SVG}
            />
          </Suspense>
        }

        {/* Text below the preview */}
        <Stack
          align={"center"}
          pt={{
            base: previewTextValue !== "" ? 6 : 4,
            lg: previewTextValue !== "" ? 7 : 4,
          }}
          pb={{
            base: previewTextValue !== "" ? 4 : 2,
            lg: previewTextValue !== "" ? 4 : 1,
          }}
          mt={{
            base: previewTextValue !== "" ? 2 : 1,
            lg: previewTextValue !== "" ? 2 : 0,
          }}
          mb={{
            base: previewTextValue !== "" ? 1 : 1,
            lg: previewTextValue !== "" ? 0 : 0,
          }}
        >
          <Text
            fontSize={{
              base: "13.5px",
              sm: "13.5px",
              md: "15px",
              lg: "sm",
              xl: "15px",
            }}
            my={{base: 0 ,lg: 1}}
            color="#7f827f"
            letterSpacing={0.4}
            fontFamily="Poppins"
            w={"88%"}
            textAlign={"left"}
            css={{
              whiteSpace: "pre-line",
              overflowY: "auto",
              maxHeight: "200px",
              paddingRight: "10px",
              "::-webkit-scrollbar": {
                width: "5px",
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
            {previewTextValue.trim() === ""
              ? "Your Text For Advertising"
              : previewTextValue}
          </Text>
        </Stack>
      </Box>
    </>
  );
}

export default Preview;
