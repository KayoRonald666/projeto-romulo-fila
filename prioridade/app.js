import { criarCardPaciente } from "./js/utils/element.js";
import { fila_com_prioridade } from "./js/utils/root.js";

/**
 * Referência ao elemento HTML onde as saídas são exibidas
 * - O elemento é um parágrafo com o id "output"
 */
const output = document.getElementById("output");

// Adiciona pacientes iniciais à fila de prioridade
fila_com_prioridade.enqueue("João", 5);
fila_com_prioridade.enqueue("Maria", 7);
fila_com_prioridade.enqueue("José", 3);
fila_com_prioridade.enqueue("Ana", 9);
fila_com_prioridade.enqueue("Fernando", 2);

/**
 * Adiciona um evento de submit ao formulário para adicionar novos pacientes à fila de prioridade
 * 
 */
document.getElementById("addform").addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const prioridade = parseInt(document.getElementById("prioridade").value, 10);

  fila_com_prioridade.enqueue(nome, prioridade);

  criarCardPaciente();
});

/**
 * Adiciona um evento de clique ao botão de remoção para remover o próximo paciente da fila
 * 
 * 
 */
document.getElementById("dequeue").addEventListener("click", () => {
  const removido = fila_com_prioridade.dequeue();
  console.log("Removido da fila:", removido !== "Fila está vazia" ? removido.nome : removido);
  criarCardPaciente();
});

/**
 * Adiciona um evento de clique ao botão para exibir o primeiro paciente da fila.
 * 
 * 
 */
document.getElementById("front").addEventListener("click", () => {
  const front = fila_com_prioridade.front();
  console.log("Primeiro da fila:", front.nome);
  output.innerText = front.nome || "Fila está vazia";
});

/**
 * Adiciona um evento de clique ao botão para exibir o tamanho da fila.
 * 
 */
document.getElementById("size").addEventListener("click", () => {
  const size = fila_com_prioridade.size();
  console.log("Tamanho da fila:", size);
  output.innerText = size;
});

/**
 * Adiciona um evento de clique ao botão para exibir o último paciente da fila
 * 
 */
document.getElementById("rear").addEventListener("click", () => {
  const rear = fila_com_prioridade.rear();
  console.log("Último da fila:", fila_com_prioridade.rear());
  output.innerText = rear.nome || "Fila está vazia";
});

/**
 * Adiciona um evento de clique ao botão para verificar se a fila está vazia
 * 
 */
document.getElementById("empty").addEventListener("click", () => {
  const isEmpty = fila_com_prioridade.isEmpty();
  console.log("Fila está vazia?", isEmpty);
  output.innerText = isEmpty;
});

criarCardPaciente();