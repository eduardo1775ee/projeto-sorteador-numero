function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de > ate) {
        alert("O valor inicial não pode ser maior que o valor final.");
        return;}
    let numerosSorteados = [];
    let resultado = document.getElementById('resultado');

    for (let i = 0; i < quantidade; i++) {
        let numeroSorteado = gerarNumeroAleatorio(de, ate);
        while (numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = gerarNumeroAleatorio(de, ate);
        }
        numerosSorteados.push(numeroSorteado);
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    document.getElementById('btn-reiniciar').removeAttribute('disabled');
    document.getElementById('btn-reiniciar').addEventListener('click', reiniciar);

    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '';
    alterarStatusBotao();
}

function gerarNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}
