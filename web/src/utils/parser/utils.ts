// remove first letter from line
export const removeFirstCharInLine = (line: string) => {
  let ls = line.split("");
  ls.shift();
  return ls.join("");
};

// check if string contains tabs !
export const checkForTabs = (line: string): boolean => {
  const ls = line.split("");
  let count = 0;
  for (let c of ls) {
    if (c == " ") count++;
    if (count > 3) return true;
    else if (c != " ") return false;
  }
  return false;
};
