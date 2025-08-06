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

app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });

async function converter(formato, arquivos, res) {
  if (formato === "application/pdf") {
    const pdfDoc = await PDFLibDocument.load(arquivos[0].buffer);
    const totalPages = pdfDoc.getPageCount();

    console.log(`Total de páginas: ${totalPages}`);
  }
}

app.post("/upload", upload.any(), (req, res) => {
  console.log("Arquivos recebidos:", req.files);
  res.json({ message: "Upload bem-sucedido!", total: req.files.length });

  const arquivos = req.files;
  const formato = arquivos[0].mimetype;

  converter(formato, arquivos, res);

  if (formato === "application/pdf") {
  }
});

app.get("/upload", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("Rodando na porta", port));
