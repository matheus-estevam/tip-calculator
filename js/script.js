const botaoCalcular = document.querySelector("#calculate");
const valorConta = document.querySelector("#bill");
const taxaGorjeta = document.querySelector("#tip");
const resultado = document.querySelector("#result");

function mostrarResultado() {
  const bill = +valorConta.value;
  const tip = +taxaGorjeta.value;
  const tipResult = (tip / 100) * bill;
  const finalResult = bill + tipResult;

  resultado.innerHTML = finalResult.toFixed(2);
}

botaoCalcular.addEventListener("click", mostrarResultado);
