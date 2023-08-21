import React, { useEffect, useState } from 'react';

const EditComicsPage = () => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const comicId = window.location.pathname.split('/').pop();
    fetch(`http://localhost:3000/comics/edit/${comicId}`)
      .then((response) => response.text())
      .then((renderedHtml) => {
        setHtml(renderedHtml);
      })
      .catch((error) => {
        console.error('Error al obtener la página de edición:', error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EditComicsPage;
