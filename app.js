// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo").value;
    if (amigoIngresado === ""){
        alert("Por favor ingrese un nombre");
    } else{
        listaAmigos.push(amigoIngresado);
        mostrarListaDeAmigos();
        limpiarcaja();
    }
}

function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert("Por favor ingrese al menos un nombre");
    } else{
        let generarNumeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSorteado = listaAmigos[generarNumeroAleatorio];

            let sorteo = document.getElementById("resultado");
            sorteo.innerHTML = `<li>${amigoSorteado}</li>`;
    }
}

function limpiarcaja(){
    document.getElementById("amigo").value = "";
}

function mostrarListaDeAmigos(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";

    for(i = 0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}
