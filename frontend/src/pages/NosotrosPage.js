import React, { useEffect, useState } from "react";

const NosotrosPage = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/nosotros")
      .then((response) => response.text())
      .then((renderedHtml) => {
        setHtml(renderedHtml);
      })
      .catch((error) => {
        console.error("Error al obtener la página de nosotros:", error);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default NosotrosPage;
