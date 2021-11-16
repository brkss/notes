import React from "react";
import { Box, Heading, Input, Center } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { readFile } from "../utils/parser/utils";

export const Home: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [content, SetContent] = React.useState<any>();

  const files = acceptedFiles.map((file: any) => {
    let reader = new FileReader();

    reader.addEventListener("loadend", function (e) {
      SetContent(e.target?.result);
    });
    reader.readAsBinaryString(file);

    console.log("content -> ", content);
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  return (
    <section className="container">
      <Box>{content}</Box>
      <Center
        bg={"black"}
        height={"100vh"}
        color={"white"}
        {...getRootProps({ className: "dropzone" })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Center>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};
