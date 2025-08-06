import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, File } from "lucide-react";

export default function FileUploader({
  formato,
  onArquivoSelecionado,
  arquivoSelecionado,
}) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log("Arquivos:", acceptedFiles);
      onArquivoSelecionado(acceptedFiles);
      // Aqui você pode salvar no estado, fazer upload, etc.
    },
    [onArquivoSelecionado]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-1 border-dashed rounded-xl p-8 cursor-pointer transition flex place-items-center flex-col mt-5 ${
        isDragActive ? "bg-blue-100 border-verde" : "bg-white border-gray-300"
      }`}
    >
      {arquivoSelecionado ? (
        <File size={45} color="#56828f" />
      ) : (
        <Upload size={45} color="#56828f" />
      )}

      <input {...getInputProps()} />
      {arquivoSelecionado ? (
        <div className="text-center">
          <p className="font-medium text-sm mt-3">{arquivoSelecionado.name}</p>
          <p className="text-xs text-gray-500 mt-2">
            Clique para escolher outro arquivo
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="font-medium text-sm mt-3">
            Clique para escolher um arquivo
          </p>
          <p className="text-xs text-gray-500 mt-2">ou arraste e solte aqui</p>
          <p className="text-xs text-gray-500 mt-1">
            Formato aceito: {formato}
          </p>
        </div>
      )}
    </div>
  );
}
