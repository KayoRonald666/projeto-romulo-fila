let meuArray = [1,2,3,4]


function exibirArray() {
  const divMeuArray = document.getElementById("meuArray");
  divMeuArray.innerHTML = "";
  for (let i = 0; i < meuArray.length; i++) {
    divMeuArray.appendChild(criarDiv(meuArray[i]));
  }
}

function criarDiv(valor) {
  const novaDiv = document.createElement("div");

  novaDiv.className =
    "bg-blue-300 h-[50px] shadow-md rounded-md m-4 p-4 w-48 w-[80px]";
  const texto = document.createElement("h1");
  texto.className = "text-center text-lg font-semibold";
  texto.innerText = valor;

  novaDiv.appendChild(texto);

  return novaDiv;
}


export { exibirArray, meuArray, criarDiv }