import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    asunto: "",
    descripcion: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Formulario enviado correctamente");
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Asunto</label>
          <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            rows="5"
            value={formData.descripcion}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
