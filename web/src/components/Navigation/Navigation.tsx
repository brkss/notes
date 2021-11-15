import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

export const Navigation: React.FC = () => {
  return (
    <Box bg={"#ececec"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={6}>
          <Text>Test</Text>
        </GridItem>
        <GridItem colSpan={6}>
          <Text>Test</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
