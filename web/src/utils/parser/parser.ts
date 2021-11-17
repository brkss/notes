import React from "react";
import { Title, PText, Space, Line } from "../../components";
import { removeFirstCharInLine } from "./utils";

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
      components.push({
        component: Title,
        content: removeFirstCharInLine(line),
      });
    else if (line == "/sp")
      components.push({
        content: "",
        component: Space,
      });
    else if (line == "//")
      components.push({
        content: "",
        component: Line,
      });
    else components.push({ component: PText, content: line });
  }
  return components;
};
