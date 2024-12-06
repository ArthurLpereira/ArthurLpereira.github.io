const btn_abrir_dialog_total = document.getElementById('especial');

function abrirDialogo() {
    const dialog_total = document.getElementById("dialog-total");
    dialog_total.showModal();
}

// Função para fechar o diálogo
function fecharDialog() {
    const dialog_total = document.getElementById("dialog-total");
    dialog_total.close();
}

function fazerLogin() {
    console.log('Evento de login acionado');
    alert('Login realizado com sucesso');
    setTimeout(() => {
        window.location.href = "./grupamento_turma.html";
    }, 0);
}

function fazerCadastro(){
    console.log('evento de cadastro acionado')
    alert('Usuário cadastrado com sucesso')

    setTimeout(()=>{
        window.location.href = './index.html'
    })
}

function AbrirDialog(escolhaSalaID) {
    const DadosDialog = {
        1: { titulo: "FUNDAMENTAL 1A", botoes: ["1° Ano", "2° Ano"], backgroundColor: "#ffdf2b" },
        2: { titulo: "FUNDAMENTAL 1B", botoes: ["3° Ano", "4° Ano", "5° Ano"], backgroundColor: "#13b818" },
        3: { titulo: "FUNDAMENTAL 2", botoes: ["6° Ano", "7° Ano", "8° Ano", "9° Ano"], backgroundColor: "#ff652d" },
        4: { titulo: "ENSINO MÉDIO", botoes: ["1° Ano", "2° Ano", "3° Ano"], backgroundColor: "#ff8200" },
        5: { titulo: "CURSOS", botoes: ["Arduino", "Robótica", "Personaliza","SENAI", "Caça Asteroide", "Autorizados","Para Gabaritar", "TRI","Topicos Avançados","Práticas Investigativas"], backgroundColor: "#8b97fd" }
    };

    const { titulo, botoes, backgroundColor } = DadosDialog[escolhaSalaID];

    document.querySelector("#dialog h2").innerText = titulo;

    const container = document.getElementById("botoes-container");
    container.innerHTML = "";
    botoes.forEach(botao => {
        const button = document.createElement("button");
        button.textContent = botao;

        button.addEventListener("click", () => {
            localStorage.setItem("textoSelecionado", botao);
            window.location.href = "contador.html";
        });

        container.appendChild(button);
        if (botao === "Práticas Investigativas") {
        }
    });

    const dialog = document.getElementById("dialog");
    dialog.style.backgroundColor = backgroundColor;
    dialog.showModal();
}

function fecharDialog() {
    const dialog = document.getElementById("dialog");
    dialog.close();
}

window.onclick = function(event) {
    const dialog = document.getElementById('dialog');
    if (event.target === dialog) {
        dialog.close();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const textoSelecionado = localStorage.getItem("textoSelecionado");

    if (textoSelecionado) {
        const elementoH1 = document.querySelector("#nomeSala h1");
        elementoH1.innerText = textoSelecionado;
    }

    const botaoMais = document.getElementById("mais");
    const botaoMenos = document.getElementById("menos");
    const inputContador = document.getElementById("numContador");

    botaoMais.addEventListener("click", (event) => {
        event.preventDefault();
        alterarValor(1);
    });

    botaoMenos.addEventListener("click", (event) => {
        event.preventDefault();
        alterarValor(-1);
    });

    function alterarValor(incremento) {
        let valorAtual = parseInt(inputContador.value) || 0; 
        valorAtual += incremento; 
        valorAtual = Math.max(0, Math.min(valorAtual, 33)); 
        inputContador.value = valorAtual; 
    }

    inputContador.addEventListener("input", () => {
        if (inputContador.value < 0) inputContador.value = 0;
        if (inputContador.value > 33) inputContador.value = 33;
    });
});

function enviarFormulario() {
    console.log('Evento acionado');
    alert('Contagem cadastrada com sucesso');
    setTimeout(()=>{
        window.location.href = "./grupamento_turma.html";
    },0)
}





console.log('Script foi carregado')


