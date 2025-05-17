
function tema() {
  const corpo = document.body;
  const botao = document.getElementById("botao-tema");

  corpo.classList.toggle("dark-mode");

  if (corpo.classList.contains("dark-mode")) {
    botao.textContent = "𖤓"; // Sol
  } else {
    botao.textContent = "☽"; // Lua
  }
}

function scrollPara(classe) {
  const elemento = document.querySelector(classe);
  if (elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
  }
}

function mostrarAlerta(event) {
  event.preventDefault();
  alert("Formulário enviado com sucesso!");
}
