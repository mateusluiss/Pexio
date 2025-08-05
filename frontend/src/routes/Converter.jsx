import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import FileUploader from "../components/FileUploader.jsx";

function Converter() {
  return (
    <>
      <div class="h-screen place-items-center justify-center flex flex-col">
        <div class=" w-[38rem] flex gap-4">
          <Link
            to="/"
            class="flex rounded-[0.5rem] justify-center items-center pl-3 pr-3 gap-2 hover:bg-cianobranco transition-all ease-in-out duration-200"
          >
            <ArrowLeft color="#004766" size={15} />
            <span class="text-cianotxt font-semibold text-xs">Voltar</span>
          </Link>

          <h1 class="text-cianotxt font-bold text-3xl">PEXIO</h1>
        </div>
        <div class="text-cianotxt mt-7 flex border-cianobranco shadow-xs border h-[28rem] w-[38rem] rounded-xl flex-col p-8">
          <h2 class="font-medium">Escolha o tipo de conversão:</h2>
          <ul class="grid grid-cols-2 gap-2 mt-5 ">
            <li class="col-start-1 border border-gray-300 rounded p-3 flex gap-2">
              <label
                class="cursor-pointer flex gap-2 font-semibold text-xs"
                for="pdf-png"
              >
                <input
                  type="radio"
                  id="pdf-png"
                  class="cursor-pointer text-ciano"
                  name="conversion"
                ></input>
                PDF → PNG
              </label>
            </li>

            <li class="col-start-2 border border-gray-300 rounded p-3 flex gap-2">
              <label
                class="cursor-pointer flex gap-2 font-semibold text-xs"
                for="png-pdf"
              >
                <input
                  type="radio"
                  id="png-pdf"
                  class="cursor-pointer"
                  name="conversion"
                ></input>
                PNG → PDF
              </label>
            </li>
          </ul>

          <h2 class="font-medium mt-8">Selecione seu arquivo:</h2>
          <FileUploader />
          <button class="bg-gradient-to-r from-ciano to-cianoclaro font-bold w-full text-white p-3 rounded-xl">
            Converter PDF para PNG
          </button>
        </div>
      </div>
    </>
  );
}

export default Converter;
