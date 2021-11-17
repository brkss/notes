import React from "react";
import { Box, Heading, Input, Center } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { Note } from "../components";

export const Home: React.FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [content, SetContent] = React.useState<any>(null);

  const files = acceptedFiles.map((file: any) => {
    let reader = new FileReader();

    reader.addEventListener("loadend", function (e) {
      SetContent(e.target?.result);
    });
    console.log("content => ", content);
    reader.readAsBinaryString(file);
  });

  return (
    <>
      {!content ? (
        <section className="container">
          <Center
            bg={"black"}
            height={"100vh"}
            color={"white"}
            {...getRootProps({ className: "dropzone" })}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop your note here, or click to select manually</p>
          </Center>
        </section>
      ) : (
        <Note note={content} />
      )}
    </>
  );
};
