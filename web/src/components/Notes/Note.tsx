import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { parser } from "../../utils/parser/parser";

interface Props {
  note: string;
}

export const Note: React.FC<Props> = ({ note }) => {
  const [document, SetDocument] = React.useState(parser(note));

  return (
    <Container maxW="container.sm">
      <Box mt={"0px"} p={"20px"}>
        {document.map((cp, key) => (
          <cp.component key={key} txt={cp.content} />
        ))}
      </Box>
    </Container>
  );
};
