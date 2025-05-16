// Função para alternar tema claro/escuro
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

// Função para scroll suave até o elemento
function scrollPara(classe) {
  const elemento = document.querySelector(classe);
  if (elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
  }
}

// Alerta no envio do formulário
function mostrarAlerta(event) {
  event.preventDefault();
  alert("Formulário enviado com sucesso!");
}
