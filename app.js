// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSorteados = [];

let amigoIngresado = document.getElementById("amigo").value;

function limpiarcaja(){
    document.getElementById("amigo").value = "";
}

function validarLaEntrada(){
    if (amigoIngresado = ""){
        alert("Por favor ingrese un nombre");
    } else{
        amigosSorteados.push(amigoIngresado);
        limpiarcaja();
    }
}