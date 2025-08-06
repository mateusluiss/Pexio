const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const multer = require("multer");
const fs = require("fs");
const sharp = require("sharp");
const PDFDocument = require("pdfkit");
const { PDFDocument: PDFLibDocument } = require("pdf-lib");
const path = require("path");
const { fromBuffer } = require("pdf2pic");

const caminhoOutput = path.join(__dirname, "output");
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

async function converter(formato, arquivos, res) {
  if (formato === "application/pdf") {
    const pdfDoc = await PDFLibDocument.load(arquivos[0].buffer);
    const totalPages = pdfDoc.getPageCount();

    console.log(`Total de páginas: ${totalPages}`);

    const buffer = arquivos[0].buffer;
    const options = {
      density: 100,
      saveFilename: "pagina",
      savePath: "./output",
      format: "png",
      width: 800,
      height: 1000,
    };
  }
}

app.post("/upload", upload.any(), (req, res) => {
  console.log("Arquivos recebidos:", req.files);

  const arquivos = req.files;
  const formato = arquivos[0].mimetype;

  converter(formato, arquivos, res);

  // if (formato === "application/pdf") {
  // }
});

app.get("/upload", (req, res) => {});

app.listen(port, () => console.log("Rodando na porta", port));
