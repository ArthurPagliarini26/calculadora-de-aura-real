// =========================
// CONFIGURAÇÃO
// =========================

const DURACAO_SUSPENSE = 5000; // 5 segundos de carregamento
const QTD_PERGUNTAS = 10;       // quantas perguntas saem em cada rodada
const DELAY_PROXIMA = 450;     // pausa (ms) entre escolher uma opção e ir pra próxima

// Banco de perguntas. "certa" é o índice da opção que sobe a aura (0=A, 1=B, 2=C, 3=D).
// Tem 10 perguntas e cada rodada sorteia QTD_PERGUNTAS delas.
// Para usar todas as 10, basta mudar QTD_PERGUNTAS para 10.
const perguntas = [
    {
        texto: "Você vê um gato preso no topo de uma árvore. O que você faz?",
        opcoes: [
            "Chamo os bombeiros e fico esperando",
            "Tento subir para salvar o gato e provavelmente viro a segunda vítima",
            "Gravo um vídeo rindo e posto no tiktok",
            "Vou embora. O gato chegou lá sozinho, ele que se vire"
        ],
        certa: 3
    },
    {
        texto: "Você acorda e descobre que ganhou R$ 10 milhões, mas tem uma condição: um desconhecido vai receber R$ 1 milhão por sua causa. O que você faz?",
        opcoes: [
            "Aceito na hora, capitalismo venceu",
            "Tento descobrir quem é o desconhecido",
            "Recuso porque parece golpe",
            "Aceito e começo a procurar o desconhecido depois"
        ],
        certa: 0
    },
    {
        texto: "Um fantasma aparece no seu quarto às 3 da manhã e diz: “Precisamos conversar”. O que você responde?",
        opcoes: [
            "“Pode falar”",
            "“Você paga aluguel?”",
            "“Irmão, amanhã eu trabalho”",
            "Saio correndo e deixo o quarto para ele"
        ],
        certa: 0
    },
    {
        texto: "Você encontra uma mochila abandonada no meio da rua. Dentro dela tem R$ 50 mil e um bilhete escrito: “Não pergunte de onde veio”. O que você faz?",
        opcoes: [
            "Entrego para a polícia",
            "Pego o dinheiro e finjo que nunca vi a mochila",
            "Procuro descobrir de quem é",
            "Leio o bilhete de novo e penso: “Bom argumento”"
        ],
        certa: 3
    },
    {
        texto: "Se você pudesse apagar uma coisa da existência humana, o que escolheria?",
        opcoes: [
            "Segunda-feira",
            "Impostos",
            "Gente que manda áudio de 7 minutos",
            "A própria humanidade. Resolvido de uma vez"
        ],
        certa: 3
    },
    {
        texto: "Você está em um jantar e percebe que a pessoa ao seu lado está morta, mas ninguém mais percebeu. O que você faz?",
        opcoes: [
            "Aviso alguém imediatamente",
            "Fico em silêncio para não estragar o jantar",
            "Primeiro termino minha comida, depois resolvo",
            "Começo a conversar com ela para confirmar"
        ],
        certa: 2
    },
    {
        texto: "Um gênio aparece e oferece realizar qualquer desejo, mas existe 10% de chance de dar completamente errado. O que você pede?",
        opcoes: [
            "Dinheiro",
            "Poder ou influência",
            "Algo completamente absurdo só pela experiência",
            "Nada."
        ],
        certa: 3
    },
    {
        texto: "Você está andando sozinho à noite e vê uma pessoa idêntica a você parada do outro lado da rua. O que você faz?",
        opcoes: [
            "Vou embora correndo e finjo que nunca vi",
            "Atravesso a rua para descobrir o que está acontecendo",
            "Grito “quem é você?” porque aparentemente sou protagonista de filme de terror",
            "Tiro uma foto. Se eu morrer, pelo menos deixo evidências"
        ],
        certa: 1
    },
    {
        texto: "Você ganha o poder de saber exatamente quando qualquer pessoa vai morrer, mas não pode impedir. O que você faria?",
        opcoes: [
            "Usaria para ajudar as pessoas a aproveitarem melhor o tempo",
            "Não contaria para ninguém, eu não quero esse peso",
            "Ficaria paranoico tentando entender o que fazer com essa informação",
            "Usaria para descobrir quanto tempo ainda tenho antes de começar a me preocupar"
        ],
        certa: 0
    },
    {
        texto: "Um pombo pousa na sua cabeça, olha diretamente nos seus olhos e fala: “Você tem 24 horas”. O que você faz?",
        opcoes: [
            "Entro em pânico imediatamente",
            "Pergunto “24 horas para quê?”",
            "Aceito meu destino e vou comer alguma coisa boa",
            "Sigo o pombo. Claramente ele sabe mais do que eu"
        ],
        certa: 3
    },
      {
        texto: "Você está atrasado para uma reunião importante e o elevador está lotado. O que você faz?",
        opcoes: [
            "Subo de escada correndo e chego suado",
            "Espero o próximo e chego atrasado",
            "Entro no elevador mesmo assim e mantenho contato visual com todo mundo",
            "Mando mensagem dizendo que estou “quase chegando”"
        ],
        certa: 2
    },
    {
        texto: "Alguém te diz que você tem exatamente o mesmo rosto do vilão de um filme. O que você responde?",
        opcoes: [
            "“Que filme?” e fico ofendido",
            "“Obrigado” e sigo a vida",
            "Fico em silêncio e encaro até a pessoa se arrepender",
            "Agradeço, o vilão é o melhor personagem"
        ],
        certa: 1
    },
    {
        texto: "Você descobre que existe uma versão sua de outro universo que é muito mais bem-sucedida. O que você faz?",
        opcoes: [
            "Tento entrar em contato para pedir dicas",
            "Fico com inveja e passo a noite pensando nisso",
            "Penso: “Ele que lute com os problemas dele, eu cuido dos meus”",
            "Peço o número da conta bancária dele"
        ],
        certa: 3
    },
    {
        texto: "Seu celular cai na água, mas você consegue salvar só uma coisa: o celular ou a carteira. O que você escolhe?",
        opcoes: [
            "O celular, minha vida está lá dentro",
            "A carteira, é mais prático",
            "Nenhum dos dois. Já aceitei meu destino",
            "Fico parado olhando enquanto os dois afundam"
        ],
        certa: 3
    },
    {
        texto: "Você entra num elevador e todas as pessoas lá dentro viram para você ao mesmo tempo. O que você faz?",
        opcoes: [
            "Saio imediatamente",
            "Pergunto “eu fiz alguma coisa?”",
            "Aperto o botão do meu andar como se nada tivesse acontecido",
            "Começo a me perguntar se eu sou o problema"
        ],
        certa: 2
    },
    {
        texto: "Você vê um grupo de pessoas brigando por causa de uma coxinha. O que você faz?",
        opcoes: [
            "Tento acalmar todo mundo",
            "Pego a coxinha enquanto eles brigam",
            "Gravo tudo e posto na internet",
            "Fico assistindo de longe, com pipoca"
        ],
        certa: 1
    },
    {
        texto: "Um robô te desafia para uma luta de vida ou morte, mas ele só sabe jogar pedra, papel e tesoura. O que você faz?",
        opcoes: [
            "Mato ele",
            "Recuso, porque isso é tudo uma armadilha",
            "Tento desligar o robô pela tomada",
            "Jogo tesoura e tento parecer confiante"
        ],
        certa: 0
    },
    {
        texto: "Você ganha uma viagem para qualquer lugar do mundo, mas precisa levar uma pessoa que você mal conhece. O que você faz?",
        opcoes: [
            "Aceito e torço para a pessoa ser legal",
            "Recuso, prefiro economizar e viajar sozinho",
            "Aceito e escolho o destino mais caro possível",
            "Aceito e levo outra pessoa escondido na mala"
        ],
        certa: 3
    },
    {
        texto: "Você está jogando um jogo e perde para uma criança de 8 anos. O que você faz?",
        opcoes: [
            "Peço revanche imediatamente",
            "Digo que o controle estava com defeito",
            "Elogio a criança e aceito minha derrota com honra",
            "Digo que estava deixando ela ganhar"
        ],
        certa: 3
    },
    {
        texto: "Alguém te entrega um botão vermelho e diz: “Se apertar, algo aleatório vai acontecer”. O que você faz?",
        opcoes: [
            "Não aperto, vai que é algo ruim",
            "Aperto na hora",
            "Pergunto se o botão tem garantia",
            "Peço para outra pessoa apertar primeiro"
        ],
        certa: 1
    }
];

