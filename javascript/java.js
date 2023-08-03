function logeoSesion() {
  
  const btnIniciarSesion = document.querySelector('#loginButton');
  btnIniciarSesion.addEventListener('click', function(event) {
    event.preventDefault();

    
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('password', JSON.stringify(password));

    
    setTimeout(function() {
      window.location.href = "Intranet.html";
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  logeoSesion();
});

