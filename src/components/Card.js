import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing={4}
      marginY={5}
      rounded={10}
      bgColor={"white"}
      textColor={"black"}>
      <Image src={imageSrc} alt={title} rounded={10} />
      <VStack alignItems={"start"} padding={5}>
        <Heading size={"md"} as={"h2"}>
          {title}
        </Heading>
        <Text fontSize={"md"}>{description}</Text>
        <a href="#">
          <HStack spacing={2} align={"end"} color={"blackAlpha.700"}>
            <Heading size={"sm"}>See More</Heading>
            <FontAwesomeIcon icon={faArrowRight} size={"1x"} />
          </HStack>
        </a>
      </VStack>
    </VStack>
  );
};

export default Card;
