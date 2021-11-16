interface Rule {
  pattren: string;
  component: any;
}

const rules: Rule[] = [
  // title
  {
    pattren: "#",
    component: null,
  },
];

export const parser = (note: string) => {
  const pn = note.split("\n");
  console.log("pn -> ", pn);
};