const mensagensSuspense = [
    "Lendo sua presença...",
    "Medindo o olhar...",
    "Consultando os antigos alfas...",
    "Calibrando o mogging...",
    "Revelando sua aura..."
];

// Cada nível define o texto, a cor da borda (classe do CSS) e a força da explosão.
// A explosão cresce a cada nível: mais partículas, mais velocidade, mais ondas,
// tremor de tela e flash nos níveis mais altos.
const niveis = [
    { ate: 10,  nome: "BETA CRIADO À LEITE NINHO", classe: "aura-beta",
      cores: ["#9bb8ff", "#ffffff"], emoji: "🥛",
      particulas: 14, velocidade: 3,  gravidade: 0.12,  aneis: 0, ondas: 1, tremor: 0,  flash: 0 },

    { ate: 20,  nome: "BETINHA", classe: "aura-beta",
      cores: ["#4d8dff", "#9bb8ff", "#ffffff"],
      particulas: 30, velocidade: 5,  gravidade: 0.10,  aneis: 0, ondas: 1, tremor: 0,  flash: 0 },

    { ate: 30,  nome: "BETA", classe: "aura-beta",
      cores: ["#4d8dff", "#7c4dff", "#ffffff"],
      particulas: 55, velocidade: 7,  gravidade: 0.08,  aneis: 1, ondas: 1, tremor: 0,  flash: 0 },

    { ate: 40,  nome: "BETA SUPREMO", classe: "aura-beta",
      cores: ["#4d8dff", "#b58cff", "#ffffff"],
      particulas: 90, velocidade: 9,  gravidade: 0.06,  aneis: 1, ondas: 1, tremor: 0,  flash: 0 },

    { ate: 50,  nome: "APRENDIZ DE ALFA", classe: "aura-alfa",
      cores: ["#ffb300", "#ff9d00", "#ffffff"],
      particulas: 130, velocidade: 11, gravidade: 0.05, aneis: 1, ondas: 1, tremor: 0,  flash: 0 },

    { ate: 60,  nome: "PUPILO DE ALFA", classe: "aura-alfa",
      cores: ["#ffb300", "#ff6600", "#ffe08a", "#ffffff"],
      particulas: 180, velocidade: 13, gravidade: 0.04, aneis: 2, ondas: 1, tremor: 4,  flash: 0 },

    { ate: 70,  nome: "ALFA", classe: "aura-alfa",
      cores: ["#ffb300", "#ff4400", "#ffe08a", "#ffffff"],
      particulas: 240, velocidade: 15, gravidade: 0.03, aneis: 2, ondas: 1, tremor: 7,  flash: 0.25 },

    { ate: 80,  nome: "MOGGER", classe: "aura-mogger",
      cores: ["#ff4dff", "#b35cff", "#ffffff", "#ff9dff"],
      particulas: 310, velocidade: 18, gravidade: 0.02, aneis: 3, ondas: 2, tremor: 11, flash: 0.4 },

    { ate: 90,  nome: "MOGGER SUPREMO", classe: "aura-mogger-supremo",
      cores: ["#00eaff", "#4d8dff", "#ffffff", "#b58cff"],
      particulas: 400, velocidade: 21, gravidade: 0.015, aneis: 3, ondas: 3, tremor: 16, flash: 0.6 },

    { ate: Infinity, nome: "CHAD", classe: "aura-chad",
      cores: ["#ffffff", "#ffcc00", "#ff00ff", "#00eaff", "#ff4dff", "#7c4dff"], emoji: "🗿",
      particulas: 600, velocidade: 26, gravidade: 0.01, aneis: 5, ondas: 5, tremor: 26, flash: 1 }
];

