// Banco de dados de curiosidades simulado pela IA
const curiosidadesIA = [
    "🤖 Sabia que algumas IA no agro analisam imagens de satélite para prever a colheita com até 95% de precisão antes mesmo das máquinas irem a campo?",
    "🌱 Curiosidade Biológica: As bactérias mencionadas nos artigos científicos agem como 'fábricas naturais', transformando o nitrogênio do ar em adubo para as plantas, sem poluir os lençóis freáticos!",
    "🛸 Drones inteligentes conseguem aplicar defensivos agrícolas focando apenas na planta doente, reduzindo o uso de químicos em até 90% comparado à pulverização tradicional.",
    "🚜 Tratores autônomos de hoje utilizam GPS de alta precisão milimétrica. Eles conseguem plantar fileiras perfeitas evitando a compactação desnecessária do solo.",
    "💧 Sensores de umidade subterrâneos avisam o sistema de irrigação via nuvem para desligar se houver previsão de chuva iminente, economizando bilhões de litros de água por ano."
];

const botaoIA = document.getElementById('btn-ia');
const caixaResposta = document.getElementById('ia-box');
const textoIA = document.getElementById('texto-ia');
const containerResposta = document.getElementById('ia-resposta');

botaoIA.addEventListener('click', () => {
    // Remove a classe 'hidden' para mostrar a caixa
    containerResposta.classList.remove('hidden');
    
    // Mostra estado de carregamento simulando a IA 'pensando'
    textoIA.innerHTML = "<em>Analisando dados científicos e gerando insight...</em>";
    
    setTimeout(() => {
        // Sorteia uma curiosidade aleatória do array
        const indexAleatorio = Math.floor(Math.random() * curiosidadesIA.length);
        const respostaSorteada = curiosidadesIA[indexAleatorio];
        
        // Exibe o texto final gerado pela IA
        textoIA.innerText = respostaSorteada;
    }, 1200); // Aguarda 1.2 segundos para simular o processamento
});
