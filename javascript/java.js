// JavaScript Document

function logeoSesion() {
    let validado = false;
    
    const tiposEmbarcaciones = ["barco", "buque", "carguero"]; // Array con los valores
    
    do {
        let usuarioIngresado = prompt("Ingrese su usuario");
        if (usuarioIngresado === "admin") {
            validado = true;
            alert("Su usuario es " + usuarioIngresado);
            
            const busqueda = prompt("Ingrese un tipo de embarcación a buscar"); // Pedir tipo de embarcación a buscar
            const resultados = tiposEmbarcaciones.filter(embarcacion => embarcacion === busqueda); // Filtrar el array según el tipo de embarcación
            
            if (resultados.length > 0) {
                alert("Se encontraron las siguientes embarcaciones: " + resultados.join(", "));
            } else {
                alert("No se encontraron embarcaciones del tipo especificado.");
            }
            
        } else {
            alert("Su usuario no existe en nuestro sistema");
        }
    } while (!validado);
}

logeoSesion();