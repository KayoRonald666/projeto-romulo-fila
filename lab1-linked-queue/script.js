import { exibirArray, exibirProximo } from "./utils/create-elements.js";
import { stack } from "./utils/root.js";


const output = document.getElementById("output");

stack.enqueue("João")
stack.enqueue("Maria")
stack.enqueue("José")
stack.enqueue("Ana")

document.getElementById("enqueue").addEventListener("click", () => {
  const value = document.getElementById("addValor").value;
  if (!value) return;
  stack.enqueue(value);
  exibirArray();
});

document.getElementById("dequeue").addEventListener("click", () => {
  output.innerText = stack.dequeue();
  exibirArray();
});

document.getElementById("front").addEventListener("click", () => {
  output.innerText = stack.front();
})

document.getElementById("rear").addEventListener("click", () => {
  output.innerText = stack.rear();
})

document.getElementById("size").addEventListener("click", () => {
  output.innerText = stack.size();
})

exibirArray();

// exibirProximo();