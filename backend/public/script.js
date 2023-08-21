function deleteComic(comicId) {
  if (confirm('¿Estás seguro de que deseas eliminar este cómic?')) {
    $.ajax({
      url: `http://localhost:3000/comics/delete/${comicId}`,
      type: 'DELETE',
      success: function(response) {
        console.log('Cómic eliminado:', response);
        // Realizar acciones adicionales si es necesario, como actualizar la lista de cómics en la interfaz
        window.location.href = '/comics'; // Redirigir a la página de cómics
      },
      error: function(error) {
        console.error('Error al eliminar el cómic:', error);
      }
    });
  }
}