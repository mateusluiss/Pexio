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
      className={`border-1 border-dashed h-full rounded-xl p-8 cursor-pointer transition flex place-items-center flex-col ${
        isDragActive ? "bg-blue-100 border-verde" : "bg-white border-gray-300"
      }`}
    >
      <Upload size={45} color="#56828f" />
      <input {...getInputProps()} />
      <p class="font-medium text-sm mt-3">Clique para escolher um arquivo</p>
      <p class="text-xs text-gray-500 mt-2">ou arraste e solte aqui</p>
      <p class="text-xs text-gray-500 mt-1">Formato aceito: PDF</p>
    </div>
  );
}
