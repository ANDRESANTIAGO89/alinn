const perguntas = [
 "Você cuida da sua saúde mental?",
 "Você respeita opiniões diferentes das suas?",
 "Você ajuda outras pessoas quando pode?",
 "Você pratica empatia no dia a dia?",
 "Você participa ou já participou de ações sociais?",
 "Você se comunica com respeito?",
 "Você busca evoluir como pessoa?",
 "Você se preocupa com o meio ambiente?",
 "Você valoriza o trabalho em equipe?",
 "Você acredita que pequenas ações transformam a sociedade?"
];

let atual = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");

function mostrarPergunta() {
    perguntaEl.innerText = perguntas[atual];
    opcoesEl.innerHTML = "";

    ["Sim", "Às vezes", "Não"].forEach((texto, index) => {
        const btn = document.createElement("button");
        btn.innerText = texto;
        btn.onclick = () => responder(index);
        opcoesEl.appendChild(btn);
    });
}

function responder(opcao) {
    if (opcao === 0) pontos += 2;
    if (opcao === 1) pontos += 1;

    atual++;
    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function reiniciarQuiz() {
    atual = 0;
    pontos = 0;

    document.getElementById("resultado").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    mostrarPergunta();
}
            }]
        }
    });
}

mostrarPergunta();
