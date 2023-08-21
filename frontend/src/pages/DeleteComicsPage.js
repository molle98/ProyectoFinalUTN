import React, { useEffect, useState } from 'react';

const DeleteComicsPage = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const comicId = window.location.pathname.split('/').pop();
    fetch(`http://localhost:3000/comics/delete/${comicId}`)// Cambia la URL según tu configuración
      .then((response) => response.text())
      .then((renderedHtml) => {
        setHtml(renderedHtml);
      })
      .catch((error) => {
        console.error('Error al obtener la página de creación de cómics:', error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default DeleteComicsPage;