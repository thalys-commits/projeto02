// Função principal de validação do formulário
function validarFormulario() {
  // Captura os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  // Expressão regular para validar senha:
  // - Pelo menos 8 caracteres
  // - Pelo menos 1 letra maiúscula
  // - Pelo menos 1 número
  // - Pelo menos 1 caractere especial
  const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  // Verifica se algum campo está vazio
  if (nome === "" || email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return false; // impede envio
  }

  // Verifica se a senha atende aos critérios
  if (!regexSenha.test(senha)) {
    alert("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.");
    return false;
  }

  // Se tudo estiver correto
  alert("Formulário enviado com sucesso!");
  return true;
}

// Função que avalia a força da senha e muda a cor da barra
function verificarForcaSenha() {
  const senha = document.getElementById("senha").value;
  const barra = document.getElementById("barraSenha");
  let forca = 0;

  // Incrementa pontos conforme critérios atendidos
  if (senha.length >= 8) forca++;
  if (/[A-Z]/.test(senha)) forca++;
  if (/[0-9]/.test(senha)) forca++;
  if (/[^A-Za-z0-9]/.test(senha)) forca++;

  // Muda a cor da barra conforme a força
  switch (forca) {
    case 0:
    case 1:
      barra.style.background = "red"; // fraca
      break;
    case 2:
      barra.style.background = "orange"; // média
      break;
    case 3:
      barra.style.background = "yellowgreen"; // boa
      break;
    case 4:
      barra.style.background = "green"; // forte
      break;
  }
}

// Função que mostra checklist de requisitos da senha
function validarRequisitos() {
  const senha = document.getElementById("senha").value;

  // Critério 1: mínimo 8 caracteres
  document.getElementById("req1").className = senha.length >= 8 ? "valido" : "invalido";
  document.getElementById("req1").textContent = senha.length >= 8 ? "✅ Pelo menos 8 caracteres" : "❌ Pelo menos 8 caracteres";

  // Critério 2: pelo menos uma letra maiúscula
  document.getElementById("req2").className = /[A-Z]/.test(senha) ? "valido" : "invalido";
  document.getElementById("req2").textContent = /[A-Z]/.test(senha) ? "✅ Uma letra maiúscula" : "❌ Uma letra maiúscula";

  // Critério 3: pelo menos um número
  document.getElementById("req3").className = /[0-9]/.test(senha) ? "valido" : "invalido";
  document.getElementById("req3").textContent = /[0-9]/.test(senha) ? "✅ Um número" : "❌ Um número";

  // Critério 4: pelo menos um caractere especial
  document.getElementById("req4").className = /[^A-Za-z0-9]/.test(senha) ? "valido" : "invalido";
  document.getElementById("req4").textContent = /[^A-Za-z0-9]/.test(senha) ? "✅ Um caractere especial (!@#$%)" : "❌ Um caractere especial (!@#$%)";
}

// Função que valida se a confirmação de senha é igual à senha
function validarConfirmacao() {
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmarSenha");

  // Se o campo estiver vazio, remove estilos
  if (confirmar.value === "") {
    confirmar.classList.remove("invalido", "valido");
    return;
  }

  // Se a confirmação for diferente → borda vermelha
  if (confirmar.value !== senha) {
    confirmar.classList.add("invalido");
    confirmar.classList.remove("valido");
  } 
  // Se for igual → borda verde
  else {
    confirmar.classList.add("valido");
    confirmar.classList.remove("invalido");
  }
}