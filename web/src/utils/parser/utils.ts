export const readFile = (file: any) => {
  let reader = new FileReader();

  reader.addEventListener("loadend", function (e) {
    const content = e.target?.result;
    console.log("content -> ", content);
    return content;
  });

  reader.readAsBinaryString(file);
};
/*
const getContent = (reader: FileReader) => {
  return new Promise((resolve, reject) => {
    reader.addEventListener('load', () => {
    
    })
  })
}*/
