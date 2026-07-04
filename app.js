// ===== EVOL PEOPLE — app.js (v6: login por CPF + perfis + recrutamento) =====

const API_URL = "https://script.google.com/macros/s/AKfycbw87GkMPg8Zf07i0j7Pecfv_ofxTQYVxuO0THmqBvIxyD2H27GnHMJfAmSJB00XneV_/exec";

// ===== UNIDADES DO GRUPO EVOL =====
const UNIDADES = [
    "PARRILEIRO SUL",
    "PARRILEIRO ALDEOTA",
    "PARRILEIRO RIO MAR",
    "SEU CONRADO EUSÉBIO",
    "EVOL"
];

const UNIDADE_VARIAVEL = "PARRILEIRO RIO MAR";

// ===== FUNÇÕES PADRÃO: SALÁRIO FIXO + COMPLEMENTO =====
const FUNCOES = {
    "AGENTE DE MANUTENÇÃO": { fixo: 2774.02, compl: 0.00 },
    "AJUDANTE DE BAR": { fixo: 1674.49, compl: 320.00 },
    "AJUDANTE DE COZINHA": { fixo: 1674.49, compl: 0.00 },
    "ALMOXARIFE JR": { fixo: 2500.00, compl: 0.00 },
    "ANALISTA DE COMPRAS": { fixo: 3000.00, compl: 0.00 },
    "ANALISTA DE DEPARTAMENTO PESSOAL JR": { fixo: 3000.00, compl: 0.00 },
    "ANALISTA DE PCP": { fixo: 3000.00, compl: 0.00 },
    "ASSISTENTE COMERCIAL JR": { fixo: 900.00, compl: 0.00 },
    "ASSISTENTE DE MKT": { fixo: 2000.00, compl: 0.00 },
    "ASSISTENTE DE RH": { fixo: 2000.00, compl: 0.00 },
    "ATENDENTE JR": { fixo: 1674.49, compl: 350.00 },
    "ATENDENTE PL": { fixo: 1869.59, compl: 0.00 },
    "ATENDENTE SR": { fixo: 2095.56, compl: 350.00 },
    "AUXILIAR DE ALMOXARIFADO": { fixo: 1674.49, compl: 0.00 },
    "AUXILIAR DE BAR": { fixo: 1674.49, compl: 0.00 },
    "AUXILIAR DE BOQUETA": { fixo: 1674.49, compl: 758.25 },
    "AUXILIAR DE COZINHA": { fixo: 1674.49, compl: 450.00 },
    "BARMAN JR": { fixo: 1674.49, compl: 445.64 },
    "BARMAN LÍDER": { fixo: 2110.00, compl: 0.00 },
    "BARMAN PL": { fixo: 1758.02, compl: 833.63 },
    "BARMAN SR": { fixo: 1971.19, compl: 0.00 },
    "BENEFICIADOR": { fixo: 1674.49, compl: 295.00 },
    "CAIXA JR": { fixo: 1674.49, compl: 70.99 },
    "CAIXA SR": { fixo: 1846.25, compl: 250.00 },
    "CHAPEIRO": { fixo: 1674.49, compl: 645.64 },
    "CHEFE DE COZINHA": { fixo: 2954.00, compl: 0.00 },
    "CHURRASQUEIRO(A) JR": { fixo: 1674.49, compl: 745.64 },
    "CHURRASQUEIRO(A) LÍDER": { fixo: 2110.00, compl: 1500.00 },
    "CHURRASQUEIRO(A) PL": { fixo: 1758.02, compl: 1033.63 },
    "CHURRASQUEIRO(A) SR": { fixo: 2095.56, compl: 0.00 },
    "COMPRADOR": { fixo: 5000.00, compl: 0.00 },
    "CONSULTOR (A) DE VENDAS JR": { fixo: 1674.49, compl: 0.00 },
    "CONSULTOR (A) DE VENDAS PL": { fixo: 1833.60, compl: 155.50 },
    "CONSULTOR (A) DE VENDAS SR": { fixo: 2168.89, compl: 289.56 },
    "CONSULTOR DE VENDAS LÍDER": { fixo: 3496.85, compl: 2332.10 },
    "COORDENADOR(A) DE DELIVERY": { fixo: 4348.51, compl: 0.00 },
    "COORDENADOR(A) DE MARKETING": { fixo: 6000.00, compl: 0.00 },
    "COZINHEIRO(A) JR": { fixo: 1674.49, compl: 745.64 },
    "COZINHEIRO(A) PL": { fixo: 1897.79, compl: 875.31 },
    "COZINHEIRO(A) SR": { fixo: 2095.56, compl: 1028.93 },
    "CUMIM": { fixo: 1674.49, compl: 445.54 },
    "GERENTE DE RH": { fixo: 7000.00, compl: 0.00 },
    "HOSTESS": { fixo: 1674.49, compl: 0.00 },
    "MAITRE": { fixo: 4500.00, compl: 0.00 },
    "PORTEIRO": { fixo: 1674.49, compl: 0.00 },
    "SERVIÇOS GERAIS JR": { fixo: 1674.49, compl: 0.00 },
    "SOCIO (A) OPERADOR": { fixo: 0.00, compl: 0.00 },
    "SOCIO DIRETOR": { fixo: 0.00, compl: 0.00 },
    "SUB CHEFE": { fixo: 4500.00, compl: 0.00 },
    "SUPERVISOR (A) DE DELIVERY": { fixo: 2335.77, compl: 486.00 },
    "SUPERVISOR (A) OPERACIONAL": { fixo: 4220.00, compl: 0.00 },
    "TÉCNICO EM AUDIO": { fixo: 2110.00, compl: 0.00 },
    "VIGIA NOTURNO": { fixo: 1674.49, compl: 0.00 }
};

// ===== FUNÇÕES DO RIO MAR: SALÁRIO BASE + VARIÁVEL (teto) =====
const FUNCOES_RIOMAR = {
    "ASSISTENTE DE C&P (KPI 20%)": { fixo: 1800.00, compl: 360.00 },
    "ALMOXARIFE (KPI 20%)": { fixo: 2500.00, compl: 500.00 },
    "AUXILIAR DE ALMOXARIFE (KPI 20%)": { fixo: 1674.00, compl: 334.80 },
    "BARMAN SR": { fixo: 1971.19, compl: 500.00 },
    "BARMAN PL": { fixo: 1798.85, compl: 500.00 },
    "BARMAN JR": { fixo: 1674.00, compl: 445.64 },
    "AUXILIAR DE BAR": { fixo: 1674.00, compl: 200.00 },
    "CHEFE DE COZINHA (PJ) (KPI 20%)": { fixo: 7000.00, compl: 700.00 },
    "SUB CHEFE (PJ) (KPI 20%)": { fixo: 5000.00, compl: 1000.00 },
    "COZINHEIRO SR": { fixo: 1986.31, compl: 1400.00 },
    "COZINHEIRO PL": { fixo: 1738.02, compl: 1100.00 },
    "COZINHEIRO JR": { fixo: 1674.00, compl: 750.00 },
    "CHURRASQUEIRO SR": { fixo: 1986.31, compl: 1400.00 },
    "CHURRASQUEIRO PL": { fixo: 1738.02, compl: 1100.00 },
    "CHURRASQUEIRO JR": { fixo: 1674.00, compl: 750.00 },
    "AJUDANTE DE COZINHA": { fixo: 1674.00, compl: 245.64 },
    "AUXILIAR DE LIMPEZA": { fixo: 1674.00, compl: 245.64 },
    "OPERADOR DE CAIXA - BAR - DELIVERY": { fixo: 1674.00, compl: 200.00 },
    "CUMIM (5X2)": { fixo: 1674.00, compl: 400.00 },
    "SUPERVISOR OPERACIONAL (PJ) (KPI 30%)": { fixo: 6500.00, compl: 1300.00 },
    "MAITRE (KPI 60%)": { fixo: 4000.00, compl: 1600.00 },
    "CONSULTOR DE VENDAS": { fixo: 1674.00, compl: 0.00 },
    "RECEPCIONISTA (5X2) (KPI 60%)": { fixo: 1674.00, compl: 1004.40 }
};

const ROTULOS = {
    padrao: { fixo: "Salário Fixo (automático)", compl: "Complemento (automático)", total: "Salário Total" },
    variavel: { fixo: "Salário Base (automático)", compl: "Variável — até (teto)", total: "Remuneração Total — até" }
};

const OPCOES = {
    valeTransporte: ["SIM", "NÃO"],
    statusAprovacao: ["EM TESTE", "APROVADO", "REPROVADO"],
    aso: ["PENDENTE", "AGENDADO", "REALIZADO"],
    pastaDocumentacao: ["PENDENTE", "INCOMPLETA", "COMPLETA"],
    folga: ["SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO", "DOMINGO"],
    statusAdmissao: ["EM PROCESSO", "ADMITIDO", "CANCELADO"]
};

