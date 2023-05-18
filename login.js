const msg = document.querySelector(".mensagem");
const botao = document.getElementById("botao");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

botao.onclick = (evt)=>{
    let dados = JSON.parse(localStorage.getItem("bd"));
    let logado;
    dados.forEach((elemento) => {
        if(elemento.emailcliente == email.value && elemento.senhacliente == senha.value){
            msg.innerHTML = "Aguarde redirecionando..."
            setTimeout(()=>{
                window.location.assign("catalogo.html");
            }, 2000);
            evt.preventDefault();
            logado = "ok";
            return true;
        } 
        if (logado!="ok") {
            msg.innerHTML = "Usuario ou senha incorretos"
            evt.preventDefault()
            return null;
        }
    });
}