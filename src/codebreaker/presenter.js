const numero = document.querySelector("#numero");
const form = document.querySelector("#form-adivinar");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  resultado.innerHTML = "Ganaste!";
});
