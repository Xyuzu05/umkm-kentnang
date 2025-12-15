// form.js
import { formatPesan } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formKontak");
  if (!form) return;

  const inputNama = document.getElementById("nama");
  const inputEmail = document.getElementById("email");
  const selectKategori = document.getElementById("kategori");
  const textareaPesan = document.getElementById("pesan");

  const errNama = document.getElementById("errorNama");
  const errEmail = document.getElementById("errorEmail");
  const errKategori = document.getElementById("errorKategori");
  const errPesan = document.getElementById("errorPesan");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // reset pesan error
    errNama.textContent = "";
    errEmail.textContent = "";
    errKategori.textContent = "";
    errPesan.textContent = "";
    errorMsg.textContent = "";

    let valid = true;

    if (inputNama.value.trim() === "") {
      errNama.textContent = "Nama wajib diisi.";
      valid = false;
    }

    if (inputEmail.value.trim() === "") {
      errEmail.textContent = "Email wajib diisi.";
      valid = false;
    } else if (!inputEmail.value.includes("@")) {
      errEmail.textContent = "Format email tidak valid.";
      valid = false;
    }

    if (selectKategori.value === "") {
      errKategori.textContent = "Silakan pilih kategori pesan.";
      valid = false;
    }

    if (textareaPesan.value.trim() === "") {
      errPesan.textContent = "Pesan tidak boleh kosong.";
      valid = false;
    }

    if (!valid) {
      errorMsg.textContent = "Silakan perbaiki data yang belum benar.";
      return;
    }

    const hasil = formatPesan(
      inputNama.value.trim(),
      selectKategori.value,
      textareaPesan.value.trim()
    );

    alert("Terima kasih, pesan Anda terkirim!\n\n" + hasil);

    // Handle newsletter subscription
    const checkboxLangganan = document.getElementById("langganan");
    if (checkboxLangganan && checkboxLangganan.checked) {
      alert("Terima kasih! Anda akan menerima promo terbaru Kentang Goreng Kriuk.");
    }

    form.reset();
  });
});
