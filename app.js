// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  // Obtener el valor del input
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  // Validar la entrada (campo vacío)
  if (!nombreAmigo) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Actualizar la lista visible
  mostrarListaAmigos();
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
  const listaAmigosElement = document.getElementById("listaAmigos");

  // Limpiar la lista antes de agregar nuevos elementos
  listaAmigosElement.innerHTML = "";

  // Recorrer el arreglo de amigos y agregar cada nombre como un <li>
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigosElement.appendChild(li);
  });
}
// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si el array amigos no está vacío
    if (amigos.length === 0) {
      alert("No hay amigos para sortear.");
      return;
    }
  
    // Generar un índice aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
  
    // Mostrar el resultado en el elemento con id "resultado"
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<li><strong>El amigo secreto es:</strong> ${amigoSorteado}</li>`;
  }
  