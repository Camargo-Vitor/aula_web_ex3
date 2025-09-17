document.getElementById("login-body").style.display = "none";
document.getElementById("nova-conta").style.display = "none";
document.getElementById("botaoLogin").disabled = true;


function mostrarApenasLogin() {
    document.getElementById("divHome").style.display = "none";
    document.getElementById("nova-conta").style.display = "none";
    document.getElementById("login-body").style.display = "block";
    document.getElementById("login-password").value = ""
    document.getElementById("email").value = ""
    verifica();
};

function mostrarApenasConta() {
    document.getElementById("divHome").style.display = "none";
    document.getElementById("login-body").style.display = "none";
    document.getElementById("nova-conta").style.display = "block";
};

function mostrarApenasHome() {
    document.getElementById("login-body").style.display = "none";
    document.getElementById("nova-conta").style.display = "none "; 
    document.getElementById("divHome").style.display = "block";
};

function verifica() {
    const senha = document.getElementById("login-password").value;
    const email =document.getElementById("email").value;

    if ((email.trim() === "") || (senha.trim() === "")){
        document.getElementById("botaoLogin").disabled = true;
    }
    else {
        document.getElementById("botaoLogin").disabled = false;
    }
    }