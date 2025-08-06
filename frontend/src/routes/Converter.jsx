import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import FileUploader from "../components/FileUploader.jsx";
import { useState } from "react";

function Converter() {
  const [formatoaceito, setFormatoaceito] = useState("PDF");
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);

  const handleChange = (event) => {
    setFormatoaceito(event.target.value);
    setArquivoSelecionado(null);
  };

  const handleArquivoSelecionado = (files) => {
    if (files.length > 0) {
      setArquivoSelecionado(files);
    } else {
      setArquivoSelecionado(null);
    }
  };

  function enviarArquivosServidor(arquivos) {
    if (!arquivos || arquivos.length === 0) {
      console.log("Nenhum arquivo para enviar");
      return;
    }

    const formData = new FormData();
    arquivos.forEach((file, i) => {
      formData.append(`file${i}`, file);
    });

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Resposta do servidor: ", data);
      })
      .catch((err) => {
        console.log("Erro ao enviar", err);
      });
  }

  return (
    <>
      <div className="h-screen place-items-center justify-center flex flex-col w-full">
        <div>
          <div className="flex gap-4 mx-auto md:w-[38rem]">
            <Link
              to="/"
              className="flex rounded-[0.5rem] justify-center items-center pl-3 pr-3 gap-2 hover:bg-cianobranco transition-all ease-in-out duration-200"
            >
              <ArrowLeft color="#004766" size={15} />
              <span className="text-cianotxt font-semibold text-xs">
                Voltar
              </span>
            </Link>
            <h1 className="text-cianotxt font-bold text-3xl">PEXIO</h1>
          </div>
          <div className="mx-auto mt-5 text-cianotxt flex border-cianobranco shadow-xs border max-h-fit rounded-xl flex-col p-5 md:h-[31rem] md:mt-7 md:w-[38rem] md:p-8">
            <h2 className="font-medium">Escolha o tipo de conversão:</h2>
            <ul className="grid grid-cols-2 gap-2 mt-5 ">
              <li className="col-start-1 border border-gray-300 rounded p-3 flex gap-2">
                <label
                  className="cursor-pointer flex gap-2 font-semibold text-xs"
                  htmlFor="pdf-png"
                >
                  <input
                    type="radio"
                    id="pdf-png"
                    className="cursor-pointer text-ciano"
                    name="conversion"
                    value="PDF"
                    onChange={handleChange}
                    checked={formatoaceito === "PDF"}
                  ></input>
                  PDF → PNG
                </label>
              </li>
              <li className="col-start-2 border border-gray-300 rounded p-3 flex gap-2">
                <label
                  className="cursor-pointer flex gap-2 font-semibold text-xs"
                  htmlFor="png-pdf"
                >
                  <input
                    type="radio"
                    id="png-pdf"
                    className="cursor-pointer"
                    name="conversion"
                    value="PNG"
                    onChange={handleChange}
                    checked={formatoaceito === "PNG"}
                  ></input>
                  PNG → PDF
                </label>
              </li>
            </ul>
            <h2 className="font-medium mt-8">Selecione seu arquivo:</h2>
            <FileUploader
              formato={formatoaceito}
              onArquivoSelecionado={handleArquivoSelecionado}
              arquivoSelecionado={arquivoSelecionado}
            />
            <button
              disabled={!arquivoSelecionado}
              className={`bg-gradient-to-r from-ciano to-cianoclaro font-bold w-full text-white p-3 rounded-xl mt-7 ${
                !arquivoSelecionado
                  ? "opacity-50 cursor-default hover:"
                  : "cursor-pointer hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300"
              }`}
              onClick={() => enviarArquivosServidor(arquivoSelecionado)}
            >
              Converter {formatoaceito} para{" "}
              {formatoaceito === "PDF" ? "PNG" : "PDF"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Converter;
