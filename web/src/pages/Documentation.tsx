import React from "react";
import { Box, Container, Heading, Text, Code } from "@chakra-ui/react";

export const Documentation: React.FC = () => {
  return (
    <Container pt={"20px"} maxW="container.sm">
      <Box>
        <Heading fontSize={"24px"}>
          Write notes in vim and parse them in the browser ✨
        </Heading>
        <br />
        <Heading fontSize={"20px"}>Titles</Heading>
        <Text mt={"10px"}>To write a title start your line with '#'</Text>
      </Box>
    </Container>
  );
};
