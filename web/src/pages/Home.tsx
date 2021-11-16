import React from "react";
import { Box, Heading, Input, Center } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { readFile } from "../utils/parser/utils";

export const Home: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => {
    //console.log("files ++> ", file);
    //console.log("file ctn => ", readFile(file));
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    );
  });

  return (
    <section className="container">
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