const TITULOS = {
    inicio: "Início",
    dashboard: "Dashboard",
    pessoas: "Pessoas",
    recrutamento: "Recrutamento",
    avaliacao: "Avaliação de Experiência",
    teste: "Teste Prático",
    feedback: "Feedback",
    dossie: "Dossiê do Colaborador",
    treinamento: "Universidade Evol",
    pdi: "PDI"
};

// ===== OPÇÕES DOS NOVOS MÓDULOS (v7) =====
const ESCALAS = ["5X2", "6X1", "12X36"];

const NIVEIS = ["EXCELENTE", "BOM", "REGULAR", "INSUFICIENTE"];

const CRITERIOS_TESTE = [
    { id: "critTecnico", nome: "Conhecimento técnico", desc: "Domínio dos conteúdos específicos da vaga" },
    { id: "critLogico", nome: "Raciocínio lógico", desc: "Capacidade de análise e tomada de decisão" },
    { id: "critComunicacao", nome: "Comunicação e clareza", desc: "Clareza nas respostas e postura comunicativa" },
    { id: "critOrganizacao", nome: "Organização e tempo", desc: "Cumprimento dos prazos dentro do teste" },
    { id: "critCultura", nome: "Aderência à cultura", desc: "Alinhamento de valores e perfil comportamental" },
    { id: "critExperiencia", nome: "Experiência prática", desc: "Evidências de vivência real na área" }
];

const ETAPAS_PROCESSO = ["TRIAGEM", "ENTREVISTA", "TESTE PRÁTICO", "PROPOSTA"];

const RECOMENDACOES_TESTE = [
    { valor: "APROVAR E CONTRATAR", desc: "Candidato atende aos requisitos da vaga" },
    { valor: "AVANÇAR PARA PRÓXIMA FASE", desc: "Potencial identificado, mas requer mais avaliação" },
    { valor: "BANCO DE TALENTOS", desc: "Bom perfil, mas não para esta vaga agora" },
    { valor: "REPROVAR", desc: "Não atende aos requisitos mínimos" }
];

const VALORES_EVOL = [
    { id: "avProdutividade", nome: "Produtividade e eficiência" },
    { id: "avEquipe", nome: "Trabalho em equipe" },
    { id: "avSensoDono", nome: "Senso de dono" },
    { id: "avInovacao", nome: "Inovação" },
    { id: "avDiferenca", nome: "Fazer a diferença" }
];

const POSTURA_DISCIPLINA = [
    { id: "avPontualidade", nome: "Pontualidade" },
    { id: "avUniforme", nome: "Uso do uniforme / apresentação" },
    { id: "avComportamento", nome: "Comportamento geral" }
];

const RESULTADOS_AVALIACAO = [
    { valor: "EFETIVAÇÃO", desc: "Colaborador atende ao esperado, será efetivado" },
    { valor: "PRORROGAÇÃO", desc: "Segue no período de experiência para nova avaliação" },
    { valor: "DESLIGAMENTO", desc: "Não atende ao esperado, será desligado" }
];

const TIPOS_FEEDBACK = ["FEEDBACK RÁPIDO", "1:1", "90 DIAS", "180 DIAS", "360°", "FEEDBACK CONTÍNUO"];

const TIPOS_OCORRENCIA = [
    "ATRASO", "FALTA INJUSTIFICADA", "ADVERTÊNCIA", "ATESTADO",
    "EPI ENTREGUE", "FARDAMENTO ENTREGUE", "PROMOÇÃO", "ELOGIO / RECONHECIMENTO"
];

// ===== MENU POR PERFIL =====
const MENUS = {
    "RH": [
        { pagina: "dashboard", rotulo: "🏠 Dashboard" },
        { pagina: "pessoas", rotulo: "👥 Pessoas" },
        { pagina: "recrutamento", rotulo: "📋 Recrutamento" },
        { pagina: "avaliacao", rotulo: "📝 Avaliação Experiência" },
        { pagina: "teste", rotulo: "🧪 Teste Prático" },
        { pagina: "feedback", rotulo: "💬 Feedback" },
        { pagina: "dossie", rotulo: "📁 Dossiê" },
        { pagina: "treinamento", rotulo: "🎓 Universidade Evol" },
        { pagina: "pdi", rotulo: "🎯 PDI" }
    ],
    "SOCIO": [
        { pagina: "recrutamento", rotulo: "📋 Recrutamento" }
    ],
    "LIDER": [
        { pagina: "avaliacao", rotulo: "📝 Avaliação Experiência" },
        { pagina: "teste", rotulo: "🧪 Teste Prático" },
        { pagina: "feedback", rotulo: "💬 Feedback" }
    ],
    "COLABORADOR": [
        { pagina: "inicio", rotulo: "🏠 Início" }
    ]
};

// Índices das colunas da aba Colaboradores
const COL = {
    id: 0, nome: 1, funcao: 2, fixo: 3, compl: 4, total: 5, unidade: 6,
    teste1: 7, teste2: 8, teste3: 9, valeTransporte: 10, statusAprovacao: 11,
    aso: 12, pastaDoc: 13, horario: 14, folga: 15, statusAdmissao: 16, observacoes: 17,
    dataAdmissao: 18
};

// ===== ESTADO =====
let USUARIO = null;          // { cpf, senha, nome, perfil, unidade }
let COLABORADORES = [];
let EQUIPE = [];             // colaboradores visíveis pro usuário (líder: só da unidade dele)
let VAGAS = [];
let GRAFICOS = [];

