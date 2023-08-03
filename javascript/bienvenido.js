
    document.addEventListener("DOMContentLoaded", function () {
      // Verificar si hay un email almacenado en el LocalStorage
      const email = JSON.parse(localStorage.getItem('email'));

      // Mostrar el mensaje de bienvenida con el email
      if (email) {
        const mensajeBienvenida = "Bienvenido " + email;
        document.getElementById('mensajeBienvenida').innerText = mensajeBienvenida;
      } else {
        // Si no hay email almacenado, mostrar un mensaje genérico
        document.getElementById('mensajeBienvenida').innerText = "Bienvenido usuario";
      }
    });
