// Função para validar o texto do usuário
function validarTexto(texto) {
    const regex = /[^a-z\s]/;
    if (regex.test(texto)) {
        alert('O texto deve conter apenas letras minúsculas, sem acentos e sem caracteres especiais.');
        return false;
    }
    return true;
}

// Função para criptografar o texto
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    const mensagemCopiada = document.getElementById('mensagem-copiada');
    mensagemCopiada.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

// Função chamada ao clicar no botão "Criptografar"
function pegarTexto() {
    const textarea = document.getElementById('inserirTexto');
    const texto = textarea.value.trim();

    if (validarTexto(texto)) {
        const textoCriptografado = criptografarTexto(texto);
        exibirResultado(textoCriptografado);
    }
}

// Função chamada ao clicar no botão "Descriptografar"
function descriptografar() {
    const resultadoDiv = document.getElementById('mensagem-copiada').value;
    const textoCriptografado = resultadoDiv;

    if (validarTexto(textoCriptografado)) {
        const textoDescriptografado = descriptografarTexto(textoCriptografado);
        exibirResultado(textoDescriptografado);
    }
}

// Função para exibir o resultado
function exibirResultado(texto) {
    const apresentacao = document.querySelector('.divisao-apresentacao');
    const p = document.getElementById('mensagem-copiada');
    p.value = texto;

    // Atualiza a seção de apresentação
    apresentacao.innerHTML = '<img src="assets/imgs/aprst.svg" alt="imagem_apresentacao"><h1>Mensagem</h1>';
    apresentacao.appendChild(p);

    // Exibe o botão de copiar
    const copiarBtn = document.getElementById('copiar-texto');
    if (copiarBtn) { // Verifica se o botão existe
        copiarBtn.style.display = 'block';
        copiarBtn.onclick = copiarTexto;
    }
}

// Adiciona eventos aos botões
document.querySelector('.botao-criptografar').addEventListener('click', pegarTexto);
document.querySelector('.botao-descriptografar').addEventListener('click', descriptografar);
