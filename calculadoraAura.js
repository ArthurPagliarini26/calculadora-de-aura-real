// =========================
// CONFIGURAÇÃO
// =========================

const DURACAO_SUSPENSE = 5000; // 5 segundos de carregamento

const quesitos = [
    "presenca", "confianca", "aparencia", "postura", "olhar",
    "voz", "comunicacao", "humor", "autenticidade", "calma",
    "competencia", "reputacao", "misterio", "respeito", "independencia",
    "atitude", "disciplina", "sociabilidade", "estilo", "experiencia"
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

const formulario = document.getElementById("formulario");
const botao = formulario.querySelector("button[type='submit']");
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

let calculando = false;


// =========================
// CÁLCULO
// =========================

function calcularAura() {
    let total = 0;

    for (let quesito of quesitos) {
        let opcao = formulario.elements[quesito];
        total += Number(opcao.value);
    }

    return total / quesitos.length;
}

function descobrirNivel(aura) {
    return niveis.find(n => aura < n.ate);
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
            if (!animando) {
                animando = true;
                requestAnimationFrame(desenhar);
            }
            if (onda > 0) tremer(nivel.tremor * 0.6);
        }, onda * 180);
    }
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

function revelar(aura) {
    const nivel = descobrirNivel(aura);

    carregando.hidden = true;

    resultado.className = nivel.classe;
    elNivel.textContent = nivel.nome;
    elAura.textContent = "0.0";
    resultado.hidden = false;

    resultado.scrollIntoView({ behavior: "auto", block: "center" });

    // Espera o navegador posicionar a tela antes de medir de onde a explosão sai
    requestAnimationFrame(() => {
        explodir(nivel);
        contarAte(aura, reduzirMovimento ? 1 : 1200);
    });
}


// =========================
// ENVIO DO FORMULÁRIO
// =========================

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();

    if (calculando) return;
    calculando = true;

    botao.disabled = true;
    botao.textContent = "CALCULANDO...";
    resultado.hidden = true;

    const aura = calcularAura();

    await suspense();

    revelar(aura);

    botao.disabled = false;
    botao.textContent = "CALCULAR AURA";
    calculando = false;
});
