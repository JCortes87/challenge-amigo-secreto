// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //Array para almacenar a los amigos
let amigoUsuario = ''; //Captura cada amigo ingresado

//Función para agregar amigos
function agregarAmigo(){
    
    amigoUsuario = document.getElementById('amigo').value; //Recibe el valor ingresado por el usuario

    if (amigoUsuario == '') { //Valida si el usuario ingresó un nombre o no
        alert('Debes ingresar un nombre de amigo para sortear');
    } else { 
        amigos.push(amigoUsuario); //Si hay dato lo guarda en la lista
        limpiarTexto(); //Limpia la caja de texto después de dar clic en añadir
        mostrarNombres(); //Carga el nombre ingresado en el HTML
        return amigos;
        
    }    
}

//Función para limpiar caja de texto
function limpiarTexto(){
    document.getElementById('amigo').value = '';
}

//Función para cargar los nombres en el HTML
function mostrarNombres(){
    let listaFinal = document.getElementById('resultado');
    listaFinal.innerHTML = ''; //Limpia la lista para que no se repitan los nombres al ser mostrados en pantalla
    
    amigos.forEach((nombre) => { //Recorre la lista de amigos ingresados
        let li = document.createElement('li'); //Crea el elemento li para agregar a la lista
        li.textContent = nombre; //Asigna cada valor a cada fila de la lista
        listaFinal.appendChild(li); //Agrega la lista mediante el DOM
    })

}

//Función para sortear amigo
function sortearAmigo () {

    if (amigos.length == 0) {
        alert('Es necesario ingresar amigos para sortear un nombre'); //Validar que la lista no venga vacia
    }   else {
        let i = Math.floor(Math.random() * amigos.length); //selecciona un número aleatorio que concuerde con la cantidad de elementos de la lista
        let seleccionado = amigos[i]; //se agrega a la variable el amigo con el indice generado 
        let resultado = document.getElementById('resultado') //se selecciona el elemento Ul resultado
        resultado.innerHTML = `<li>Amigo secreto sorteado es: ${seleccionado}</li>` //Se crea un elemento de lista li para imprimir el nombre del amigo sorteado
        amigos = []; //se limpia el array amigos para poder volver a empezar
    }
    
    
}