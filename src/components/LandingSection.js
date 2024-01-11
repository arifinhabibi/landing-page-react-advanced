import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack direction={"row"}>
      <Avatar src="https://i.pravatar.cc/150?img=7" size="2px" />
      <Heading size={"md"} my={48}>{greeting}</Heading>
      <Heading size={"4xl"}>
        {bio1}
      </Heading>
      <Heading size={"3xl"} noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
