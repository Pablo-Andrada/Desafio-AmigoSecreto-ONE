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
