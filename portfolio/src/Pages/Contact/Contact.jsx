import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura tus credenciales de EmailJS
    emailjs.sendForm("service_nx13dcj", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((result) => {
        console.log(result.text);
        // Restablece los campos del formulario después de enviar el correo electrónico
        setName("");
        setEmail("lucasmsantoss95@hotmail.com");
        setMessage("");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Mensaje:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact;
