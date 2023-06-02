const botaomodal = document.getElementById("btn");
const cards = document.querySelector(".cards");
const nome = document.getElementById("nome");
const descricao = document.getElementById("descricao");
const foto = document.getElementById("foto");


var emaillogado;


carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card")
        divcard.innerHTML = `<div class= "cardimg"><img src="img/${elemento.foto}"><div>
        <div class="cardnome">${elemento.nome}</div>
        <div class="carddescricao">${elemento.descricao}</div>
        <div class="cardbtn"><a onclick="editar(${indice})">editar</a>
        <a onclick="excluir(${indice})">excluir</a></div>
        </div>`;
        
        cards.appendChild(divcard);}
        
    });
}                                                                                                                   

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editar(indice){
    var url ="titulo.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}

function femailLogado(){
    let dados =sessionStorage.getItem("logado");
    if (dados == null){
        window.location.assign("login.html")
    } else{
        emaillogado = dados;
    }
}