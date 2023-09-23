// Import necessary components and modules
import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// import react player
import ReactPlayer from "react-player";

function PreviewSwiper({
  uploadedFiles,
  socialValue,
  boxHeight,
  autoplayDelay,
  handleSlideChange,
  swiperRef,
  svgPosition,
  stackRef,
  SVG,
}) {
  return (
    <>
      {/* Main container for the preview */}
      <Flex
        w={{ base: "90%" }}
        bgColor={"#202020"}
        m={"0 auto"}
        borderRadius={10}
      >
        <Stack
          position={"relative"}
          ref={stackRef}
          alignItems="center"
          justifyContent="center"
          my={{ base: 0, md: -2 }}
          fontSize={{ base: "sm", md: "md" }}
          color="#7f827f"
          textAlign="center"
          letterSpacing={0.4}
          fontFamily="Poppins"
          m={"0 auto"}
        >
          {uploadedFiles.length > 0 && socialValue !== "" ? (
            <Box
              w={{
                base: "73vw",
                sm: "68vw",
                md: "68vw",
                lg: "22.4vw",
                xl: "20.4vw",
              }}
            >
              {/* Swiper component */}
              <Swiper
                w="100%"
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={5}
                slidesPerView={1}
                speed={1000}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                onSlideChange={handleSlideChange}
                navigation
                loop
                pagination={{ clickable: true }}
                ref={swiperRef}
                className="custom-swiper"
              >
                {/* Mapping through uploadedFiles */}
                {uploadedFiles.map((file, index) => {
                  const isVideo = file.type && file.type.startsWith("video/");
                  const fileUrl = isVideo ? `${file.file}` : file.file;

                  return (
                    <SwiperSlide key={index} autoPlay={{ delay: 2000 }}>
                      {/* Render video element using ReactPlayer  */}
                      {isVideo ? (
                        <Box h={boxHeight} width="90%" m={"0 auto"} cursor={"pointer"}>
                          <ReactPlayer
                            url={fileUrl}
                            controls
                            width="100%"
                            height="95%"
                            onEnded={() => {
                              swiperRef.current.swiper.slideNext();
                            }}
                          />
                        </Box>
                      ) : (
                        /* Render image element  */
                        <Box
                          w={"100%"}
                          h={boxHeight}
                          backgroundSize="cover"
                          backgroundPosition="center"
                          backgroundImage={`url(${fileUrl})`}
                        />
                      )}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          ) : (
            /* Placeholder text for no preview */
            <Text
              pt={{
                base: "60px",
                sm: "60px",
                md: "80px",
                lg: "65px",
                xl: "80px",
              }}
              pb={{
                base: "10px",
                sm: "10px",
                md: "40px",
                lg: "20px",
                xl: "25px",
              }}
              mb={12}
              fontSize={{ base: "xs", sm: "sm", md: "md", lg: "sm", xl: "md" }}
              textTransform={"capitalize"}
            >
              preview of uploaded <br /> photos and videos
            </Text>
          )}

          {/* SVG component */}
          {<SVG uploadedFiles={uploadedFiles} svgPosition={svgPosition} />}
        </Stack>
      </Flex>
    </>
  );
}

export default React.memo(PreviewSwiper);
