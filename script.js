import { removeBackground } from "https://esm.sh/@bg0/browser";

const fileInput   = document.getElementById("fileInput");
const dropZone    = document.getElementById("dropZone");
const startBtn    = document.getElementById("startBtn");
const resultBox   = document.getElementById("result");
const imgOriginal = document.getElementById("imgOriginal");
const imgResult   = document.getElementById("imgResult");
const downloadBtn = document.getElementById("downloadBtn");

let selectedFile = null;

document.getElementById("year").textContent = new Date().getFullYear();

function handleFile(file) {
  if (!file || !file.type.startsWith("image/")) return;
  selectedFile = file;
  imgOriginal.src = URL.createObjectURL(file);
  resultBox.hidden = true;
  startBtn.disabled = false;
}

fileInput.addEventListener("change", (e) => handleFile(e.target.files[0]));

["dragenter", "dragover"].forEach((evt) =>
  dropZone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropZone.classList.add("is-dragover");
  })
);
["dragleave", "drop"].forEach((evt) =>
  dropZone.addEventListener(evt, (e) => {
    e.preventDefault();
    dropZone.classList.remove("is-dragover");
  })
);
dropZone.addEventListener("drop", (e) => handleFile(e.dataTransfer.files[0]));

startBtn.addEventListener("click", async () => {
  if (!selectedFile) return;
  startBtn.disabled = true;
  startBtn.textContent = "Processing…";

  try {
    const result = await removeBackground(selectedFile, {
      quality: "quality",
      onProgress: ({ progress, message }) => {
        if (typeof progress === "number") {
          const percent = Math.round(progress * 100);
          startBtn.textContent = `Processing… ${percent}%`;
        } else if (message) {
          startBtn.textContent = message;
        }
      },
    });

    const url = URL.createObjectURL(result.blob);
    imgResult.src = url;
    downloadBtn.href = url;
    downloadBtn.download = "bgcut.png";
    resultBox.hidden = false;
  } catch (err) {
    console.error(err);
    alert("Processing error: " + (err?.message || "Unknown error"));
  } finally {
    startBtn.disabled = false;
    startBtn.textContent = "Remove Background";
  }
});