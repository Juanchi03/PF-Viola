function logeoSesion() {
  // Agregar evento al botón "Iniciar sesión"
  const btnIniciarSesion = document.querySelector('#loginButton');
  btnIniciarSesion.addEventListener('click', function(event) {
    event.preventDefault();

    // Obtener los valores ingresados en los campos
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    // Guardar los valores en el LocalStorage
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));

    // Redirigir a la página "Intranet.html" después de 1 segundo (1000 ms)
    setTimeout(function() {
      window.location.href = "Intranet.html";
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  logeoSesion();
});

