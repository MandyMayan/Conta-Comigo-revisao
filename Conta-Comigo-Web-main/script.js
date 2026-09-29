// JavaScript Document/* ===================================================
  // CONFIGS GERAIS E EFEITOS SONOROS
 //  =================================================== */
// Pontuao minima necessária para vencer ou perder o jogo

const PONTOS_PARA_VENCER = 5;
const QUESTOES_PARA_PERDER = 5;

// Captura o elemento de áudio
const musicaFundo = document.getElementById('musica-fundo');

// Ajusta o volume para 30% (varia de 0.0 a 1.0)
musicaFundo.volume = 0.3;

// Carregamento dos efeitos sonoros
const somAcerto = new Audio('acerto.mpeg');
const somErro = new Audio('erro.mpeg');
const somDica = new Audio('dica.mpeg');
const somVitoria = new Audio('victory-sound.mpeg');
const somDerrota = new Audio('fail-sound.mpeg');

/**
 * Função utilitária para reproduzir o som do iní­cio
 */
function tocarSom(audio) {
    audio.currentTime = 0; // Reinicia o áudio se for clicado rapidamente
    audio.play().catch(err => {
        // Trata restriçõees de reprodução automática do navegador caso ocorram
        console.warn("Não foi possível reproduzir o áudio, desculpa", err);
    });
}



/* ===================================================
   ESTADO DO JOGO
   =================================================== */
let perguntasAtuais = [];
let indicePerguntaAtual = 0;
let pontuacao = 0;
let tempoRestante = 0;
let tempoLimite = 30; 
let timerInterval = null;
let jaRespondeu = false;
let questoesPerdidas = 0;

/* ===================================================
   ELEMENTOS DO DOM
   =================================================== */
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');

const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const progressBar = document.getElementById('progress-bar');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackMessage = document.getElementById('feedback-message');
const nextBtn = document.getElementById('next-btn');

const hintBtn = document.getElementById('hint-btn');
const hintBox = document.getElementById('hint-box');

const resultTitle = document.getElementById('result-title');
const resultIcon = document.getElementById('result-icon');
const resultMessage = document.getElementById('result-message');
const finalScoreDisplay = document.getElementById('final-score');
const muteBtn = document.getElementById('mute-btn');

/* ===================================================
   FUNÃ‡Ã•ES DO JOGO
   =================================================== */

function toggleMute() {
    musicaFundo.muted = !musicaFundo.muted;
    if (muteBtn) {
        muteBtn.textContent = musicaFundo.muted ? '🔇' : '🔊';
        muteBtn.setAttribute('aria-label', musicaFundo.muted ? 'Ativar música' : 'Silenciar música');
    }
}

function shuffle(array) {
    const arrayCopiado = [...array];
    for (let i = arrayCopiado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopiado[i], arrayCopiado[j]] = [arrayCopiado[j], arrayCopiado[i]];
    }
    return arrayCopiado;
}

function startGame() {
	tempoLimite = 30;

	musicaFundo.play().catch(erro => {
        // O .catch evita erros no console caso o navegador ainda bloqueie o áudio
        console.log("O autoplay foi bloqueado pelo navegador.");
    });
	
    perguntasAtuais = shuffle(perguntas);
    
   indicePerguntaAtual = 0;
    pontuacao = 0;
    questoesPerdidas = 0;
    scoreDisplay.textContent = pontuacao;
    atualizarBarraProgresso(); // ADICIONE AQUI

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
	

    loadQuestion();
}

function loadQuestion() {
    jaRespondeu = false;
    feedbackMessage.textContent = '';
    feedbackMessage.className = 'feedback';
    nextBtn.classList.add('hidden');

    hintBtn.classList.add('hidden');
    hintBox.classList.add('hidden');
    hintBox.innerHTML = '';

    const perguntaAtual = perguntasAtuais[indicePerguntaAtual];

    if (perguntaAtual.dica) {
        hintBtn.classList.remove('hidden');
    }

    

    questionText.textContent = `${indicePerguntaAtual + 1}. ${perguntaAtual.pergunta}`;

    optionsContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = opcao;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    startTimer();
}

function toggleHint() {
    const perguntaAtual = perguntasAtuais[indicePerguntaAtual];
    
    if (!perguntaAtual || !perguntaAtual.dica) return;

    const estaOculta = hintBox.classList.contains('hidden');

    if (estaOculta) {
        tocarSom(somDica);
        hintBox.innerHTML = perguntaAtual.dica;
        hintBox.classList.remove('hidden');
    } else {
        hintBox.classList.add('hidden');
    }
}

