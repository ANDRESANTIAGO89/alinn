let historico = [];

function avaliar() {
    let pontos = 0;
    if (confirm("Você cuida do seu bem-estar emocional?")) pontos++;
    if (confirm("Você pratica empatia com outras pessoas?")) pontos++;
    if (confirm("Você contribui com a sociedade?")) pontos++;

    historico.push(pontos);

    let nivel = pontos <= 1 ? "Baixo" : pontos == 2 ? "Médio" : "Alto";
    document.getElementById("resultado").innerText = "Nível atual: " + nivel;

    let rec = nivel === "Baixo"
        ? "Cuide mais de si e ajude o próximo."
        : nivel === "Médio"
        ? "Você está evoluindo."
        : "Continue inspirando pessoas.";

    document.getElementById("recomendacao").innerText = rec;

    gerarGrafico();
}

function gerarGrafico() {
    new Chart(document.getElementById("grafico"), {
        type: "line",
        data: {
            labels: historico.map((_, i) => "Avaliação " + (i + 1)),
            datasets: [{ data: historico }]
        }
    });
}
