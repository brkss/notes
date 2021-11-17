import React from "react";
import { Title, PText } from "../../components";

interface IRule {
  pattren: string;
  component: any;
}

interface IDoc {
  component: any;
  content: string;
}

const rules: IRule[] = [
  // title
  {
    pattren: "#",
    component: Title,
  },
  // simple text
  {
    pattren: "",
    component: PText,
  },
];

export const parser = (note: string) => {
  const pn = note.split("\n");
  const components: IDoc[] = [];
  for (let line of pn) {
    // check if title
    if (line.split("")[0] == "#")
      components.push({ component: Title, content: line });
  }
  return components;
};