function startTimer() {
    clearInterval(timerInterval);
    tempoRestante = tempoLimite;
    timerDisplay.textContent = `${tempoRestante}s`;

    timerInterval = setInterval(() => {
        tempoRestante--;
        timerDisplay.textContent = `${tempoRestante}s`;

        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    jaRespondeu = true;
    questoesPerdidas++;
    
    // Toca o Ã¡udio de erro no esgotamento do tempo
    tocarSom(somErro);

    pontuacao -= 1;pontuacao -= 1;
    scoreDisplay.textContent = pontuacao;
    atualizarBarraProgresso();

    feedbackMessage.textContent = "O tempo acabou! (-1 ponto)";
    feedbackMessage.classList.add('incorrect');

    highlightAnswers(-1);
    disableOptions();
    nextBtn.classList.remove('hidden');

    if (questoesPerdidas >= QUESTOES_PARA_PERDER) {
        endGame();
    }
}

function selectOption(indexSelecionado) {
    if (jaRespondeu) return; 
    jaRespondeu = true;
    clearInterval(timerInterval);

    const perguntaAtual = perguntasAtuais[indicePerguntaAtual];
    const ehCorreta = indexSelecionado === perguntaAtual.correta;

    if (ehCorreta) { 
        pontuacao += 1;
		scoreDisplay.textContent = pontuacao;
		atualizarBarraProgresso();
        feedbackMessage.textContent = "Resposta Correta! (+1 ponto)";
        feedbackMessage.classList.add('correct');
        tocarSom(somAcerto); // Toca o som x.mp3
    } else {
                questoesPerdidas++;
        pontuacao -= 1;
		scoreDisplay.textContent = pontuacao;
		atualizarBarraProgresso();
        feedbackMessage.textContent = "Resposta Incorreta! (-1 ponto)";
        feedbackMessage.classList.add('incorrect');
        tocarSom(somErro); // Toca o som y.mp3
    }

    scoreDisplay.textContent = pontuacao;

    highlightAnswers(indexSelecionado);
    disableOptions();
    nextBtn.classList.remove('hidden');

    if (questoesPerdidas >= QUESTOES_PARA_PERDER) {
        endGame();
    }
}

function highlightAnswers(indexSelecionado) {
    const perguntaAtual = perguntasAtuais[indicePerguntaAtual];
    const botoes = optionsContainer.children;

    Array.from(botoes).forEach((btn, idx) => {
        if (idx === perguntaAtual.correta) {
            btn.classList.add('correct');
        } else if (idx === indexSelecionado) {
            btn.classList.add('incorrect');
        }
    });
}

function disableOptions() {
    const botoes = optionsContainer.children;
    Array.from(botoes).forEach(btn => {
        btn.disabled = true;
    });
}

function atualizarBarraProgresso() {
    // 1. Evita que a barra tente renderizar valores negativos se a pontuação cair abaixo de zero
    let pontuacaoVisual = pontuacao < 0 ? 0 : pontuacao;
    
    // 2. Calcula o preenchimento com base na variável PONTOS_PARA_VENCER
    let percentual = (pontuacaoVisual / PONTOS_PARA_VENCER) * 100;
    
    // 3. Trava o preenchimento máximo em 100%
    if (percentual > 100) {
        percentual = 100;
    }
    
    // 4. Aplica a alteração visual na barra
    progressBar.style.width = `${percentual}%`;
}

function nextQuestion() {
    // NOVA REGRA: Verifica se o jogador já atingiu os pontos necessários para vencer
    if (pontuacao >= PONTOS_PARA_VENCER) {
        endGame();
        return; // Interrompe a função aqui, impedindo que a próxima pergunta carregue
    }

    // Regra original: Continua o jogo se ainda houver perguntas e os pontos não foram atingidos
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntasAtuais.length) {
        loadQuestion();
    } else {
        endGame();
    }
}



function endGame() {
    clearInterval(timerInterval);
    
    progressBar.style.width = '100%';

    quizScreen.classList.remove('active');
    endScreen.classList.add('active');

    finalScoreDisplay.textContent = pontuacao;
	
	// Pausa a música
    musicaFundo.pause();
    // Reinicia o tempo da música para o início (caso o jogador jogue novamente)
    musicaFundo.currentTime = 0;

    if (pontuacao >= PONTOS_PARA_VENCER) {
        tocarSom(somVitoria);
        resultTitle.textContent = "Você Venceu!";
        resultIcon.textContent = "🏆";
        resultMessage.textContent = `Parabéns! Você alcançou o objetivo atingindo ${pontuacao} ponto(s).`;
    } else {
        tocarSom(somDerrota);
        resultTitle.textContent = "Você Perdeu!";
        resultIcon.textContent = "❌";
        resultMessage.textContent = `Você fez ${pontuacao} ponto(s). Eram necessários pelo menos ${PONTOS_PARA_VENCER} pontos para vencer.`;
    }
}

function restartGame() {
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
}