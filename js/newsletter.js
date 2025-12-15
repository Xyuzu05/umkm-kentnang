// newsletter.js
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("langganan");
  if (!checkbox) return;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      alert("Terima kasih! Anda akan menerima promo terbaru Kentang Goreng Kriuk.");
    } else {
      alert("Langganan newsletter dibatalkan.");
    }
  });
});
