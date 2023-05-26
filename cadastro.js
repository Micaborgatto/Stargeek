const formulario = document.getElementById("formulario");
const msg = document.querySelector(".mensagem");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao")


function verificarEmail(email, evento){
    let dados = JSON.parse(localStorage.getItem("bd"));
    if (dados == null){
        criarUsuario(evento);
    } else {
        let validar = dados.find(elemento => elemento.emailcliente==email);
        if (validar){
            msg.innerHTML="E-mail já existe!";
            evento.preventDefault();
        } else {
            criarUsuario(evento);
        }  
    }  
}

botao.onclick = (evento) =>{
    if (nome.value == ""){
        evento.preventDefault()
        msg.innerHTML = "Digite seu Nome";
        nome.focus();
        return null;
    }
    if (email.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite seu e-mail";
        email.focus();
        return null
    }
    if (senha.value == ""){
        evento.preventDefault();
        msg.innerHTML = "Digite sua senha";
        email.focus();
        return null
    }

    verificarEmail(email.value, evento);
            
}   


function criarUsuario(evento){
    let dados = JSON.parse(localStorage.getItem("bd")) || [];
    dados.push(
        {
        nomecliente : nome.value,
        emailcliente : email.value,
        senhacliente : senha.value
        }
    )
    localStorage.setItem("bd", JSON.stringify(dados));
    msg.innerHTML ="Usuário Cadastrado com Sucesso";
    evento.preventDefault();
    setTimeout(()=>{window.location.assign("login.html") },2000)
      
}

function salvaEdicao(photo){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    dados[pindice].nome = nome.value;
    dados[pindice].descricao = descricao.value;
    dados[pindice].foto = photo;
    dados[pindice].email = emaillogado;
    localStorage.setItem("catalogo", JSON.stringify(dados));

}