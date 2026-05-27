// QUIZ

function respostaCerta(){

    document.getElementById("resultado").innerHTML =
        "✅ Resposta correta!";
}

function respostaErrada(){

    document.getElementById("resultado").innerHTML =
        "❌ Resposta errada!";
}

// GRÁFICO

const ctx = document.getElementById('grafico');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: ['2022', '2023', '2024', '2025', '2026'],

        datasets: [{

            label: 'Produção',

            data: [10, 15, 20, 30, 40],

            backgroundColor: [
                '#66bb6a',
                '#43a047',
                '#2e7d32',
                '#1b5e20',
                '#0d4715'
            ]
        }]
    }
});
