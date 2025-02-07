const synth = window.speechSynthesis;

let ultimoChamado;

async function frontVerificar() {
  try {
    const response = await fetch("/front", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { id, nome } = await response.json();

    if (!id || id === ultimoChamado) return;
    
    ultimoChamado = id;

    chamaPaciente(nome);
    ultimoChamado = id;
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
const voices = synth.getVoices();

function chamaPaciente(nome) {
  console.log(nome);

  let utterance = new SpeechSynthesisUtterance(
    `Paciente ${nome} favor se dirigir ao balcão de atendimento`
  );

  utterance.lang = "pt-BR";
  
  utterance.voice = voices[0];

  window.speechSynthesis.speak(utterance);
}

setInterval(frontVerificar, 1000);
frontVerificar();