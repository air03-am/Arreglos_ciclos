function mostrarSalida(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
}
// Ejercicio 1
function ejecutarEjercicio01() {
    let salida = "";
    const originalConsole = console.log;
    console.log = function(mensaje) {
        salida = mensaje;
    };
    printOutString();
    console.log = originalConsole;
    mostrarSalida("salida01", salida);
}

// Ejercicio 2
function ejecutarEjercicio02() {
    const arr = [1, 2, 4, 5];
    const resultado = doubleArrayNumbers(arr);
    const salida = `Array original: [${arr.join()}] Array duplicado: [${resultado.join()}]`;
    mostrarSalida("salida02", salida);
}

// Ejercicio 3
function ejecutarEjercicio03() {
    const arr = [1, 2, 3, 4];
    const resultado = computeSumAndProduct(arr);
    const salida = `Array original: [${arr.join()}] Suma: [${resultado.sum}] Producto: [${resultado.product}]`;
    mostrarSalida("salida03", salida);
}

// Ejercicio 4

function ejecutarEjercicio04() {
    const student1Courses = ['Math', 'English', 'Programming'];
    const student2Courses = ['Geography', 'Spanish', 'Programming'];
    const resultado = findCommonCourses(student1Courses, student2Courses);
    const salida = `Cursos comunes: [${resultado.join()}]`;
    mostrarSalida("salida04", salida);
}

// Ejercicio 5
function ejecutarEjercicio05() {
    let people = ["María", "Dani", "Luis", "Juan", "Camila"];
    let salida = []; 

    // 1. Mostrar array original
    salida.push(`1. Array original ${people.join(', ')} \n`);

    // 2. Eliminar Dani
    people = eliminarDani(people);
    salida.push(`2. Eliminar a "Dani": ${people.join(', ')} \n`);

    // 3. Eliminar Juan
    people = eliminarJuan(people);
    salida.push(`3. Eliminar a "Juan": ${people.join(', ')} \n`);

    // 4. Mover Luis al inicio
    people = moverLuisAlInicio(people);
    salida.push(`4. Mover a "Luis" al inicio: ${people.join(', ')} \n`);

    // 5. Agregar mi nombre
    people = agregarNombre(people, "María José");
    salida.push(`5. Agregar mi nombre: ${people.join(', ')} \n`);

    // 6. Iterar hasta María
    let resultado = iterarHastaMaria(people);
    salida.push(`6. Iterar hasta María: ${resultado} \n`); 

    // 7. Índice de María
    const indice = indiceDeMaria(people);
    salida.push(`7. Indice de María: ${indice} \n`);

    mostrarSalida("salida05", salida);
}
    // Ejercicio 6

function ejecutarEjercicio06() {
    const arr =  [3, 6, 12, 5, 100, 1]
    const resultado = bubbleSort(arr);
    const salida = `Numeros en orden: [${resultado.join(", ")}]`;
    mostrarSalida("salida06", salida);
}
