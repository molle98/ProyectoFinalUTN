import { useState } from "react";
import axios from "axios";

const ContactoPage = (props) => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto</h2>
        <form
          action="http://localhost:3000/contacto"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label for="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Telefono:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label for="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div class="form-group">
            <input type="submit" value="Enviar" />
          </div>
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
      </div>
      <br />
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <ul>
          <li>Teléfono: </li>
          <li>Email: </li>
          <li>Facebook: </li>
          <li>Twitter: </li>
          <li>Instagram: </li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
