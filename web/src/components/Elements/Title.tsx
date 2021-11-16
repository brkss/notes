import React from "react";
import { Heading } from "@chakra-ui/react";

interface Props {
  txt: string;
}

export const Title: React.FC<Props> = ({ txt }) => {
  return <Heading>{txt}</Heading>;
};
