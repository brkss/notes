import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  txt: string;
}

export const PText: React.FC<Props> = ({ txt }) => {
  return <Text> {txt} </Text>;
};
