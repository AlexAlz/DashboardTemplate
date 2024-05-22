$(document).ready(function () {
    $('.navDashboard').on('click', function (event) {
      event.preventDefault(); // Previene la acción por defecto del enlace.
      const url = $(this).attr('href'); // Obtiene la URL del enlace.
      fetch(url)
        .then(response => response.text()) // Obtiene el contenido de la URL como texto.
        .then(content => {
          $('#main-content').html(content); // Inserta el contenido en el div con id 'main-content'.
        })
        .catch(error => console.error('Error al cargar la página:', error)); // Maneja errores en la carga.

      // Agrega la clase 'active' al elemento seleccionado.
      $('.navDashboard').removeClass('active');
      $(this).addClass('active');
    });
  });