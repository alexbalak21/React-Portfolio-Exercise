import React from "react";
import { Box, Heading, Image, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar_normal.png";

const greeting = "Hello, I am Alex!";
const bio1 = "A Full-Stack developer";
const bio2 = "specialized in React & Spring Boot";

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
      <Heading as="h1" size="2xl">{greeting}</Heading>
      <Heading as="h2" size="md" fontWeight="normal">{bio1}</Heading>
      <Heading as="h3" size="sm" fontWeight="normal">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
