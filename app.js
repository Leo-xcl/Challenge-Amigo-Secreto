// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para guardar los nombres de amigos
let listaAmigos = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo").value; // Obtiene el valor del input
    if (amigoIngresado === ""){ // Si está vacío, muestra alerta
        alert("Por favor ingrese un nombre");
    } else{
        listaAmigos.push(amigoIngresado); // Agrega el nombre al array
        mostrarListaDeAmigos(); // Actualiza la lista en pantalla con el nombre nuevo
        limpiarcaja(); // Limpia el campo de texto
    }
}

function limpiarcaja(){
    document.getElementById("amigo").value = ""; // Limpia el campo input
}

function mostrarListaDeAmigos(){
    let lista = document.getElementById("listaAmigos") // Ubica la lista en el HTML
    lista.innerHTML = ""; // Limpia la lista antes de volver a llenarla (cada que se agrega un nombre)
    // Recorre todos los nombres guardados
    for(let i = 0; i < listaAmigos.length; i++){
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = listaAmigos[i]; // Le asigna el nombre correspondiente según su posicion de indice
        lista.appendChild(li); // Lo agrega a la lista en pantalla
    }
}

function sortearAmigo(){
    if (listaAmigos.length === 0){ // Si no hay nombres en la lista, muestra alerta
        alert("Por favor ingrese al menos un nombre");
    } else{
        // Genera un índice aleatorio entre 0 y el número de amigos en la lista.
        let generarNumeroAleatorio = Math.floor(Math.random() * listaAmigos.length); 
        let amigoSorteado = listaAmigos[generarNumeroAleatorio]; // Obtiene el nombre que esta en esa posición

        let sorteo = document.getElementById("resultado"); // Ubica el elemento donde se mostrará el ganador
        sorteo.innerHTML = `<li>${amigoSorteado}</li>`; // Muestra el nombre ganador dentro de un <li> (lista de HTML)
    }
}