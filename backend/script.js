function deleteComic(comicId) {
    if (confirm('¿Estás seguro de que deseas eliminar este cómic?')) {
      $.ajax({
        url: `http://localhost:3000/comics/delete/${comicId}`,
        type: 'DELETE',
        success: function(response) {
          console.log('Cómic eliminado:', response);
          window.location.href = '/comics';
        },
        error: function(error) {
          console.error('Error al eliminar el cómic:', error);
        }
      });
    }
  }
  
  $(document).ready(function() {
    $('.delete-comic').on('click', function() {
      var comicId = $(this).data('id');
      deleteComic(comicId);
    });
  });
  