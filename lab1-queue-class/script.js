import { criarDiv, exibirArray } from './create-elements.js';
import { Queue } from './class-queue.js';

const queue = new Queue()

document.getElementById("enqueue").addEventListener("click", enqueue)
document.getElementById("dequeue").addEventListener("click", dequeue)
document.getElementById("front").addEventListener("click", front)
document.getElementById("rear").addEventListener("click", rear)
document.getElementById("size").addEventListener("click", size_fn)
document.getElementById("empty").addEventListener("click", empty)

exibirArray(queue.items)

function enqueue(){
  let valor = document.getElementById("addValor").value;
  if(!valor) return
  queue.enqueue(valor)

  exibirArray(queue.items)
}

function dequeue(){
  queue.dequeue();

  exibirArray(queue.items)
}

function front(){
  let valor_front = queue.front();

  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 

  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(valor_front))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}

function rear(){
  let valor_rear = queue.rear();
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 
  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(valor_rear))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}

function empty(){
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 
  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(queue.isEmpty()))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}

function size_fn(){
  const resultado = document.getElementById("resultado")
  resultado.innerHTML = ''; 
  // criarDiv(frontValor)
  resultado.appendChild(criarDiv(queue.size()))

  // sleep remove o elemento depois de um tempo
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 1000);
}