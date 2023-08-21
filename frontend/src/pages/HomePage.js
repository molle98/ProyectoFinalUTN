import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')  // Cambia la URL a la ruta correcta de tu servidor
      .then((response) => response.text())
      .then((renderedHtml) => {
        setHtml(renderedHtml);
      })
      .catch((error) => {
        console.error('Error al obtener la página de inicio:', error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HomePage;

