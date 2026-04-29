import React from "react";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.png";

const greeting = "Hello, I am Pete!";
const bio1 = "A Frontend developer";
const bio2 = "Specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} alignItems="center" mt={20}>
      <Box
        boxSize="22rem"
        borderRadius="full"
        overflow="hidden"
        bg="whiteAlpha.200"
      >
        <Image
          src={avatar}
          alt={greeting}
          w="100%"
          h="100%"
          objectFit="contain"
          objectPosition="center"
        />
      </Box>
      <hr />
      <Heading as="h1" size="xl">{greeting}</Heading>
      <hr />
      <hr />
      <Heading as="h2" size="2xl" fontWeight="normal">{bio1}</Heading>
      <Heading as="h3" size="2xl" fontWeight="normal">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
