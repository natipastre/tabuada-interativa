function gerarTabuada() {
  const inputNum = document.getElementById("txtn");
  const tabuadaList = document.getElementById("tabuada-list");
  const erroMsg = document.getElementById("msg-erro");

  tabuadaList.innerHTML = "";
  erroMsg.textContent = "";

  const valor = inputNum.value.trim();

  if (valor === "") {
    erroMsg.textContent = "Por favor, digite um número!";
    return;
  }

  const num = Number(valor);

  if (isNaN(num) || num < 0) {
    erroMsg.textContent = "Digite um número válido e maior ou igual a zero.";
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `${num} × ${i} = ${num * i}`;
    tabuadaList.appendChild(li);
  }
}

function limparTabuada() {
  document.getElementById("txtn").value = "";
  document.getElementById("tabuada-list").innerHTML = "";
  document.getElementById("msg-erro").textContent = "";
}
