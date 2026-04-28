import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
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
    <VStack spacing={4} alignItems="center">
      <Avatar src={avatar} name={greeting} size="3xl" />
      <Heading as="h1" size="2xl">{greeting}</Heading>
      <Heading as="h2" size="md" fontWeight="normal">{bio1}</Heading>
      <Heading as="h3" size="sm" fontWeight="normal">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
