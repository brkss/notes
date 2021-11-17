// remove first letter from line
export const removeFirstCharInLine = (line: string) => {
  let ls = line.split("");
  ls.shift();
  return ls.join("");
};
