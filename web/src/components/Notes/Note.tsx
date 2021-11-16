import React from "react";
import { Box } from "@chakra-ui/react";
import { parser } from "../../utils/parser/parser";

interface Props {
  note: string;
}

export const Note: React.FC<Props> = ({ note }) => {
  parser(note);

  return <Box>{note}</Box>;
};
