import React from "react";
import { Box, Grid, GridItem, Text, Button } from "@chakra-ui/react";

export const Navigation: React.FC = () => {
  return (
    <Box p={"15px"} bg={"#000"} top={"0"} w={"100%"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={6}>
          <Text>Test</Text>
        </GridItem>
        <GridItem colSpan={6} textAlign={"right"}>
          <Button size={"sm"} variant={"link"} color={"white"}>
            Documentation
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};
