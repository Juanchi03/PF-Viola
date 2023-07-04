// JavaScript Document

function logeoSesion() {
	
	let validado = false
	
do {
	let usuarioIngresado = prompt("Ingrese su usuario")
	if (usuarioIngresado === "admin") {
		validado = true
		alert("Su usuario es " + usuarioIngresado)
	}
	else {
		alert("Su usuario no existe en nuestro sistema")
		}
	}while(!validado)
}
	

logeoSesion()