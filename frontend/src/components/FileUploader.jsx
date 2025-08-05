import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

export default function FileUploader() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Arquivos:", acceptedFiles);
    // Aqui você pode salvar no estado, fazer upload, etc.
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`flex flex-col place-items-center border-1 border-dashed h-full rounded-xl p-8 text-center cursor-pointer transition ${
        isDragActive ? "bg-blue-100 border-ciano" : "bg-white border-gray-300"
      }`}
    >
      <Upload />
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Clique para escolher um arquivo</p>
      ) : (
        <p>ou arraste e solte aqui</p>
      )}
    </div>
  );
}
