import { exibirArray, meuArray, criarDiv } from "./create-elements.js";

exibirArray();

document.getElementById("enqueue").addEventListener("click", enqueue)
document.getElementById("dequeue").addEventListener("click", dequeue)
document.getElementById("front").addEventListener("click", front)
document.getElementById("rear").addEventListener("click", rear)
document.getElementById("size").addEventListener("click", size_fn)
document.getElementById("empty").addEventListener("click", empty)


function enqueue(){
  let valor = document.getElementById("addValor").value;
  if(!valor) return
  meuArray.push(valor)
  exibirArray();
}

function dequeue(){
  meuArray.shift();
  exibirArray();
}

function isEmpty(){
  return meuArray.length === 0
}

function size(){
  return meuArray.length
}

function front(){
  const frontValor = isEmpty()? null: meuArray[0]
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 

  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(frontValor))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}

function rear(){
  const rearValor = isEmpty()? null: meuArray[size() - 1]
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 
  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(rearValor))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}

function empty(){
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 
  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(isEmpty()))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}

function size_fn(){
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 
  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(size()))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}