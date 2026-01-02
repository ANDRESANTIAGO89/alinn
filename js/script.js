
function iniciarTeste() {
    let score = 0;
    if (confirm("Você se sente satisfeito com sua rotina?")) score++;
    if (confirm("Você pratica empatia no dia a dia?")) score++;
    if (confirm("Você contribui com ações sociais?")) score++;

    let nivel = score <= 1 ? "Baixo" : score == 2 ? "Médio" : "Alto";
    document.getElementById("resultado").innerText =
        "Seu nível de bem-estar é: " + nivel;

    gerarGrafico(score);
}

function gerarGrafico(score) {
    const ctx = document.getElementById('grafico');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Bem-estar'],
            datasets: [{
                data: [score],
            }]
        }
    });
}
