// Banco de dados de curiosidades geradas pela "IA" do site
const curiosidadesAgro = [
    "🤖 [IA Insights]: Você sabia que tratores autônomos hoje usam GPS com precisão milimétrica? Isso evita que eles passem duas vezes pelo mesmo lugar, economizando muito combustível e reduzindo a compactação do solo!",
    "🌱 [IA Insights]: Sensores subterrâneos conseguem 'conversar' com os sistemas de irrigação. Eles avisam exatamente quando a planta está com sede, evitando o desperdício de bilhões de litros de água doce.",
    "🛸 [IA Insights]: Drones equipados com câmeras térmicas conseguem detectar uma praga na plantação antes mesmo que o olho humano consiga ver qualquer mancha na folha. Isso permite tratar apenas a planta doente, reduzindo o uso de defensivos.",
    "🌾 [IA Insights]: A biotecnologia permitiu criar sementes que se adaptam a climas extremos de seca. Isso garante que alimentos continuem crescendo mesmo com as mudanças climáticas globais.",
    "🔄 [IA Insights]: O sistema ILPF (Integração Lavoura-Pecuária-Floresta) permite que o mesmo espaço produza grãos, carne e madeira. As árvores plantadas ajudam a reter gás carbônico, neutralizando as emissões dos animais!"
];

// Seleção dos elementos da página
const botaoIA = document.getElementById('btn-ia');
const respostaDiv = document.getElementById('resposta-ia');
const textoCuriosidade = document.getElementById('texto-curiosidade');

// Função que simula a IA escolhendo uma curiosidade aleatória
botaoIA.addEventListener('click', () => {
    // Efeito de "carregando"
    textoCuriosidade.innerText = "IA pensando e processando dados científicos...";
    respostaDiv.classList.remove('hidden');
    
    setTimeout(() => {
        // Escolhe uma frase aleatória do array
        const indiceAleatorio = Math.floor(Math.random() * curiosidadesAgro.length);
        textoCuriosidade.innerText = curiosidadesAgro[indiceAleatorio];
    }, 800); // Aguarda 800 milissegundos para simular o pensamento da IA
});
