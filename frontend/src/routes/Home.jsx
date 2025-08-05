import React from "react";
import { File, ArrowRight, Image } from "lucide-react";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="h-screen place-items-center grid">
        <div className="flex justify-center w-full flex-col items-center text-center md:w-[30rem] p-5">
          <div className="flex">
            <div className="bg-bggray p-4 rounded-[0.5rem] flex  place-items-center">
              <File color="#44bde2" size={40} />
            </div>
            <div className=" p-4 flex  place-items-center">
              <ArrowRight color="#56828f" size={25} />
            </div>
            <div className="bg-bggray p-4 rounded-[0.5rem] flex  place-items-center">
              <Image color="#44bde2" size={40} />
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-8 text-cianotxt md:text-[2.8rem]">
            Bem-vindo ao <span className="text-ciano">PEXIO</span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-lg">
            Converta seus arquivos PDF para PNG ou PNG para PDF de forma rápida
            e fácil
          </p>
          <Link
            to={"/converter"}
            className="bg-gradient-to-r from-ciano to-cianoclaro p-3 rounded-xl font-medium text-white w-full max-w-xs text-lg mt-8 hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-xl md:w-60"
          >
            Começar a converter
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
