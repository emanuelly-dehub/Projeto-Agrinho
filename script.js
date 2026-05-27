// QUIZ

function resposta(tipo){

    let resultado = document.getElementById("resultado");

    if(tipo === "certo"){

        resultado.innerHTML = "✅ Resposta correta!";

        resultado.style.color = "green";

    }else{

        resultado.innerHTML = "❌ Resposta errada!";

        resultado.style.color = "red";
    }

}

// GRÁFICO

const ctx = document.getElementById('grafico');

new Chart(ctx, {
    type: 'bar',

    data: {

        labels: ['2022', '2023', '2024', '2025', '2026'],

        datasets: [{
            label: 'Produção Sustentável',

            data: [12, 19, 25, 32, 40],

            borderWidth: 1,

            backgroundColor: [
                '#66bb6a',
                '#43a047',
                '#2e7d32',
                '#1b5e20',
                '#0d4715'
            ]
        }]
    },

    options: {

        responsive:true,

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
