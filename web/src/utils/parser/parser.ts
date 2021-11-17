import React from "react";
import { Title, PText, Space, Line } from "../../components";
import { removeFirstCharInLine, checkForTabs } from "./utils";

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
  for (let i = 0; i < pn.length; i++) {
    let line = pn[i];
    // check if title
    console.log("line -> ", line.indexOf("\t"));
    if (line.indexOf("#") == 0)
      components.push({
        component: Title,
        content: removeFirstCharInLine(line),
      });
    // check if list item
    else if (checkForTabs(line))
      components.push({
        content: "none !",
        component: PText,
      });
    // check if space
    else if (line == "/sp")
      components.push({
        content: "",
        component: Space,
      });
    // check if line
    else if (line == "//")
      components.push({
        content: "",
        component: Line,
      });
    // check if simple paragraph !
    else components.push({ component: PText, content: line });
  }
  return components;
};
