import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      bg="white"
      color="black"
      borderRadius="md"
      overflow="hidden"
      boxShadow="sm"
      w="100%"
      maxW="320px"
      mx="auto"
    >
      <Image src={imageSrc} alt={title} w="100%" h="220px" objectFit="cover" />
      <VStack alignItems="flex-start" spacing={3} p={4} minH="150px">
        <Heading as="h3" size="md" lineHeight="1.2">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600" lineHeight="1.6">
          {description}
        </Text>
        <HStack spacing={2} pt={1} color="gray.800">
          <Text fontSize="sm" fontWeight="medium">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
