import React, { useEffect, useState } from 'react';

const CreateComicsPage = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/comics/create') // Cambia la URL según tu configuración
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

export default CreateComicsPage;

