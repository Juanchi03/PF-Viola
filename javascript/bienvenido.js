
    document.addEventListener("DOMContentLoaded", function () {
      
      const email = JSON.parse(localStorage.getItem('email'));

      
      if (email) {
        const mensajeBienvenida = "Bienvenido " + email;
        document.getElementById('mensajeBienvenida').innerText = mensajeBienvenida;
      } else {
        
        document.getElementById('mensajeBienvenida').innerText = "Bienvenido usuario";
      }
    });
