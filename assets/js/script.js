const nome = document.getElementById("nome")
const email = document.getElementById("email")
const mensagem = document.querySelector("mensagem")

const cep = document.getElementById("cep")

let isNomeOk = false
let isEmailOk = false

const regex = /[!@#$%^&*(),.?":{}|<>]/

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
        Toastify({

            text: "This is a toast",
            
            duration: 3000
            
            }).showToast();
        txtEmail.style.color = "#FF0000"
        return;
    }

    txtEmail.innerHTML = "✔️"
    txtEmail.style.color = "#00FF00"
}

const enviarFormulario = () => {
    if(isNomeOk && isEmailOk) {
        alert(`${nome.value}, obrigado pela sua mensagem!`)
    } else {
        alert(`Por favor, preencha o formulário corretamente!`)
    }
}

const consultarCEP = () => {

    const URL = `https://viacep.com.br/ws/${cep.value}/json/`
    let response = {}

    fetch(URL)
    .then(response => response.json())
    .then(json => response = json)
    .catch(error => alert("CEP não encontrado."))

    console.log(response)
}