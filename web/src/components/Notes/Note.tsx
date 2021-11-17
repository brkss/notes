import React from "react";
import { Box } from "@chakra-ui/react";
import { parser } from "../../utils/parser/parser";

interface Props {
  note: string;
}

export const Note: React.FC<Props> = ({ note }) => {
  const [document, SetDocument] = React.useState(parser(note));

  return (
    <>
      {document.map((cp, key) => (
        <cp.component key={key} txt={cp.content} />
      ))}
    </>
  );
};