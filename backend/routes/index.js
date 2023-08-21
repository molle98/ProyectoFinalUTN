var express = require("express");
var router = express.Router();
var pool = require("../models/db");
var nodemailer = require('nodemailer');

router.get("/", async (req, res) => {
  try {
    const query = "SELECT url FROM ImagenesHome WHERE id = 1";
    const result = await pool.query(query, [1]);

    const data = {
      imageUrl: result[0].url,
    };

    res.render("home", data);
  } catch (error) {
    console.error("Error al obtener la página de inicio:", error);
    res.status(500).send("Error interno del servidor");
  }
});

router.get("/contacto", (req, res) => {
  res.render("contacto");
});

router.get("/nosotros", async (req, res) => {
  try {
    const nosotrosQuery = "SELECT * FROM imagenesNosotros";
    const nosotrosResult = await pool.query(nosotrosQuery);

    const frankMillerImage = nosotrosResult.find((img) => img.id === 1).url;
    const alanMooreImage = nosotrosResult.find((img) => img.id === 2).url;

    res.render("nosotros", {
      alanMoore: alanMooreImage,
      frankMiller: frankMillerImage,
    });
  } catch (error) {
    console.error(
      'Error al obtener las imágenes de la página "Nosotros":',
      error
    );
    res.render("error");
  }
});

router.get("/comics", (req, res) => {
  // Realizar una consulta a la base de datos para obtener los cómics
  pool.query("SELECT * FROM comics", (error, resultados) => {
    if (error) {
      console.error("Error al obtener los cómics:", error);
      res.render("error"); // Manejo de error
    } else {
      const data = {
        comics: resultados, // Pasar los cómics a la vista
      };
      res.render("comics", data); // Renderizar la vista comics con los datos
    }
  });
});

router.get('/comics/create', (req, res) => {
  const createUrl = 'http://localhost:3000/comics/create'; // Cambiar a la URL correcta
  res.render('createComics', { createUrl });
});

// Manejar la solicitud POST para crear un nuevo cómic
router.post("/comics/create", (req, res) => {
  const { title, image, price, description } = req.body;

  // Realizar la consulta SQL para insertar un nuevo cómic en la base de datos
  const insertQuery =
    "INSERT INTO comics (title, image, price, description) VALUES (?, ?, ?, ?)";
  pool.query(
    insertQuery,
    [title, image, price, description],
    (error, results) => {
      if (error) {
        console.error("Error al crear el cómic:", error);
        res.sendStatus(500); // Error interno del servidor
      } else {
        console.log("Cómic creado:", results);
        res.redirect("http://localhost:3001/comics"); // Redirigir de vuelta a la página de cómics
      }
    }
  );
});

// Ruta para mostrar el formulario de edición de cómics
router.get("/comics/edit/:id", async (req, res) => {
  const comicId = req.params.id;
  const updateUrl = `http://localhost:3000/comics/update/${comicId}`;
  try {
    // Realizar consulta a la base de datos para obtener los detalles del cómic por su ID
    const query = "SELECT * FROM comics WHERE id = ?";
    const comic = await pool.query(query, [comicId]);

    // Renderizar la vista editComic.hbs con los datos del cómic
    res.render("editComics", { comicId, updateUrl, comic: comic[0] });
  } catch (error) {
    console.error("Error al obtener el cómic para editar:", error);
    res.render("error");
  }
});

// Ruta para actualizar un cómic
router.post("/comics/update/:id", async (req, res) => {
  const comicId = req.params.id;
  const { title, image, price, description } = req.body;

  try {
    // Realizar consulta a la base de datos para actualizar el cómic por su ID
    const query =
      "UPDATE comics SET title = ?, image = ?, price = ?, description = ? WHERE id = ?";
    await pool.query(query, [title, image, price, description, comicId]);
    res.redirect("http://localhost:3001/comics"); // Redirigir de vuelta a la página de cómics
  } catch (error) {
    console.error("Error al actualizar el cómic:", error);
    res.render("error");
  }
});

// Ruta para eliminar un cómic por su ID
router.get("/comics/delete/:id", async (req, res) => {
  const comicId = req.params.id;
  const deleteUrl = `http://localhost:3000/comics/confirmdelete/${comicId}`;
  try {
    // Realizar consulta a la base de datos para obtener los detalles del cómic por su ID
    const query = "SELECT * FROM comics WHERE id = ?";
    const comic = await pool.query(query, [comicId]);

    // Renderizar la vista deleteComic.hbs con los datos del cómic
    res.render("deleteComics", { comicId, deleteUrl, comic: comic[0] });
  } catch (error) {
    console.error("Error al obtener el cómic para eliminar:", error);
    res.render("error");
  }
});


router.post("/comics/confirmdelete/:id", async (req, res) => {
  const comicId = req.params.id;

  try {
    // Realizar consulta SQL para eliminar el cómic por su ID
    const deleteQuery = 'DELETE FROM comics WHERE id = ?';
    await pool.query(deleteQuery, [comicId]);

    console.log('Cómic eliminado');
    res.redirect("http://localhost:3001/comics"); // Redirigir a la página de cómics
  } catch (error) {
    console.error('Error al eliminar el cómic:', error);
    res.sendStatus(500); // Error interno del servidor
  }
});


router.post('/contacto', async (req, res) => {
  const mail = {
    to: 'mmollerach98@gmail.com',
    subject: 'Contacto Web',
    html: `${req.body.name} se contacto a traves de la web y quiere mas informacion a este correo ${req.body.email}
    <br> Ademas, hizo el siguiente comentario: ${req.body.message} <br> Su tel es: ${req.body.phone}`
  }


  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'Mensaje Enviado'
  });

});



module.exports = router;
