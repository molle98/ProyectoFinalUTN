import React, { useEffect, useState } from 'react';

const ComicsPage = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/comics')
      .then((response) => response.text())
      .then((renderedHtml) => {
        setHtml(renderedHtml);
      })
      .catch((error) => {
        console.error('Error al obtener la página de cómics:', error);
      });
  }, []);
  

  return <div className="comics-page" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ComicsPage;