const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


// =========================
// ELEMENTOS
// =========================

const telaIntro = document.getElementById("tela-intro");
const telaPergunta = document.getElementById("tela-pergunta");
const telaFinal = document.getElementById("tela-final");

const botaoComecar = document.getElementById("comecar");
const numeroPergunta = document.getElementById("numero-pergunta");
const barraQuiz = document.getElementById("barra-quiz");
const cartaoPergunta = document.getElementById("cartao-pergunta");
const textoPergunta = document.getElementById("texto-pergunta");
const listaOpcoes = document.getElementById("lista-opcoes");

const finalIntro = document.getElementById("final-intro");
const formulario = document.getElementById("formulario");
const botao = document.getElementById("calcular");
const botaoRefazer = document.getElementById("refazer");
const discordo = document.getElementById("discordo");
const inputAura = document.getElementById("aura-real");
const erroAura = document.getElementById("erro-aura");

const carregando = document.getElementById("carregando");
const textoCarregando = document.getElementById("carregando-texto");
const barra = document.getElementById("barra-progresso");
const numeroCarregando = document.getElementById("carregando-numero");
const resultado = document.getElementById("resultado");
const elAura = document.getElementById("aura");
const elNivel = document.getElementById("nivel");
const container = document.querySelector(".container");
const flash = document.getElementById("flash");
const canvas = document.getElementById("explosao");
const ctx = canvas.getContext("2d");
const meme67 = document.getElementById("meme67");

