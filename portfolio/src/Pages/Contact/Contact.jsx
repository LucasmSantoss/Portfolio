import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_v0f4h7m";
    const templateID = "template_ncuocj5";

    emailjs
      .sendForm(serviceID, templateID, e.target , "C5ms-eweBW0SHhINO")
      .then((result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
        mostrarAlerta();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const mostrarAlerta = () => {
    Swal.fire({
      title: 'Se enviará el correo a Lucas Matias Santos',
      text: '¿Deseas continuar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes agregar la lógica adicional después de que el usuario acepta la alerta
      }
    });
  };

  return (
    <div>
      <h2 className="text-white text-center  p-6 text-5xl  ">Si quieres contactarte conmigo y dejarme un mensaje con tus datos, puedes hacerlo desde aqui!</h2>
   
    <form className="flex flex-col items-center gap-4 p-4 rounded-md " onSubmit={handleSubmit}>
    <label className="flex flex-col gap-1">
      <span className="text-lg text-white rounded-md shadow-2xl">Nombre:</span>
      <input
        className={`text-black w-96 h-8 p-2 bg-${name ? 'white' : 'transparent'} border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </label>
    <label className="flex flex-col gap-1">
      <span className="text-lg text-white rounded-md shadow-2xl">Email:</span>
      <input
  className={`text-black w-96 h-8 p-2 bg-${email ? 'white' : 'transparent'} border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

    </label>
    <label className="flex flex-col gap-1">
  <span className="text-lg text-white rounded-md shadow-2xl">Mensaje:</span>
  <textarea
    className={`text-black w-96 p-2 bg-${message ? 'white' : 'transparent'} border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
    style={{ height: "15rem" }}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  />
</label>

    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      type="submit"
    >
      Enviar
    </button>
  </form>
  </div>
  
  );
}

export default Contact;