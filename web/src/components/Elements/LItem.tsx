import React from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";

interface Props {
  txt: string;
}

export const LItem: React.FC<Props> = ({ txt }) => {
  return (
    <UnorderedList ml={"40px"}>
      <ListItem>{txt}</ListItem>
    </UnorderedList>
  );
};
