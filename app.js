// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar a los amigos
let amigos = [];
let amigoUsuario = '';

//Función para agregar amigos
function agregarAmigo(){
    
    amigoUsuario = document.getElementById('amigo').value;

    if (amigoUsuario == '') {
        alert('Debes ingresar un nombre de amigo para sortear');
    } else {
        amigos.push(amigoUsuario);
        limpiarTexto();
        console.log(amigos);
        return amigos;
        
    }    
}

//Función para limpiar caja de texto
function limpiarTexto(){
    document.getElementById('amigo').value = '';
}