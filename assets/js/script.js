const nome = document.querySelector("#nomeUsuario");
const email = document.getElementById("email");
const mensagem = document.querySelector("#mensagem");
const cep = document.getElementById("cep");
const endereco = document.getElementById("dados")

let isNomeOk = false;
let isEmailOk = false;
let isMensagemOk = false;
let isCepOk = false;

const regex = /[!@#$%^&*(),.?":{}|<>]/;
const regexNumeros = /^[0-9]+$/;

const validarNome = () => {
    let txtNome = document.getElementById("txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome muito curto!"
        txtNome.style.color = "#FF0000"
        isNomeOk = false
        return;
    }
    
    if ((regex.test(nome))) {
        txtNome.innerHTML = "Contém caracteres especiais!"
        isNomeOk = false
        return;
    }

    txtNome.innerHTML = "✔️"
    txtNome.style.color = "#00FF00"
    isNomeOk = true
}

const validarEmail = () => {
    let txtEmail = document.getElementById("txtEmail")

    if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "#FF0000"
        isEmailOk = false
        return;
    }

    isEmailOk = true
    txtEmail.innerHTML = "✔️"
    txtEmail.style.color = "#00FF00"
}

const validarMensagem = () => {

    let txtMensagem = document.getElementById("txtMensagem")

    if (mensagem.value.length < 5 || mensagem.value.length > 300) {
        txtMensagem.innerHTML = "A mensagem deve estar entre 5 e 300 caracteres!"
        txtMensagem.style.color = "#FF0000"
        isMensagemOk = false
        return;
    }

    isMensagemOk = true
    txtMensagem.innerHTML = "✔️"
    txtMensagem.style.color = "#00FF00"
}

const validarCep = () => {

    let txtCep = document.getElementById('txtCep')
    let cepLimpo = cep.value.trim()
    cepLimpo.replace("-", "")
    
    if (cepLimpo.length != 8 || !(regexNumeros.test(cepLimpo))) {
        txtCep.innerHTML = "CEP inválido!"
        txtCep.style.color = "#FF0000"
        isCepOk = false
        return;
    }

    isCepOk = true
    txtCep.innerHTML = "✔️"
    txtCep.style.color = "#00FF00"
}

const enviarFormulario = () => {
    if(isNomeOk && isEmailOk && isMensagemOk && isCepOk && endereco.value.length != 0) {
        alert(`${nome.value}, obrigado pela sua mensagem!`)
    } else {
        alert(`Por favor, preencha o formulário corretamente!`)
    }
}

const consultarCEP = () => {
    const URL = `https://viacep.com.br/ws/${cep.value}/json/`
    fetch(URL)
    .then(response => response.json())
    .then(json => preencherDados(json))
    .catch(error => alert("CEP não encontrado."))   
}

const preencherDados = (cep) => {

    console.log(cep)
    endereco.innerHTML = `
    ${cep.localidade} <br>
    ${cep.logradouro} <br>
    ${cep.bairro} <br> 
    ${cep.cep}
    `
}