let calculando = false;
let jaCalculou = false;


// =========================
// TELAS
// =========================

function mostrarTela(tela) {
    for (let t of [telaIntro, telaPergunta, telaFinal]) {
        t.hidden = (t !== tela);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
}


// =========================
// QUIZ
// =========================

let sorteadas = [];
let atual = 0;
let acertos = 0;
let travado = false;

function embaralhar(lista) {
    const copia = lista.slice();
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function comecarQuiz() {
    sorteadas = embaralhar(perguntas).slice(0, Math.min(QTD_PERGUNTAS, perguntas.length));
    atual = 0;
    acertos = 0;
    travado = false;
    resetarFinal();
    mostrarTela(telaPergunta);
    mostrarPergunta();
}

function mostrarPergunta() {
    const p = sorteadas[atual];

    numeroPergunta.textContent = `Pergunta ${atual + 1} de ${sorteadas.length}`;
    barraQuiz.style.width = ((atual / sorteadas.length) * 100) + "%";
    textoPergunta.textContent = p.texto;

    listaOpcoes.innerHTML = "";
    listaOpcoes.classList.remove("travada");

    p.opcoes.forEach((texto, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "opcao";

        const letra = document.createElement("span");
        letra.className = "letra";
        letra.textContent = "ABCD"[i];

        const conteudo = document.createElement("span");
        conteudo.className = "texto";
        conteudo.textContent = texto;

        b.append(letra, conteudo);
        b.addEventListener("click", () => responder(i, b));
        listaOpcoes.appendChild(b);
    });

    // Reinicia a animação de entrada do cartão
    cartaoPergunta.classList.remove("entrando");
    void cartaoPergunta.offsetWidth;
    cartaoPergunta.classList.add("entrando");
}

function responder(indice, botaoEscolhido) {
    if (travado) return;
    travado = true;

    const p = sorteadas[atual];

    botaoEscolhido.classList.add("escolhida");
    listaOpcoes.classList.add("travada");

    // Cada pergunta certa sobe o nível de aura em um
    if (indice === p.certa) acertos++;

    barraQuiz.style.width = (((atual + 1) / sorteadas.length) * 100) + "%";

    setTimeout(() => {
        atual++;

        if (atual >= sorteadas.length) {
            irParaFinal();
        } else {
            mostrarPergunta();
        }

        travado = false;
    }, DELAY_PROXIMA);
}

// Atalho de teclado: A, B, C, D (ou 1 a 4) escolhem a opção
document.addEventListener("keydown", function (event) {
    if (telaPergunta.hidden || travado) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;

    const mapa = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
    const indice = mapa[event.key.toLowerCase()];

    if (indice === undefined) return;

    const opcao = listaOpcoes.children[indice];
    if (opcao) opcao.click();
});

function irParaFinal() {
    mostrarTela(telaFinal);
}

function resetarFinal() {
    jaCalculou = false;
    calculando = false;

    finalIntro.hidden = false;
    carregando.hidden = true;
    resultado.hidden = true;
    discordo.hidden = true;
    botaoRefazer.hidden = true;

    inputAura.value = "";
    inputAura.disabled = false;
    erroAura.textContent = "";

    botao.disabled = false;
    botao.textContent = "CALCULAR AURA";
}


// =========================
// CÁLCULO
// =========================

// Cada acerto sobe um nível. O número da aura fica dentro da faixa do nível.
function auraDoQuiz() {
    const aura = acertos * 10 + aleatorio(0.1, 9.9);
    return Number(aura.toFixed(1));
}

function descobrirNivel(aura) {
    return niveis.find(n => aura < n.ate);
}

// Lê a aura digitada. Retorna null se for inválida (e mostra o erro).
function lerAuraDigitada() {
    const texto = inputAura.value.trim().replace(",", ".");

    if (texto === "") {
        erroAura.textContent = "Digite a sua aura real primeiro.";
        inputAura.focus();
        return null;
    }

    const numero = Number(texto);

    if (!Number.isFinite(numero)) {
        erroAura.textContent = "Isso não é uma aura válida. Digite um número.";
        inputAura.focus();
        return null;
    }

    if (Math.abs(numero) > 1000000000) {
        erroAura.textContent = "Nem a aura mais insana passa de 1.000.000.000.";
        inputAura.focus();
        return null;
    }

    erroAura.textContent = "";
    return numero;
}


// =========================
// SUSPENSE (5 segundos)
// =========================

function suspense() {
    return new Promise(resolve => {

        const inicio = performance.now();
        let ultimoNumero = 0;

        carregando.hidden = false;
        carregando.classList.remove("intenso");
        barra.style.width = "0%";

        carregando.scrollIntoView({
            behavior: reduzirMovimento ? "auto" : "smooth",
            block: "center"
        });

        function quadro(agora) {
            const t = Math.min((agora - inicio) / DURACAO_SUSPENSE, 1);

            // Começa rápido e desacelera no fim, para aumentar a tensão
            const progresso = 1 - Math.pow(1 - t, 2);
            barra.style.width = (progresso * 100).toFixed(1) + "%";

            // Troca a frase ao longo do tempo
            const indice = Math.min(
                mensagensSuspense.length - 1,
                Math.floor(t * mensagensSuspense.length)
            );
            textoCarregando.textContent = mensagensSuspense[indice];

            // Número embaralhando, como uma caça-níquel
            if (agora - ultimoNumero > 70) {
                numeroCarregando.textContent = (Math.random() * 100).toFixed(1);
                ultimoNumero = agora;
            }

            // No último segundo o orbe fica frenético
            if (t > 0.8) {
                carregando.classList.add("intenso");
            }

            if (t < 1) {
                requestAnimationFrame(quadro);
            } else {
                resolve();
            }
        }

        requestAnimationFrame(quadro);
    });
}


// =========================
// EXPLOSÃO (canvas)
// =========================

let particulas = [];
let aneis = [];
let animando = false;

function ajustarCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

window.addEventListener("resize", ajustarCanvas);
ajustarCanvas();

function aleatorio(min, max) {
    return min + Math.random() * (max - min);
}

function emitir(x, y, nivel, forcaOnda) {
    const fator = reduzirMovimento ? 0.3 : 1;
    const quantidade = Math.round((nivel.particulas / nivel.ondas) * fator);

    for (let i = 0; i < quantidade; i++) {
        const angulo = Math.random() * Math.PI * 2;
        const velocidade = aleatorio(0.25, 1) * nivel.velocidade * forcaOnda;
        const usaEmoji = nivel.emoji && i < Math.max(4, quantidade * 0.04);

        particulas.push({
            x: x,
            y: y,
            vx: Math.cos(angulo) * velocidade,
            vy: Math.sin(angulo) * velocidade,
            vida: 1,
            desbote: aleatorio(0.008, 0.02),
            tamanho: aleatorio(1.5, 3 + nivel.velocidade / 5),
            cor: nivel.cores[Math.floor(Math.random() * nivel.cores.length)],
            gravidade: nivel.gravidade,
            emoji: usaEmoji ? nivel.emoji : null,
            faisca: nivel.velocidade >= 11 && !usaEmoji
        });
    }

    // Ondas de choque
    const quantidadeAneis = Math.ceil(nivel.aneis / nivel.ondas);
    for (let i = 0; i < quantidadeAneis; i++) {
        aneis.push({
            x: x,
            y: y,
            raio: 4 + i * 10,
            velocidade: nivel.velocidade * aleatorio(0.7, 1.1) * forcaOnda,
            alpha: 0.9,
            cor: nivel.cores[Math.floor(Math.random() * nivel.cores.length)],
            largura: 2 + nivel.velocidade / 6
        });
    }
}

function desenhar() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = "lighter";

    // Anéis
    for (let anel of aneis) {
        anel.raio += anel.velocidade;
        anel.velocidade *= 0.96;
        anel.alpha -= 0.014;

        if (anel.alpha > 0) {
            ctx.globalAlpha = anel.alpha;
            ctx.strokeStyle = anel.cor;
            ctx.lineWidth = anel.largura;
            ctx.beginPath();
            ctx.arc(anel.x, anel.y, anel.raio, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    aneis = aneis.filter(a => a.alpha > 0);

    // Partículas
    for (let p of particulas) {
        const xAntes = p.x;
        const yAntes = p.y;

        p.vx *= 0.985;
        p.vy = p.vy * 0.985 + p.gravidade * 6;
        p.x += p.vx;
        p.y += p.vy;
        p.vida -= p.desbote;

        if (p.vida <= 0) continue;

        ctx.globalAlpha = Math.max(p.vida, 0);

        if (p.emoji) {
            ctx.globalCompositeOperation = "source-over";
            ctx.font = "26px serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(p.emoji, p.x, p.y);
            ctx.globalCompositeOperation = "lighter";
        } else if (p.faisca) {
            ctx.strokeStyle = p.cor;
            ctx.lineWidth = p.tamanho;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(xAntes, yAntes);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
        } else {
            ctx.fillStyle = p.cor;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.tamanho, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    particulas = particulas.filter(p => p.vida > 0);

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";

    if (particulas.length > 0 || aneis.length > 0) {
        requestAnimationFrame(desenhar);
    } else {
        animando = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
}

function iniciarDesenho() {
    if (!animando) {
        animando = true;
        requestAnimationFrame(desenhar);
    }
}

function tremer(intensidade) {
    if (!intensidade || reduzirMovimento) return;

    const duracao = 500 + intensidade * 25;
    const passos = Math.round(duracao / 40);
    const quadros = [];

    for (let i = 0; i < passos; i++) {
        const queda = 1 - i / passos;
        quadros.push({
            transform: `translate(${aleatorio(-intensidade, intensidade) * queda}px, ${aleatorio(-intensidade, intensidade) * queda}px)`
        });
    }
    quadros.push({ transform: "translate(0, 0)" });

    container.animate(quadros, { duration: duracao, easing: "linear" });
}

function piscar(intensidade, cor) {
    if (!intensidade || reduzirMovimento) return;

    flash.style.background = cor;
    flash.animate(
        [{ opacity: intensidade }, { opacity: 0 }],
        { duration: 300 + intensidade * 500, easing: "ease-out" }
    );
}

function explodir(nivel) {
    // A explosão sai do número da aura
    const caixa = elAura.getBoundingClientRect();
    const x = caixa.left + caixa.width / 2;
    const y = caixa.top + caixa.height / 2;

    piscar(nivel.flash, nivel.cores[0]);
    tremer(nivel.tremor);

    // Cada onda é uma explosão um pouco mais forte que a anterior
    for (let onda = 0; onda < nivel.ondas; onda++) {
        setTimeout(() => {
            emitir(x, y, nivel, 1 + onda * 0.15);
            iniciarDesenho();
            if (onda > 0) tremer(nivel.tremor * 0.6);
        }, onda * 180);
    }
}


// =========================
// ESPECIAL: 67 (meme)
// =========================

const emojisMeme = ["6️⃣", "7️⃣", "🗿", "🔥", "✨", "💀", "🤯", "🫨"];
const coresFlashMeme = ["#ff00ff", "#00eaff", "#ffee00", "#ff3b3b", "#7cff3b", "#ffffff"];

// Explosão usada nas rajadas do 67: versão do CHAD com menos partículas para não travar
const nivelMeme = Object.assign({}, niveis[niveis.length - 1], {
    particulas: 220, ondas: 1, aneis: 3, tremor: 0, flash: 0
});

function chuvaDeEmojis(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        const e = document.createElement("span");
        e.className = "chuva";
        e.textContent = emojisMeme[Math.floor(Math.random() * emojisMeme.length)];
        e.style.left = aleatorio(0, 96) + "vw";
        e.style.fontSize = aleatorio(28, 84) + "px";
        meme67.appendChild(e);

        const animacao = e.animate([
            { transform: "translateY(-15vh) rotate(0deg)" },
            { transform: `translateY(115vh) rotate(${aleatorio(-720, 720)}deg)` }
        ], {
            duration: aleatorio(1800, 3400),
            delay: aleatorio(0, 900),
            easing: "linear",
            fill: "backwards"
        });

        animacao.onfinish = () => e.remove();
    }
}

function efeito67() {
    const duracao = reduzirMovimento ? 1800 : 5200;

    meme67.hidden = false;
    meme67.classList.remove("ativo");
    void meme67.offsetWidth;
    meme67.classList.add("ativo");

    if (reduzirMovimento) {
        setTimeout(() => { meme67.hidden = true; }, duracao);
        return;
    }

    // Balança para a esquerda, depois para a direita, depois esquerda...
    const quadros = [{ transform: "translateX(0) rotate(0deg)" }];
    const balancos = Math.round(duracao / 330);

    for (let i = 0; i < balancos; i++) {
        quadros.push({
            transform: i % 2 === 0
                ? "translateX(-90px) rotate(-7deg)"
                : "translateX(90px) rotate(7deg)",
            easing: "ease-in-out"
        });
    }
    quadros.push({ transform: "translateX(0) rotate(0deg)" });

    container.animate(quadros, { duration: duracao, easing: "ease-in-out" });

    // Cores enlouquecendo
    container.animate([
        { filter: "hue-rotate(0deg) saturate(1.6)" },
        { filter: "hue-rotate(360deg) saturate(2.6)" }
    ], { duration: 1100, iterations: Math.ceil(duracao / 1100) });

    // Chuva de emojis, em levas
    chuvaDeEmojis(60);
    setTimeout(() => chuvaDeEmojis(50), 1500);
    setTimeout(() => chuvaDeEmojis(50), 3000);

    // Rajadas de explosão e flashes coloridos
    const intervaloExplosao = setInterval(() => {
        emitir(
            aleatorio(window.innerWidth * 0.1, window.innerWidth * 0.9),
            aleatorio(window.innerHeight * 0.1, window.innerHeight * 0.9),
            nivelMeme,
            1
        );
        iniciarDesenho();
    }, 320);

    const intervaloFlash = setInterval(() => {
        piscar(0.35, coresFlashMeme[Math.floor(Math.random() * coresFlashMeme.length)]);
    }, 240);

    setTimeout(() => {
        clearInterval(intervaloExplosao);
        clearInterval(intervaloFlash);
        meme67.hidden = true;
        meme67.classList.remove("ativo");
        meme67.querySelectorAll(".chuva").forEach(e => e.remove());
    }, duracao);
}


// =========================
// RESULTADO
// =========================

function contarAte(alvo, duracao) {
    const inicio = performance.now();

    function quadro(agora) {
        const t = Math.min((agora - inicio) / duracao, 1);
        const suave = 1 - Math.pow(1 - t, 3);
        elAura.textContent = (alvo * suave).toFixed(1);

        if (t < 1) {
            requestAnimationFrame(quadro);
        }
    }

    requestAnimationFrame(quadro);
}

function revelar(aura, digitada) {
    const nivel = descobrirNivel(aura);
    const eh67 = digitada && aura === 67;

    carregando.hidden = true;

    resultado.className = nivel.classe + (eh67 ? " aura-67" : "");
    elNivel.textContent = eh67 ? nivel.nome + " 🗿 6-7" : nivel.nome;
    elAura.textContent = "0.0";
    resultado.hidden = false;

    resultado.scrollIntoView({ behavior: "auto", block: "center" });

    // Espera o navegador posicionar a tela antes de medir de onde a explosão sai
    requestAnimationFrame(() => {
        explodir(nivel);
        contarAte(aura, reduzirMovimento ? 1 : 1200);

        if (eh67) {
            setTimeout(efeito67, 700);
        }
    });
}


// =========================
// EVENTOS
// =========================

botaoComecar.addEventListener("click", comecarQuiz);
botaoRefazer.addEventListener("click", comecarQuiz);

inputAura.addEventListener("input", function () {
    erroAura.textContent = "";
});

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();

    if (calculando) return;

    // Primeira vez: usa o resultado do quiz. Depois: usa a aura digitada.
    let aura;
    const digitada = jaCalculou;

    if (digitada) {
        aura = lerAuraDigitada();
        if (aura === null) return;
    } else {
        aura = auraDoQuiz();
    }

    calculando = true;

    botao.disabled = true;
    botao.textContent = "CALCULANDO...";
    inputAura.disabled = true;
    botaoRefazer.hidden = true;
    resultado.hidden = true;
    finalIntro.hidden = true;

    await suspense();

    revelar(aura, digitada);

    jaCalculou = true;
    discordo.hidden = false;
    botaoRefazer.hidden = false;

    botao.disabled = false;
    botao.textContent = "CALCULAR AURA";
    inputAura.disabled = false;
    calculando = false;
});
