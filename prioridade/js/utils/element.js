import { fila_com_prioridade } from "./root.js";

function exibirProximo() {
  const proximo = fila_com_prioridade.front();
  document.getElementById("result").innerText =
    proximo !== "Fila está vazia" ? proximo.nome : proximo;
}

function criarCardPaciente() {
  exibirProximo();
  const lista = document.getElementById("list");
  lista.innerHTML = "";
  fila_com_prioridade.items.map((paciente) => {
    lista.innerHTML += `
    <div class="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow-md mb-6">
      <div class="p-6 flex flex-col justify-between h-full">
        <div>
          <h5 class="text-2xl font-medium text-gray-800 mb-2">${
            paciente.nome
          }</h5>
          <div class="text-sm text-gray-600 mb-4">
            <p>O paciente está aguardando atendimento.</p>
          </div>
        </div>
        <div class="flex justify-between items-center mt-auto">
          <span class="px-4 py-2 text-sm font-semibold rounded-lg ${getLevelPriority(
            paciente.prioridade
          )}">
            Prioridade: ${paciente.prioridade}
          </span>
        </div>
      </div>
    </div>
    `;
  });
}

function getLevelPriority(prioridade) {
  return prioridade >= 7
    ? "bg-red-200 text-red-800"
    : prioridade >= 4
    ? "bg-yellow-200 text-yellow-800"
    : "bg-green-200 text-green-800";
}


export { criarCardPaciente, exibirProximo };