let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#botao");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#senha");
let containerPassword = document.querySelector("#container-senha");
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function gerarSenha() {
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(pass)
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}


let buttonCopiar = document.querySelector("#botao-copiar");
buttonCopiar.addEventListener("click", copyPassword);
