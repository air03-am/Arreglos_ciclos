

// Eliminar "Dani"
function eliminarDani(arr) {
    const index = arr.indexOf("Dani");
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// Eliminar "Juan"
function eliminarJuan(arr) {
    const index = arr.indexOf("Juan");
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// Mover a "Luis" al principio
function moverLuisAlInicio(arr) {
    const index = arr.indexOf("Luis");
    if (index !== -1) {
        arr.unshift(arr.splice(index, 1)[0]);
    }
    return arr;
}

// 5. Agregar nombre al final
function agregarNombre(arr, nombre) {
    arr.push(nombre);
    return arr;
}

// Iterar hasta encontrar "María"
function iterarHastaMaria(arr) {
    let resultado = "";
    for (let persona of arr) {
        resultado += persona + "  ";
        if (persona === "María") {
            resultado += "¡Encontrada! Saliendo del bucle.\n";
            break;
        }
    }
    return resultado;
}

// Obtener índice de "María"
function indiceDeMaria(arr) {
    return arr.indexOf("María");
}

