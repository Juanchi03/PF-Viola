

document.addEventListener("DOMContentLoaded", function() {
  const btnIniciarSesion = document.querySelector('#loginButton');

  btnIniciarSesion.addEventListener('click', async function(event) {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    if (!email || !password) {
      Swal.fire(
  'Datos Incorrectos',
  'Reintentar',
  'question'
)
      return;
    }

    try {
      const userData = await cargarUsuariosDesdeJSON(); // Cargar datos desde el JSON
      
      const authenticated = verificarCredenciales(userData.usuarios, email, password);
      
      if (authenticated) {
        localStorage.setItem('email', JSON.stringify(email));
        
        setTimeout(function() {
          window.location.href = "Intranet.html";
        }, 1000);
      } else {
        Swal.fire(
  'Datos Incorrectos',
  'Reintentar',
  'question'
)
      }
    } catch (error) {
      console.error('Error al cargar usuarios desde JSON:', error);
    }
  });

  async function cargarUsuariosDesdeJSON() {
    try {
      const response = await fetch('data.json');
      
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Error en la carga del JSON');
      }
    } catch (error) {
      throw new Error('Error al cargar JSON:', error);
    }
  }

function verificarCredenciales(usuarios, email, password) {
  const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
  return usuarioEncontrado && usuarioEncontrado.password === password;
}
});
