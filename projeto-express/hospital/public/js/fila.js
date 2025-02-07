async function frontVerificar() {
  try {
    const response = await fetch("/front", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { nome } = await response.json();

    result.innerText = nome || "Nenhum paciente na fila";
    

  } catch (error) {
    console.log(error);

    Swal.fire({
      title: "Ops! Ocorreu um erro",
      text: "Por favor, tente novamente",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
}

async function criarCardPaciente() {
  try {
    const response = await fetch("/queue", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { stack } = await response.json();
    const lista = document.getElementById("list");

    lista.innerHTML = "";
    stack.forEach((paciente) => {
      lista.innerHTML += `
    <div class="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow-md mb-6">
      <div class="p-6 flex flex-col justify-between h-full">
        <div>
          <h5 class="text-2xl font-medium text-gray-800 mb-2">${paciente.nome}</h5>
          <div class="text-sm text-gray-600 mb-4">
            <p id='${paciente.id}'>O paciente está aguardando atendimento.</p>
          </div>
        </div>
        <div class="flex justify-between items-center mt-auto">
          <span class="px-4 py-2 text-sm font-semibold rounded-lg ${paciente.prioridade}">
            Prioridade: ${paciente.prioridade}
          </span>
        </div>
      </div>
    </div>
    `;
    });
  } catch (error) {
    console.log(error);
  }
}

setInterval(criarCardPaciente, 1000);
setInterval(frontVerificar, 1000);
frontVerificar();
criarCardPaciente();