// ===== HELPERS =====
function formatarMoeda(valor) {
    return "R$ " + Number(valor || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function moedaParaNumero(texto) {
    if (!texto) return 0;
    const limpo = String(texto).replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
    const n = parseFloat(limpo);
    return isNaN(n) ? 0 : n;
}

function lerNumero(id) {
    const v = document.getElementById(id).value;
    return v === "" ? 0 : parseFloat(v);
}

function formatarData(valorInput) {
    if (!valorInput) return "";
    const [ano, mes, dia] = valorInput.split("-");
    return `${dia}/${mes}/${ano}`;
}

function dataParaInput(valorBr) {
    if (!valorBr || !valorBr.includes("/")) return "";
    const [dia, mes, ano] = valorBr.split("/");
    return `${ano}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
}

function somenteNumeros(texto) {
    return String(texto || "").replace(/\D/g, "");
}

// ===== COMUNICAÇÃO COM O SERVIDOR =====
async function api(acao, extras = {}) {
    const resposta = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            acao: acao,
            cpf: USUARIO ? USUARIO.cpf : "",
            senha: USUARIO ? USUARIO.senha : "",
            ...extras
        })
    });
    const dados = await resposta.json();

    if (dados.erro === "LOGIN_INVALIDO") {
        USUARIO = null;
        telaLogin("CPF ou senha incorretos. Tente novamente.");
        throw new Error("login inválido");
    }

    if (dados.erro === "SEM_PERMISSAO") {
        alert("Seu perfil não tem permissão para esta ação.");
        throw new Error("sem permissão");
    }

    return dados;
}

// ===== LOGIN =====
function telaLogin(mensagem) {
    document.getElementById("menu").innerHTML = "";
    document.getElementById("tituloPagina").textContent = "Acesso Restrito";
    document.getElementById("app").innerHTML = `
        <div class="card login-card">
            <h2>🔒 Evol People</h2>
            <p class="subtitulo">Sistema de Gestão de Pessoas — Grupo Evol</p>
            ${mensagem ? `<p class="erro-login">${mensagem}</p>` : ""}
            <div class="campo">
                <label>CPF</label>
                <input id="cpfLogin" placeholder="Somente números" inputmode="numeric"
                       onkeydown="if(event.key==='Enter') entrar()">
            </div>
            <div class="campo">
                <label>Senha</label>
                <input id="senhaLogin" type="password" placeholder="Sua senha"
                       onkeydown="if(event.key==='Enter') entrar()">
            </div>
            <button class="btn" onclick="entrar()">Entrar</button>
        </div>
    `;
    setTimeout(() => document.getElementById("cpfLogin").focus(), 100);
}

async function entrar() {
    const cpf = somenteNumeros(document.getElementById("cpfLogin").value);
    const senha = document.getElementById("senhaLogin").value.trim();

    if (!cpf || !senha) {
        alert("Informe CPF e senha.");
        return;
    }

    USUARIO = { cpf: cpf, senha: senha };
    document.getElementById("app").innerHTML = "<p>Verificando...</p>";

    try {
        const resposta = await api("login");
        if (resposta.sucesso) {
            USUARIO.nome = resposta.nome;
            USUARIO.perfil = resposta.perfil;
            USUARIO.unidade = resposta.unidade;

            montarMenu();
            const primeira = MENUS[USUARIO.perfil][0].pagina;
            mostrar(primeira, document.querySelector(".nav-item"));
        }
    } catch (e) { /* login já reexibido pela api() */ }
}

function sair() {
    USUARIO = null;
    telaLogin();
}

function montarMenu() {
    const itens = MENUS[USUARIO.perfil] || [];
    let html = "";
    itens.forEach(i => {
        html += `<button class="nav-item" onclick="mostrar('${i.pagina}', this)">${i.rotulo}</button>`;
    });
    html += `<div class="menu-usuario">
        <span class="menu-nome">👤 ${USUARIO.nome || ""}</span>
        <button class="nav-item nav-sair" onclick="sair()">🚪 Sair</button>
    </div>`;
    document.getElementById("menu").innerHTML = html;
}

function podeVer(pagina) {
    return (MENUS[USUARIO?.perfil] || []).some(i => i.pagina === pagina);
}

// ===== NAVEGAÇÃO =====
function mostrar(pagina, botao) {
    if (!USUARIO || !USUARIO.perfil) { telaLogin(); return; }
    if (!podeVer(pagina)) { alert("Seu perfil não tem acesso a esta área."); return; }

    const app = document.getElementById("app");
    document.getElementById("tituloPagina").textContent = TITULOS[pagina] || "Evol People";

    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    if (botao) botao.classList.add("active");

    if (pagina === "inicio") {
        app.innerHTML = `
            <div class="card">
                <h2>Olá, ${USUARIO.nome}! 👋</h2>
                <p>Bem-vindo(a) ao Evol People.</p>
                <p class="subtitulo">Em breve: registro de ponto, trilhas da Universidade Evol e muito mais.</p>
            </div>
        `;
    }

    if (pagina === "dashboard") {
        carregarDashboard();
    }

    if (pagina === "pessoas") {
        app.innerHTML = `
            <div class="toolbar">
                <button class="btn" onclick="abrirFormulario()">+ Novo Colaborador</button>
                <input id="filtroBusca" class="filtro-busca" placeholder="🔍 Buscar por nome..." oninput="renderizarLista()">
                <select id="filtroUnidade" onchange="renderizarLista()">
                    <option value="">Todas as unidades</option>
                    ${UNIDADES.map(u => `<option value="${u}">${u}</option>`).join("")}
                </select>
                <select id="filtroStatus" onchange="renderizarLista()">
                    <option value="">Todos os status</option>
                    ${OPCOES.statusAdmissao.map(s => `<option value="${s}">${s}</option>`).join("")}
                </select>
            </div>
            <div id="listaColaboradores"><p>Carregando colaboradores...</p></div>
        `;
        carregarColaboradores();
    }

    if (pagina === "recrutamento") {
        app.innerHTML = `<div id="areaVagas"><p>Carregando vagas...</p></div>`;
        carregarVagas();
    }

    if (pagina === "avaliacao") {
        telaAvaliacao();
    }

    if (pagina === "teste") {
        telaTestePratico();
    }

    if (pagina === "feedback") {
        telaFeedback();
    }

    if (pagina === "dossie") {
        telaDossie();
    }

    if (pagina === "treinamento") {
        app.innerHTML = `<div class="card"><h2>Universidade Evol</h2><p>Academia Evol — em construção.</p></div>`;
    }

    if (pagina === "pdi") {
        app.innerHTML = `<div class="card"><h2>PDI</h2><p>Plano de desenvolvimento individual — em construção.</p></div>`;
    }
}

// ===== RECRUTAMENTO (VAGAS) =====
async function carregarVagas() {
    const area = document.getElementById("areaVagas");

    try {
        const resposta = await api("listarVagas");
        if (!resposta.sucesso) {
            area.innerHTML = `<div class="card"><p>Erro ao carregar vagas: ${resposta.erro || ""}</p></div>`;
            return;
        }

        VAGAS = resposta.vagas || [];
        montarTelaVagas();

    } catch (e) {
        const areaAinda = document.getElementById("areaVagas");
        if (USUARIO && areaAinda) areaAinda.innerHTML = "<p>Erro ao conectar com servidor</p>";
    }
}

function vagaAberta(v) {
    const s = (v.status || "").toUpperCase();
    return s !== "ENCERRADA" && s !== "CANCELADA";
}

function montarTelaVagas() {
    const area = document.getElementById("areaVagas");

    const abertas = VAGAS.filter(vagaAberta).length;
    const encerradas = VAGAS.filter(v => (v.status || "").toUpperCase() === "ENCERRADA").length;
    const canceladas = VAGAS.filter(v => (v.status || "").toUpperCase() === "CANCELADA").length;
    const criticas = VAGAS.filter(v => vagaAberta(v) && (v.slaStatus || "").toUpperCase().includes("CRÍTIC")).length;

    // opções de status e unidades existentes nos dados
    const statusUnicos = [...new Set(VAGAS.map(v => v.status).filter(Boolean))];
    const unidadesUnicas = [...new Set(VAGAS.map(v => v.unidade).filter(Boolean))];

    const filtroUnidadeHtml = USUARIO.perfil === "RH"
        ? `<select id="vFiltroUnidade" onchange="renderizarVagas()">
              <option value="">Todas as unidades</option>
              ${unidadesUnicas.map(u => `<option value="${u}">${u}</option>`).join("")}
           </select>`
        : `<span class="badge badge-azul">Unidade: ${USUARIO.unidade || "-"}</span>`;

    area.innerHTML = `
        <div class="cards-grid">
            <div class="card card-indicador">
                <span class="indicador-numero">${abertas}</span>
                <span class="indicador-rotulo">Vagas em aberto</span>
            </div>
            <div class="card card-indicador ind-vermelho">
                <span class="indicador-numero">${criticas}</span>
                <span class="indicador-rotulo">Abertas com SLA crítico</span>
            </div>
            <div class="card card-indicador ind-verde">
                <span class="indicador-numero">${encerradas}</span>
                <span class="indicador-rotulo">Encerradas</span>
            </div>
            <div class="card card-indicador ind-amarelo">
                <span class="indicador-numero">${canceladas}</span>
                <span class="indicador-rotulo">Canceladas</span>
            </div>
        </div>

        <div class="toolbar">
            <input id="vFiltroBusca" class="filtro-busca" placeholder="🔍 Buscar vaga ou candidato..." oninput="renderizarVagas()">
            ${filtroUnidadeHtml}
            <select id="vFiltroStatus" onchange="renderizarVagas()">
                <option value="">Todos os status</option>
                <option value="__ABERTAS__">Somente em aberto</option>
                ${statusUnicos.map(s => `<option value="${s}">${s}</option>`).join("")}
            </select>
        </div>

        <div id="tabelaVagas"></div>
    `;

    renderizarVagas();
}

function renderizarVagas() {
    const alvo = document.getElementById("tabelaVagas");
    if (!alvo) return;

    const busca = (document.getElementById("vFiltroBusca")?.value || "").toUpperCase();
    const fUnidade = document.getElementById("vFiltroUnidade")?.value || "";
    const fStatus = document.getElementById("vFiltroStatus")?.value || "";

    const filtradas = VAGAS.filter(v => {
        const texto = `${v.vaga} ${v.candidato}`.toUpperCase();
        const okBusca = !busca || texto.includes(busca);
        const okUnidade = !fUnidade || v.unidade === fUnidade;
        const okStatus = !fStatus
            || (fStatus === "__ABERTAS__" ? vagaAberta(v) : v.status === fStatus);
        return okBusca && okUnidade && okStatus;
    });

    if (VAGAS.length === 0) {
        alvo.innerHTML = `<div class="card"><p>Nenhuma vaga encontrada${USUARIO.perfil === "SOCIO" ? " para a sua unidade" : ""}.</p></div>`;
        return;
    }

    if (filtradas.length === 0) {
        alvo.innerHTML = `<div class="card"><p>Nenhuma vaga com esses filtros.</p></div>`;
        return;
    }

    let html = `
        <div class="card tabela-wrap">
            <table class="tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vaga</th>
                        <th>Unidade</th>
                        <th>Setor</th>
                        <th>Gestor</th>
                        <th>Abertura</th>
                        <th>Dias em aberto</th>
                        <th>Candidato</th>
                        <th>Status</th>
                        <th>SLA</th>
                    </tr>
                </thead>
                <tbody>
    `;

    filtradas.forEach(v => {
        html += `
            <tr>
                <td>${v.id}</td>
                <td><strong>${v.vaga}</strong></td>
                <td>${v.unidade}</td>
                <td>${v.setor}</td>
                <td>${v.gestor}</td>
                <td>${v.dataAbertura}</td>
                <td>${v.diasAberto}</td>
                <td>${v.candidato}</td>
                <td><span class="badge badge-${badgeStatusVaga(v.status)}">${v.status || "-"}</span></td>
                <td><span class="badge badge-${badgeSla(v.slaStatus)}">${v.slaStatus || "-"}</span></td>
            </tr>
        `;
    });

    html += `</tbody></table></div>
        <p class="contagem">${filtradas.length} vaga(s) exibida(s) de ${VAGAS.length} no total</p>`;
    alvo.innerHTML = html;
}

function badgeStatusVaga(status) {
    const s = (status || "").toUpperCase();
    if (s === "ENCERRADA") return "verde";
    if (s === "CANCELADA") return "vermelho";
    return "azul"; // em aberto / em andamento
}

function badgeSla(sla) {
    const s = (sla || "").toUpperCase();
    if (s.includes("CRÍTIC") || s.includes("CRITIC")) return "vermelho";
    if (s.includes("ATEN")) return "amarelo";
    return "verde";
}

// ===== DASHBOARD (RH) =====
async function carregarDashboard() {
    const app = document.getElementById("app");
    app.innerHTML = "<p>Carregando indicadores...</p>";

    try {
        const dados = await api("listarColaboradores");
        if (!dados.sucesso) { app.innerHTML = "<p>Erro ao carregar</p>"; return; }

        COLABORADORES = dados.dados.slice(1);

        const total = COLABORADORES.length;
        const contar = (status) => COLABORADORES.filter(l => l[COL.statusAdmissao] === status).length;
        const emProcesso = contar("EM PROCESSO");
        const admitidos = contar("ADMITIDO");
        const cancelados = contar("CANCELADO");

        const porUnidade = {};
        UNIDADES.forEach(u => porUnidade[u] = 0);
        COLABORADORES.forEach(l => {
            const u = l[COL.unidade];
            if (u in porUnidade) porUnidade[u]++;
        });

        app.innerHTML = `
            <div class="cards-grid">
                <div class="card card-indicador">
                    <span class="indicador-numero">${total}</span>
                    <span class="indicador-rotulo">Colaboradores cadastrados</span>
                </div>
                <div class="card card-indicador ind-amarelo">
                    <span class="indicador-numero">${emProcesso}</span>
                    <span class="indicador-rotulo">Em processo de admissão</span>
                </div>
                <div class="card card-indicador ind-verde">
                    <span class="indicador-numero">${admitidos}</span>
                    <span class="indicador-rotulo">Admitidos</span>
                </div>
                <div class="card card-indicador ind-vermelho">
                    <span class="indicador-numero">${cancelados}</span>
                    <span class="indicador-rotulo">Cancelados</span>
                </div>
            </div>

            <div class="graficos-grid">
                <div class="card">
                    <h3>Colaboradores por unidade</h3>
                    <canvas id="graficoUnidades"></canvas>
                </div>
                <div class="card">
                    <h3>Status de admissão</h3>
                    <canvas id="graficoStatus"></canvas>
                </div>
            </div>
        `;

        GRAFICOS.forEach(g => g.destroy());
        GRAFICOS = [];

        if (total > 0) {
            GRAFICOS.push(new Chart(document.getElementById("graficoUnidades"), {
                type: "bar",
                data: {
                    labels: Object.keys(porUnidade),
                    datasets: [{
                        label: "Colaboradores",
                        data: Object.values(porUnidade),
                        backgroundColor: "#163A70",
                        borderRadius: 6
                    }]
                },
                options: {
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
                }
            }));

            GRAFICOS.push(new Chart(document.getElementById("graficoStatus"), {
                type: "doughnut",
                data: {
                    labels: ["Em processo", "Admitidos", "Cancelados"],
                    datasets: [{
                        data: [emProcesso, admitidos, cancelados],
                        backgroundColor: ["#F59E0B", "#16A34A", "#DC2626"]
                    }]
                },
                options: { plugins: { legend: { position: "bottom" } } }
            }));
        }

    } catch (e) {
        if (USUARIO) app.innerHTML = "<p>Erro ao conectar com servidor</p>";
    }
}

// ===== LISTAGEM DE COLABORADORES (RH) =====
async function carregarColaboradores() {
    const lista = document.getElementById("listaColaboradores");
    lista.innerHTML = "<p>Carregando...</p>";

    try {
        const dados = await api("listarColaboradores");
        if (!dados.sucesso) { lista.innerHTML = "<p>Erro ao carregar</p>"; return; }

        COLABORADORES = dados.dados.slice(1);
        renderizarLista();

    } catch (e) {
        if (USUARIO) lista.innerHTML = "<p>Erro ao conectar com servidor</p>";
    }
}

function renderizarLista() {
    const lista = document.getElementById("listaColaboradores");
    if (!lista) return;

    const busca = (document.getElementById("filtroBusca")?.value || "").toUpperCase();
    const fUnidade = document.getElementById("filtroUnidade")?.value || "";
    const fStatus = document.getElementById("filtroStatus")?.value || "";

    const filtrados = COLABORADORES.filter(l => {
        const okBusca = !busca || String(l[COL.nome]).toUpperCase().includes(busca);
        const okUnidade = !fUnidade || l[COL.unidade] === fUnidade;
        const okStatus = !fStatus || l[COL.statusAdmissao] === fStatus;
        return okBusca && okUnidade && okStatus;
    });

    if (COLABORADORES.length === 0) {
        lista.innerHTML = `<div class="card"><p>Nenhum colaborador cadastrado ainda. Clique em <strong>+ Novo Colaborador</strong> para começar.</p></div>`;
        return;
    }

    if (filtrados.length === 0) {
        lista.innerHTML = `<div class="card"><p>Nenhum colaborador encontrado com esses filtros.</p></div>`;
        return;
    }

    let html = `
        <div class="card tabela-wrap">
            <table class="tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome Completo</th>
                        <th>Função</th>
                        <th>Unidade</th>
                        <th>Remuneração</th>
                        <th>Status Admissão</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
    `;

    filtrados.forEach(l => {
        html += `
            <tr>
                <td>${l[COL.id]}</td>
                <td><strong>${l[COL.nome]}</strong></td>
                <td>${l[COL.funcao]}</td>
                <td>${l[COL.unidade]}</td>
                <td>${l[COL.total]}</td>
                <td><span class="badge badge-${classeStatus(l[COL.statusAdmissao])}">${l[COL.statusAdmissao] || "-"}</span></td>
                <td class="acoes">
                    <button class="btn-acao" title="Editar" onclick="abrirFormulario(${l[COL.id]})">✏️</button>
                    <button class="btn-acao" title="Excluir" onclick="confirmarExclusao(${l[COL.id]})">🗑️</button>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table></div>
        <p class="contagem">${filtrados.length} colaborador(es) exibido(s) de ${COLABORADORES.length} no total</p>`;
    lista.innerHTML = html;
}

function classeStatus(status) {
    if (status === "ADMITIDO") return "verde";
    if (status === "CANCELADO") return "vermelho";
    return "amarelo";
}

// ===== EXCLUIR =====
async function confirmarExclusao(id) {
    const registro = COLABORADORES.find(l => String(l[COL.id]) === String(id));
    const nome = registro ? registro[COL.nome] : "este colaborador";

    if (!confirm(`Tem certeza que deseja EXCLUIR "${nome}"?\n\nEssa ação não pode ser desfeita.`)) return;

    try {
        const resposta = await api("excluirColaborador", { id: id });
        if (resposta.sucesso) {
            carregarColaboradores();
        } else {
            alert("Não foi possível excluir: " + (resposta.erro || "erro desconhecido"));
        }
    } catch (e) { }
}

// ===== FORMULÁRIO (novo OU edição) =====
function ehRioMarSelecionado() {
    return document.getElementById("unidade").value === UNIDADE_VARIAVEL;
}

function tabelaAtual() {
    return ehRioMarSelecionado() ? FUNCOES_RIOMAR : FUNCOES;
}

function gerarSelect(id, opcoes, placeholder) {
    let html = `<select id="${id}"><option value="">${placeholder}</option>`;
    opcoes.forEach(o => { html += `<option value="${o}">${o}</option>`; });
    html += `</select>`;
    return html;
}

function abrirFormulario(idEdicao) {
    const app = document.getElementById("app");
    const editando = idEdicao !== undefined;
    const registro = editando ? COLABORADORES.find(l => String(l[COL.id]) === String(idEdicao)) : null;

    app.innerHTML = `
        <div class="card formulario">
            <h2>${editando ? "Editar Colaborador #" + idEdicao : "Novo Colaborador"}</h2>
            <p class="subtitulo">Controle de Admissões — Grupo Evol</p>

            <div class="grid-form">

                <div class="campo campo-cheio">
                    <label>Nome Completo *</label>
                    <input id="nome" placeholder="Nome completo do colaborador">
                </div>

                <div class="campo">
                    <label>Unidade (Operação) *</label>
                    ${gerarSelect("unidade", UNIDADES, "Selecione a unidade")}
                </div>

                <div class="campo">
                    <label>Função *</label>
                    <select id="funcao" disabled>
                        <option value="">Escolha a unidade primeiro</option>
                    </select>
                </div>

                <div class="campo">
                    <label>Horário</label>
                    <input id="horario" placeholder="Ex.: 08H ÀS 16H">
                </div>

                <div class="campo">
                    <label id="rotuloFixo">Salário Fixo (automático)</label>
                    <input id="salarioFixo" type="number" step="0.01" min="0" placeholder="0,00">
                </div>

                <div class="campo" id="campoCompl">
                    <label id="rotuloCompl">Complemento (automático)</label>
                    <input id="salarioCompl" type="number" step="0.01" min="0" placeholder="0,00">
                </div>

                <div class="campo">
                    <label id="rotuloTotal">Salário Total</label>
                    <input id="salarioTotal" readonly class="campo-total" placeholder="R$ 0,00">
                </div>

                <div class="campo">
                    <label>Data de Admissão</label>
                    <input id="dataAdmissao" type="date">
                </div>

                <div class="campo">
                    <label>1º Dia de Teste</label>
                    <input id="teste1" type="date">
                </div>

                <div class="campo">
                    <label>2º Dia de Teste</label>
                    <input id="teste2" type="date">
                </div>

                <div class="campo">
                    <label>3º Dia de Teste</label>
                    <input id="teste3" type="date">
                </div>

                <div class="campo">
                    <label>Vale Transporte (Teste)</label>
                    ${gerarSelect("valeTransporte", OPCOES.valeTransporte, "Selecione")}
                </div>

                <div class="campo">
                    <label>Status de Aprovação</label>
                    ${gerarSelect("statusAprovacao", OPCOES.statusAprovacao, "Selecione")}
                </div>

                <div class="campo">
                    <label>ASO</label>
                    ${gerarSelect("aso", OPCOES.aso, "Selecione")}
                </div>

                <div class="campo">
                    <label>Pasta de Documentação</label>
                    ${gerarSelect("pastaDoc", OPCOES.pastaDocumentacao, "Selecione")}
                </div>

                <div class="campo">
                    <label>Folga</label>
                    ${gerarSelect("folga", OPCOES.folga, "Selecione o dia")}
                </div>

                <div class="campo">
                    <label>Status de Admissão *</label>
                    ${gerarSelect("statusAdmissao", OPCOES.statusAdmissao, "Selecione")}
                </div>

                <div class="campo campo-cheio">
                    <label>Observações</label>
                    <textarea id="observacoes" rows="3" placeholder="Anotações sobre o processo de admissão"></textarea>
                </div>

            </div>

            <button class="btn" onclick="salvarColaborador(${editando ? idEdicao : ""})">
                ${editando ? "Salvar Alterações" : "Salvar Colaborador"}
            </button>
            <button class="btn btn-secundario" onclick="mostrar('pessoas', document.querySelectorAll('.nav-item')[1])">Cancelar</button>
        </div>
    `;

    document.getElementById("unidade").addEventListener("change", function () {
        atualizarListaFuncoes();
        atualizarRotulos();
        limparSalarios();
    });

    document.getElementById("funcao").addEventListener("change", function () {
        const f = tabelaAtual()[this.value];
        if (f) {
            document.getElementById("salarioFixo").value = f.fixo.toFixed(2);
            document.getElementById("salarioCompl").value = f.compl.toFixed(2);
        }
        atualizarTotal();
    });

    document.getElementById("salarioFixo").addEventListener("input", atualizarTotal);
    document.getElementById("salarioCompl").addEventListener("input", atualizarTotal);

    if (registro) {
        document.getElementById("nome").value = registro[COL.nome] || "";
        document.getElementById("unidade").value = registro[COL.unidade] || "";

        atualizarListaFuncoes();
        atualizarRotulos();

        const selectFuncao = document.getElementById("funcao");
        const funcaoSalva = registro[COL.funcao] || "";
        if (funcaoSalva && !Object.keys(tabelaAtual()).includes(funcaoSalva)) {
            selectFuncao.innerHTML += `<option value="${funcaoSalva}">${funcaoSalva}</option>`;
        }
        selectFuncao.value = funcaoSalva;

        document.getElementById("salarioFixo").value = moedaParaNumero(registro[COL.fixo]).toFixed(2);
        document.getElementById("salarioCompl").value = moedaParaNumero(registro[COL.compl]).toFixed(2);
        atualizarTotal();

        document.getElementById("horario").value = registro[COL.horario] || "";
        document.getElementById("dataAdmissao").value = dataParaInput(registro[COL.dataAdmissao]);
        document.getElementById("teste1").value = dataParaInput(registro[COL.teste1]);
        document.getElementById("teste2").value = dataParaInput(registro[COL.teste2]);
        document.getElementById("teste3").value = dataParaInput(registro[COL.teste3]);
        document.getElementById("valeTransporte").value = registro[COL.valeTransporte] || "";
        document.getElementById("statusAprovacao").value = registro[COL.statusAprovacao] || "";
        document.getElementById("aso").value = registro[COL.aso] || "";
        document.getElementById("pastaDoc").value = registro[COL.pastaDoc] || "";
        document.getElementById("folga").value = registro[COL.folga] || "";
        document.getElementById("statusAdmissao").value = registro[COL.statusAdmissao] || "";
        document.getElementById("observacoes").value = registro[COL.observacoes] || "";
    }
}

function atualizarListaFuncoes() {
    const select = document.getElementById("funcao");
    const unidade = document.getElementById("unidade").value;

    if (!unidade) {
        select.disabled = true;
        select.innerHTML = `<option value="">Escolha a unidade primeiro</option>`;
        return;
    }

    select.disabled = false;
    let html = `<option value="">Selecione a função</option>`;
    Object.keys(tabelaAtual()).forEach(f => { html += `<option value="${f}">${f}</option>`; });
    select.innerHTML = html;
}

function atualizarRotulos() {
    const r = ehRioMarSelecionado() ? ROTULOS.variavel : ROTULOS.padrao;
    document.getElementById("rotuloFixo").textContent = r.fixo;
    document.getElementById("rotuloCompl").textContent = r.compl;
    document.getElementById("rotuloTotal").textContent = r.total;
    document.getElementById("campoCompl").classList.toggle("campo-variavel", ehRioMarSelecionado());
}

function limparSalarios() {
    document.getElementById("salarioFixo").value = "";
    document.getElementById("salarioCompl").value = "";
    document.getElementById("salarioTotal").value = "";
}

function atualizarTotal() {
    const total = lerNumero("salarioFixo") + lerNumero("salarioCompl");
    const prefixo = ehRioMarSelecionado() ? "até " : "";
    document.getElementById("salarioTotal").value = prefixo + formatarMoeda(total);
}

// ===== SALVAR (novo ou edição) =====
async function salvarColaborador(idEdicao) {
    const nome = document.getElementById("nome").value.trim();
    const unidade = document.getElementById("unidade").value;
    const funcao = document.getElementById("funcao").value;
    const statusAdmissao = document.getElementById("statusAdmissao").value;

    if (!nome || !unidade || !funcao || !statusAdmissao) {
        alert("Preencha os campos obrigatórios (*): Nome, Unidade, Função e Status de Admissão.");
        return;
    }

    const fixo = lerNumero("salarioFixo");
    const compl = lerNumero("salarioCompl");
    const rioMar = unidade === UNIDADE_VARIAVEL;
    const editando = idEdicao !== undefined && idEdicao !== "";

    const dados = {
        nome: nome,
        funcao: funcao,
        salarioFixo: formatarMoeda(fixo),
        salarioCompl: formatarMoeda(compl) + (rioMar ? " (variável)" : ""),
        salarioTotal: (rioMar ? "até " : "") + formatarMoeda(fixo + compl),
        unidade: unidade,
        teste1: formatarData(document.getElementById("teste1").value),
        teste2: formatarData(document.getElementById("teste2").value),
        teste3: formatarData(document.getElementById("teste3").value),
        valeTransporte: document.getElementById("valeTransporte").value,
        statusAprovacao: document.getElementById("statusAprovacao").value,
        aso: document.getElementById("aso").value,
        pastaDoc: document.getElementById("pastaDoc").value,
        horario: document.getElementById("horario").value.trim(),
        folga: document.getElementById("folga").value,
        statusAdmissao: statusAdmissao,
        observacoes: document.getElementById("observacoes").value.trim(),
        dataAdmissao: formatarData(document.getElementById("dataAdmissao").value)
    };

    try {
        let resposta;
        if (editando) {
            resposta = await api("atualizarColaborador", { id: idEdicao, ...dados });
        } else {
            resposta = await api("salvarColaborador", dados);
        }

        if (resposta.sucesso) {
            alert(editando ? "Alterações salvas com sucesso!" : "Colaborador salvo com sucesso!");
            mostrar("pessoas", document.querySelectorAll(".nav-item")[1]);
        } else {
            alert("Erro ao salvar: " + (resposta.erro || "erro desconhecido"));
        }
    } catch (e) { }
}

// ===================================================================
// ===== MÓDULOS v7: AVALIAÇÃO, TESTE PRÁTICO, FEEDBACK E DOSSIÊ =====
// ===================================================================

// ===== EQUIPE (colaboradores visíveis pro usuário logado) =====
async function carregarEquipe() {
    const resposta = await api("listarEquipe");
    EQUIPE = resposta.sucesso ? (resposta.equipe || []) : [];
    return EQUIPE;
}

function selectColaboradores(id) {
    let html = `<select id="${id}"><option value="">Selecione o colaborador</option>`;
    EQUIPE.forEach(c => {
        html += `<option value="${c.id}">${c.nome} — ${c.funcao} (${c.unidade})</option>`;
    });
    html += `</select>`;
    return html;
}

function colaboradorPorId(id) {
    return EQUIPE.find(c => String(c.id) === String(id));
}

function gerarRadios(nomeGrupo, opcoes) {
    let html = `<div class="radio-grid">`;
    opcoes.forEach((o, i) => {
        html += `
            <label class="radio-card">
                <input type="radio" name="${nomeGrupo}" value="${o.valor}">
                <span><strong>${o.valor}</strong><small>${o.desc}</small></span>
            </label>
        `;
    });
    html += `</div>`;
    return html;
}

function valorRadio(nomeGrupo) {
    const marcado = document.querySelector(`input[name="${nomeGrupo}"]:checked`);
    return marcado ? marcado.value : "";
}

function selectNiveis(id) {
    return gerarSelect(id, NIVEIS, "Selecione...");
}

// ===================================================================
// ===== TESTE PRÁTICO (candidatos) ==================================
// ===================================================================
function telaTestePratico() {
    const app = document.getElementById("app");
    const unidadeLider = USUARIO.perfil === "LIDER" ? USUARIO.unidade : "";

    let criteriosHtml = "";
    CRITERIOS_TESTE.forEach(c => {
        criteriosHtml += `
            <label class="check-card">
                <input type="checkbox" id="${c.id}">
                <span><strong>${c.nome}</strong><small>${c.desc}</small></span>
            </label>
        `;
    });

    app.innerHTML = `
        <div class="card formulario">
            <h2>🧪 Teste Prático</h2>
            <p class="subtitulo">Registro de resultado — Dados do candidato</p>

            <div class="grid-form">
                <div class="campo">
                    <label>Unidade *</label>
                    ${USUARIO.perfil === "LIDER"
                        ? `<input id="tUnidade" value="${unidadeLider}" readonly class="campo-total">`
                        : gerarSelect("tUnidade", UNIDADES, "Selecione a unidade...")}
                </div>

                <div class="campo">
                    <label>Nome do candidato *</label>
                    <input id="tCandidato" placeholder="Nome completo">
                </div>

                <div class="campo">
                    <label>Vaga pretendida *</label>
                    <input id="tVaga" placeholder="Ex.: Cozinheiro JR">
                </div>

                <div class="campo">
                    <label>Setor</label>
                    ${gerarSelect("tSetor", ["SALÃO", "COZINHA", "BAR", "PARRILLA", "BURGER&PONTO", "ADMINISTRATIVO", "DELIVERY", "ALMOXARIFADO", "OUTRO"], "Selecione...")}
                </div>

                <div class="campo">
                    <label>Data do teste *</label>
                    <input id="tData" type="date">
                </div>

                <div class="campo">
                    <label>Etapa do processo seletivo</label>
                    ${gerarSelect("tEtapa", ETAPAS_PROCESSO, "Selecione...")}
                </div>

                <div class="campo">
                    <label>Escala *</label>
                    ${gerarSelect("tEscala", ESCALAS, "Selecione a escala...")}
                </div>

                <div class="campo">
                    <label>Dia de folga *</label>
                    ${gerarSelect("tFolga", OPCOES.folga, "Selecione o dia...")}
                </div>

                <div class="campo">
                    <label>Avaliador responsável *</label>
                    <input id="tAvaliador" placeholder="Quem aplicou o teste">
                </div>
            </div>

            <h3 class="secao-form">Critérios avaliados</h3>
            <p class="subtitulo">Marque os critérios em que o candidato foi aprovado</p>
            <div class="check-grid">${criteriosHtml}</div>

            <div class="grid-form" style="margin-top:16px">
                <div class="campo">
                    <label>Nota final (0–10)</label>
                    <input id="tNota" type="number" min="0" max="10" step="0.1" placeholder="0.0">
                </div>
                <div class="campo">
                    <label>Nota mínima</label>
                    <input id="tNotaMinima" type="number" min="0" max="10" step="0.1" placeholder="0.0">
                </div>
                <div class="campo">
                    <label>Satisfação do avaliador (1 a 5)</label>
                    ${gerarSelect("tSatisfacao", ["1 — Muito insatisfeito", "2 — Insatisfeito", "3 — Neutro", "4 — Satisfeito", "5 — Muito satisfeito"], "Selecione...")}
                </div>
            </div>

            <h3 class="secao-form">Parecer do avaliador</h3>

            <div class="campo" style="margin-bottom:14px">
                <label>Pontos fortes do candidato</label>
                <textarea id="tPontosFortes" rows="3"></textarea>
            </div>

            <div class="campo" style="margin-bottom:14px">
                <label>Pontos de atenção</label>
                <textarea id="tPontosAtencao" rows="3"></textarea>
            </div>

            <label class="rotulo-grupo">Recomendação final *</label>
            ${gerarRadios("tRecomendacao", RECOMENDACOES_TESTE)}

            <br>
            <button class="btn" onclick="salvarTeste()">Registrar resultado do teste</button>
        </div>
    `;
}

async function salvarTeste() {
    const unidade = USUARIO.perfil === "LIDER" ? USUARIO.unidade : document.getElementById("tUnidade").value;
    const candidato = document.getElementById("tCandidato").value.trim();
    const vaga = document.getElementById("tVaga").value.trim();
    const dataTeste = document.getElementById("tData").value;
    const escala = document.getElementById("tEscala").value;
    const folga = document.getElementById("tFolga").value;
    const avaliador = document.getElementById("tAvaliador").value.trim();
    const recomendacao = valorRadio("tRecomendacao");

    if (!unidade || !candidato || !vaga || !dataTeste || !escala || !folga || !avaliador || !recomendacao) {
        alert("Preencha os campos obrigatórios (*): Unidade, Candidato, Vaga, Data, Escala, Folga, Avaliador e Recomendação.");
        return;
    }

    const criteriosAprovados = CRITERIOS_TESTE
        .filter(c => document.getElementById(c.id).checked)
        .map(c => c.nome)
        .join("; ");

    const dados = {
        unidade: unidade,
        candidato: candidato,
        vaga: vaga,
        setor: document.getElementById("tSetor").value,
        dataTeste: formatarData(dataTeste),
        etapa: document.getElementById("tEtapa").value,
        escala: escala,
        folga: folga,
        avaliador: avaliador,
        criterios: criteriosAprovados,
        nota: document.getElementById("tNota").value,
        notaMinima: document.getElementById("tNotaMinima").value,
        satisfacao: document.getElementById("tSatisfacao").value,
        pontosFortes: document.getElementById("tPontosFortes").value.trim(),
        pontosAtencao: document.getElementById("tPontosAtencao").value.trim(),
        recomendacao: recomendacao
    };

    try {
        const resposta = await api("salvarTeste", dados);
        if (resposta.sucesso) {
            alert("Resultado do teste registrado com sucesso!");
            telaTestePratico();
        } else {
            alert("Erro ao registrar: " + (resposta.erro || ""));
        }
    } catch (e) { }
}

// ===================================================================
// ===== AVALIAÇÃO DE PERÍODO DE EXPERIÊNCIA =========================
// ===================================================================
async function telaAvaliacao() {
    const app = document.getElementById("app");
    app.innerHTML = "<p>Carregando colaboradores...</p>";

    try {
        await carregarEquipe();
    } catch (e) { return; }

    let valoresHtml = "";
    VALORES_EVOL.forEach(v => {
        valoresHtml += `
            <div class="campo">
                <label>${v.nome} *</label>
                ${selectNiveis(v.id)}
            </div>
        `;
    });

    let posturaHtml = "";
    POSTURA_DISCIPLINA.forEach(v => {
        posturaHtml += `
            <div class="campo">
                <label>${v.nome} *</label>
                ${selectNiveis(v.id)}
            </div>
        `;
    });

    app.innerHTML = `
        <div class="card formulario">
            <h2>📝 Avaliação de Período de Experiência</h2>
            <p class="subtitulo">Identificação e etapa da avaliação</p>

            <div class="grid-form">
                <div class="campo campo-cheio">
                    <label>Colaborador *</label>
                    ${selectColaboradores("aColaborador")}
                </div>

                <div class="campo">
                    <label>Nome do gestor *</label>
                    <input id="aGestor" value="${USUARIO.nome || ""}" placeholder="Quem está avaliando">
                </div>

                <div class="campo">
                    <label>Data de admissão</label>
                    <input id="aAdmissao" type="date">
                </div>

                <div class="campo">
                    <label>Data desta avaliação *</label>
                    <input id="aData" type="date">
                </div>
            </div>

            <label class="rotulo-grupo">Etapa da avaliação *</label>
            ${gerarRadios("aEtapa", [
                { valor: "1ª AVALIAÇÃO — 45 DIAS", desc: "Primeira metade do período de experiência" },
                { valor: "2ª AVALIAÇÃO — 90 DIAS", desc: "Segunda metade (total de 90 dias)" }
            ])}

            <h3 class="secao-form">Nossos valores</h3>
            <p class="subtitulo">Avalie a conduta do colaborador em cada valor do Grupo Evol</p>
            <div class="grid-form">${valoresHtml}</div>

            <h3 class="secao-form">Postura e disciplina</h3>
            <p class="subtitulo">Comportamento no dia a dia</p>
            <div class="grid-form">${posturaHtml}</div>

            <h3 class="secao-form">Parecer e resultado</h3>
            <p class="subtitulo">Conclusão desta etapa da avaliação</p>

            <div class="campo" style="margin-bottom:14px">
                <label>Pontos fortes observados</label>
                <textarea id="aPontosFortes" rows="3"></textarea>
            </div>

            <div class="campo" style="margin-bottom:14px">
                <label>Pontos de atenção / desenvolvimento</label>
                <textarea id="aPontosAtencao" rows="3"></textarea>
            </div>

            <div class="campo" style="margin-bottom:14px">
                <label>Plano de ação (se houver prorrogação)</label>
                <textarea id="aPlanoAcao" rows="3" placeholder="O que precisa melhorar até a próxima avaliação"></textarea>
            </div>

            <label class="rotulo-grupo">Resultado desta avaliação *</label>
            ${gerarRadios("aResultado", RESULTADOS_AVALIACAO)}

            <br>
            <button class="btn" onclick="salvarAvaliacao()">Registrar avaliação</button>
        </div>
    `;

    // preenche a data de admissão automaticamente ao escolher o colaborador
    document.getElementById("aColaborador").addEventListener("change", function () {
        const c = colaboradorPorId(this.value);
        if (c && c.dataAdmissao) {
            document.getElementById("aAdmissao").value = dataParaInput(c.dataAdmissao);
        }
    });
}

async function salvarAvaliacao() {
    const idColab = document.getElementById("aColaborador").value;
    const gestor = document.getElementById("aGestor").value.trim();
    const dataAvaliacao = document.getElementById("aData").value;
    const etapa = valorRadio("aEtapa");
    const resultado = valorRadio("aResultado");

    if (!idColab || !gestor || !dataAvaliacao || !etapa || !resultado) {
        alert("Preencha os campos obrigatórios (*): Colaborador, Gestor, Data, Etapa e Resultado.");
        return;
    }

    // todos os selects de nível são obrigatórios
    for (const v of [...VALORES_EVOL, ...POSTURA_DISCIPLINA]) {
        if (!document.getElementById(v.id).value) {
            alert(`Avalie o item: ${v.nome}`);
            return;
        }
    }

    const c = colaboradorPorId(idColab);

    const dados = {
        colaboradorId: idColab,
        colaborador: c ? c.nome : "",
        unidade: c ? c.unidade : "",
        gestor: gestor,
        dataAdmissao: formatarData(document.getElementById("aAdmissao").value),
        dataAvaliacao: formatarData(dataAvaliacao),
        etapa: etapa,
        produtividade: document.getElementById("avProdutividade").value,
        trabalhoEquipe: document.getElementById("avEquipe").value,
        sensoDono: document.getElementById("avSensoDono").value,
        inovacao: document.getElementById("avInovacao").value,
        fazerDiferenca: document.getElementById("avDiferenca").value,
        pontualidade: document.getElementById("avPontualidade").value,
        uniforme: document.getElementById("avUniforme").value,
        comportamento: document.getElementById("avComportamento").value,
        pontosFortes: document.getElementById("aPontosFortes").value.trim(),
        pontosAtencao: document.getElementById("aPontosAtencao").value.trim(),
        planoAcao: document.getElementById("aPlanoAcao").value.trim(),
        resultado: resultado
    };

    try {
        const resposta = await api("salvarAvaliacao", dados);
        if (resposta.sucesso) {
            alert("Avaliação registrada com sucesso!");
            telaAvaliacao();
        } else {
            alert("Erro ao registrar: " + (resposta.erro || ""));
        }
    } catch (e) { }
}

// ===================================================================
// ===== FEEDBACK ====================================================
// ===================================================================
async function telaFeedback() {
    const app = document.getElementById("app");
    app.innerHTML = "<p>Carregando colaboradores...</p>";

    try {
        await carregarEquipe();
    } catch (e) { return; }

    app.innerHTML = `
        <div class="card formulario">
            <h2>💬 Registro de Feedback</h2>
            <p class="subtitulo">Feedback estruturado para o colaborador</p>

            <div class="grid-form">
                <div class="campo campo-cheio">
                    <label>Colaborador *</label>
                    ${selectColaboradores("fColaborador")}
                </div>

                <div class="campo">
                    <label>Tipo de feedback *</label>
                    ${gerarSelect("fTipo", TIPOS_FEEDBACK, "Selecione...")}
                </div>

                <div class="campo">
                    <label>Data do feedback *</label>
                    <input id="fData" type="date">
                </div>
            </div>

            <div class="campo" style="margin-bottom:14px">
                <label>Pontos fortes / reconhecimentos</label>
                <textarea id="fPontosFortes" rows="3" placeholder="O que o colaborador está fazendo bem"></textarea>
            </div>

            <div class="campo" style="margin-bottom:14px">
                <label>Pontos de melhoria</label>
                <textarea id="fPontosMelhoria" rows="3" placeholder="O que precisa desenvolver"></textarea>
            </div>

            <div class="campo" style="margin-bottom:14px">
                <label>Acordos e próximos passos</label>
                <textarea id="fAcordos" rows="3" placeholder="O que foi combinado entre líder e colaborador"></textarea>
            </div>

            <button class="btn" onclick="salvarFeedback()">Registrar feedback</button>
        </div>
    `;
}

async function salvarFeedback() {
    const idColab = document.getElementById("fColaborador").value;
    const tipo = document.getElementById("fTipo").value;
    const data = document.getElementById("fData").value;

    if (!idColab || !tipo || !data) {
        alert("Preencha os campos obrigatórios (*): Colaborador, Tipo e Data.");
        return;
    }

    const c = colaboradorPorId(idColab);

    const dados = {
        colaboradorId: idColab,
        colaborador: c ? c.nome : "",
        unidade: c ? c.unidade : "",
        tipo: tipo,
        dataFeedback: formatarData(data),
        pontosFortes: document.getElementById("fPontosFortes").value.trim(),
        pontosMelhoria: document.getElementById("fPontosMelhoria").value.trim(),
        acordos: document.getElementById("fAcordos").value.trim()
    };

    try {
        const resposta = await api("salvarFeedback", dados);
        if (resposta.sucesso) {
            alert("Feedback registrado com sucesso!");
            telaFeedback();
        } else {
            alert("Erro ao registrar: " + (resposta.erro || ""));
        }
    } catch (e) { }
}

// ===================================================================
// ===== DOSSIÊ DO COLABORADOR (RH) ==================================
// ===================================================================
async function telaDossie() {
    const app = document.getElementById("app");
    app.innerHTML = "<p>Carregando colaboradores...</p>";

    try {
        await carregarEquipe();
    } catch (e) { return; }

    app.innerHTML = `
        <div class="card">
            <h2>📁 Dossiê do Colaborador</h2>
            <p class="subtitulo">Histórico completo: ocorrências, avaliações, feedbacks e treinamentos</p>
            <div class="toolbar" style="margin-bottom:0">
                ${selectColaboradores("dColaborador")}
                <button class="btn" onclick="abrirDossie()">Abrir dossiê</button>
            </div>
        </div>
        <div id="areaDossie"></div>
    `;
}

async function abrirDossie() {
    const id = document.getElementById("dColaborador").value;
    if (!id) { alert("Selecione um colaborador."); return; }

    const area = document.getElementById("areaDossie");
    area.innerHTML = "<p>Montando dossiê...</p>";

    try {
        const resposta = await api("dossie", { id: id });
        if (!resposta.sucesso) {
            area.innerHTML = `<div class="card"><p>Erro: ${resposta.erro || ""}</p></div>`;
            return;
        }

        renderizarDossie(resposta);

    } catch (e) {
        if (USUARIO) area.innerHTML = "<p>Erro ao conectar com servidor</p>";
    }
}

function contarTipo(ocorrencias, tipo) {
    return ocorrencias.filter(o => (o.tipo || "").toUpperCase() === tipo).length;
}

function linhaVazia(mensagem) {
    return `<p class="subtitulo" style="margin:0">${mensagem}</p>`;
}

function renderizarDossie(d) {
    const area = document.getElementById("areaDossie");
    const c = d.colaborador;
    const oc = d.ocorrencias || [];
    const fb = d.feedbacks || [];
    const av = d.avaliacoes || [];
    const tr = d.treinamentos || [];

    // ===== frequência de treinamentos =====
    const presencas = tr.filter(t => (t.presenca || "").toUpperCase() === "PRESENTE").length;
    const frequencia = tr.length > 0 ? Math.round((presencas / tr.length) * 100) : null;
    const horas = tr.reduce((soma, t) => soma + (parseFloat(String(t.cargaHoraria).replace(",", ".")) || 0), 0);

    const listaOc = (tipo, vazio) => {
        const itens = oc.filter(o => (o.tipo || "").toUpperCase() === tipo);
        if (itens.length === 0) return linhaVazia(vazio);
        return `<ul class="lista-dossie">` + itens.map(o =>
            `<li><strong>${o.dataOcorrencia || o.dataRegistro}</strong> — ${o.descricao || "(sem descrição)"} <small>por ${o.registradoPor}</small></li>`
        ).join("") + `</ul>`;
    };

    area.innerHTML = `
        <div class="card">
            <h2>${c.nome}</h2>
            <p class="subtitulo">
                ${c.funcao} · ${c.unidade} · Status: ${c.statusAdmissao || "-"}<br>
                📅 Admissão: <strong>${c.dataAdmissao || "não informada"}</strong>
                &nbsp;·&nbsp; 🕐 Horário: ${c.horario || "-"} &nbsp;·&nbsp; 🛌 Folga: ${c.folga || "-"}
            </p>
        </div>

        <div class="cards-grid">
            <div class="card card-indicador ind-amarelo">
                <span class="indicador-numero">${contarTipo(oc, "ATRASO")}</span>
                <span class="indicador-rotulo">Atrasos registrados</span>
            </div>
            <div class="card card-indicador ind-vermelho">
                <span class="indicador-numero">${contarTipo(oc, "FALTA INJUSTIFICADA")}</span>
                <span class="indicador-rotulo">Faltas injustificadas</span>
            </div>
            <div class="card card-indicador ind-vermelho">
                <span class="indicador-numero">${contarTipo(oc, "ADVERTÊNCIA")}</span>
                <span class="indicador-rotulo">Advertências</span>
            </div>
            <div class="card card-indicador ${frequencia === null ? "" : (frequencia >= 80 ? "ind-verde" : "ind-amarelo")}">
                <span class="indicador-numero">${frequencia === null ? "—" : frequencia + "%"}</span>
                <span class="indicador-rotulo">Frequência em treinamentos (${horas}h)</span>
            </div>
        </div>

        <div class="card">
            <div class="toolbar" style="margin-bottom:0">
                <button class="btn" onclick="formularioOcorrencia(${c.id})">+ Nova Ocorrência</button>
                <button class="btn btn-secundario" onclick="formularioTreinamento(${c.id})">+ Registrar Treinamento</button>
            </div>
            <div id="areaRegistroRapido"></div>
        </div>

        <div class="card"><h3>🕐 Atrasos</h3>${listaOc("ATRASO", "Nenhum atraso registrado.")}</div>
        <div class="card"><h3>🚫 Faltas injustificadas</h3>${listaOc("FALTA INJUSTIFICADA", "Nenhuma falta injustificada.")}</div>
        <div class="card"><h3>⚠️ Advertências</h3>${listaOc("ADVERTÊNCIA", "Nenhuma advertência registrada.")}</div>
        <div class="card"><h3>🏥 Atestados</h3>${listaOc("ATESTADO", "Nenhum atestado registrado.")}</div>
        <div class="card"><h3>🦺 EPIs entregues</h3>${listaOc("EPI ENTREGUE", "Nenhum EPI registrado.")}</div>
        <div class="card"><h3>👕 Fardamentos entregues</h3>${listaOc("FARDAMENTO ENTREGUE", "Nenhum fardamento registrado.")}</div>
        <div class="card"><h3>📈 Promoções</h3>${listaOc("PROMOÇÃO", "Nenhuma promoção registrada.")}</div>
        <div class="card"><h3>🌟 Elogios / Reconhecimentos</h3>${listaOc("ELOGIO / RECONHECIMENTO", "Nenhum elogio registrado.")}</div>

        <div class="card">
            <h3>💬 Feedbacks (${fb.length})</h3>
            ${fb.length === 0 ? linhaVazia("Nenhum feedback registrado.") :
                `<ul class="lista-dossie">` + fb.map(f =>
                    `<li><strong>${f.dataFeedback}</strong> — ${f.tipo}<br>
                     <small>✅ ${f.pontosFortes || "-"}<br>🔧 ${f.pontosMelhoria || "-"}<br>🤝 ${f.acordos || "-"} · por ${f.registradoPor}</small></li>`
                ).join("") + `</ul>`}
        </div>

        <div class="card">
            <h3>📝 Avaliações de experiência (${av.length})</h3>
            ${av.length === 0 ? linhaVazia("Nenhuma avaliação registrada.") :
                `<ul class="lista-dossie">` + av.map(a =>
                    `<li><strong>${a.dataAvaliacao}</strong> — ${a.etapa} → <span class="badge badge-${a.resultado === "EFETIVAÇÃO" ? "verde" : (a.resultado === "DESLIGAMENTO" ? "vermelho" : "amarelo")}">${a.resultado}</span><br>
                     <small>Gestor: ${a.gestor} · Valores: ${a.produtividade}/${a.trabalhoEquipe}/${a.sensoDono}/${a.inovacao}/${a.fazerDiferenca}</small></li>`
                ).join("") + `</ul>`}
        </div>

        <div class="card">
            <h3>🎓 Treinamentos (${tr.length})</h3>
            ${tr.length === 0 ? linhaVazia("Nenhum treinamento registrado.") :
                `<div class="tabela-wrap"><table class="tabela">
                    <thead><tr><th>Data</th><th>Treinamento</th><th>Carga</th><th>Presença</th></tr></thead>
                    <tbody>` + tr.map(t =>
                        `<tr><td>${t.dataTreinamento}</td><td>${t.treinamento}</td><td>${t.cargaHoraria}h</td>
                         <td><span class="badge badge-${(t.presenca || "").toUpperCase() === "PRESENTE" ? "verde" : "vermelho"}">${t.presenca}</span></td></tr>`
                    ).join("") + `</tbody></table></div>`}
        </div>
    `;
}

// ===== REGISTRO RÁPIDO: OCORRÊNCIA =====
function formularioOcorrencia(idColab) {
    document.getElementById("areaRegistroRapido").innerHTML = `
        <div class="formulario" style="margin-top:16px">
            <div class="grid-form">
                <div class="campo">
                    <label>Tipo de ocorrência *</label>
                    ${gerarSelect("oTipo", TIPOS_OCORRENCIA, "Selecione...")}
                </div>
                <div class="campo">
                    <label>Data da ocorrência *</label>
                    <input id="oData" type="date">
                </div>
                <div class="campo campo-cheio">
                    <label>Descrição</label>
                    <textarea id="oDescricao" rows="2" placeholder="Detalhes (ex.: motivo do atraso, item de EPI entregue, cargo da promoção...)"></textarea>
                </div>
            </div>
            <button class="btn" onclick="salvarOcorrencia(${idColab})">Salvar ocorrência</button>
        </div>
    `;
}

async function salvarOcorrencia(idColab) {
    const tipo = document.getElementById("oTipo").value;
    const data = document.getElementById("oData").value;

    if (!tipo || !data) { alert("Informe o tipo e a data da ocorrência."); return; }

    const c = colaboradorPorId(idColab);

    try {
        const resposta = await api("salvarOcorrencia", {
            colaboradorId: idColab,
            colaborador: c ? c.nome : "",
            tipo: tipo,
            dataOcorrencia: formatarData(data),
            descricao: document.getElementById("oDescricao").value.trim()
        });

        if (resposta.sucesso) {
            document.getElementById("dColaborador").value = idColab;
            abrirDossie();
        } else {
            alert("Erro: " + (resposta.erro || ""));
        }
    } catch (e) { }
}

// ===== REGISTRO RÁPIDO: TREINAMENTO =====
function formularioTreinamento(idColab) {
    document.getElementById("areaRegistroRapido").innerHTML = `
        <div class="formulario" style="margin-top:16px">
            <div class="grid-form">
                <div class="campo">
                    <label>Treinamento *</label>
                    <input id="trNome" placeholder="Ex.: Integração, Atendimento, Módulo 1 Academia...">
                </div>
                <div class="campo">
                    <label>Data *</label>
                    <input id="trData" type="date">
                </div>
                <div class="campo">
                    <label>Carga horária (h) *</label>
                    <input id="trCarga" type="number" min="0" step="0.5" placeholder="2">
                </div>
                <div class="campo">
                    <label>Presença *</label>
                    ${gerarSelect("trPresenca", ["PRESENTE", "FALTOU"], "Selecione...")}
                </div>
            </div>
            <button class="btn" onclick="salvarTreinamento(${idColab})">Salvar treinamento</button>
        </div>
    `;
}

async function salvarTreinamento(idColab) {
    const nome = document.getElementById("trNome").value.trim();
    const data = document.getElementById("trData").value;
    const carga = document.getElementById("trCarga").value;
    const presenca = document.getElementById("trPresenca").value;

    if (!nome || !data || !carga || !presenca) { alert("Preencha todos os campos do treinamento."); return; }

    const c = colaboradorPorId(idColab);

    try {
        const resposta = await api("salvarTreinamento", {
            colaboradorId: idColab,
            colaborador: c ? c.nome : "",
            treinamento: nome,
            dataTreinamento: formatarData(data),
            cargaHoraria: carga,
            presenca: presenca
        });

        if (resposta.sucesso) {
            document.getElementById("dColaborador").value = idColab;
            abrirDossie();
        } else {
            alert("Erro: " + (resposta.erro || ""));
        }
    } catch (e) { }
}

// ===== INÍCIO =====
telaLogin();
