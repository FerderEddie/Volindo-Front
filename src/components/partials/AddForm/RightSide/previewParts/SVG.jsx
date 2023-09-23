// Importing Flex component from chakra-ui/react
import { Flex } from "@chakra-ui/react";

// Defining the SVG component which takes uploadedFiles and svgPosition as props
function SVG({ uploadedFiles, svgPosition }) {
  return (
    <>
      {/* Flex container to position the SVG element, with dynamic bottom and right positioning, and conditional top margin based on uploadedFiles length */}
      <Flex
        position="absolute"
        zIndex={1}
        bottom={svgPosition.bottom}
        right={svgPosition.right}
        mt={uploadedFiles.length > 0 ? 0 : 12}
      >
        <svg
          width="22"
          height="33"
          viewBox="0 0 24 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <svg
            width="24"
            height="35"
            viewBox="0 0 24 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9796 34.3483C11.0124 34.3483 10.2111 34.0236 9.57554 33.3741C8.96763 32.7246 8.66366 31.948 8.66366 31.0443C8.66366 30.1406 8.96763 29.364 9.57554 28.7145C10.2111 28.065 11.0124 27.7403 11.9796 27.7403C12.9467 27.7403 13.7481 28.065 14.3836 28.7145C15.0192 29.364 15.3369 30.1406 15.3369 31.0443C15.3369 31.948 15.0192 32.7246 14.3836 33.3741C13.7481 34.0236 12.9467 34.3483 11.9796 34.3483Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.11475 33.8245C8.39264 33.053 8.02599 32.1147 8.02599 31.0443C8.02599 29.9738 8.39264 29.0356 9.11475 28.2641L9.12454 28.2536C9.88937 27.472 10.8575 27.0885 11.9796 27.0885C13.1016 27.0885 14.0697 27.4721 14.8345 28.2537C15.5874 29.0231 15.9746 29.9646 15.9746 31.0443C15.9746 32.1239 15.5874 33.0654 14.8345 33.8349C14.0697 34.6165 13.1016 35 11.9796 35C10.8575 35 9.88947 34.6165 9.12465 33.8349L9.11475 33.8245ZM9.57554 33.3741C10.2111 34.0236 11.0124 34.3483 11.9796 34.3483C12.9467 34.3483 13.7481 34.0236 14.3836 33.3741C15.0192 32.7246 15.3369 31.948 15.3369 31.0443C15.3369 30.1406 15.0192 29.364 14.3836 28.7145C13.7481 28.065 12.9467 27.7403 11.9796 27.7403C11.0124 27.7403 10.2111 28.065 9.57554 28.7145C8.96763 29.364 8.66366 30.1406 8.66366 31.0443C8.66366 31.948 8.96763 32.7246 9.57554 33.3741Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17.6075C14.8834 17.6075 17.2208 15.2176 17.2208 12.2695C17.2208 9.32139 14.8834 6.93147 12 6.93147C9.11664 6.93147 6.77921 9.32139 6.77921 12.2695C6.77921 15.2176 9.11664 17.6075 12 17.6075ZM12 24.539C18.6274 24.539 24 19.0458 24 12.2695C24 5.49324 18.6274 0 12 0C5.37258 0 0 5.49324 0 12.2695C0 19.0458 5.37258 24.539 12 24.539Z"
              fill="white"
            />
          </svg>
        </svg>
      </Flex>
    </>
  );
}

export default SVG;
