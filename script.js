const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");
const images = document.querySelectorAll(".gallery-img");

// Abrir modal ao clicar em uma imagem
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.alt;
  });
});

// Fechar modal ao clicar no X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
