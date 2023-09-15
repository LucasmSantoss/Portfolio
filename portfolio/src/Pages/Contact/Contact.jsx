import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const {
      REACT_APP_EMAILJS_SERVICE_ID: serviceID,
      REACT_APP_EMAILJS_TEMPLATE_ID: templateID,
      REACT_APP_EMAILJS_USER_ID: userID,
    } = process.env;

    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
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
      title: "Se enviará el correo a Lucas Matias Santos",
      text: "¿Deseas continuar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
      
      }
    });
  };

  return (
    <div className="pt-12 p-4 text-white body animate-slide-in-left">
      
  <h2 className=" text-center text-2xl md:text-5xl p-4">
  You can contact me from here!
  </h2>

  <form
    className="flex flex-col items-center gap-4 p-4 rounded-md"
    onSubmit={handleSubmit}
  >
    <div className="grid grid-cols-1 gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-lg rounded-md shadow-2xl underline underline-offset-41"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>Name:</span>
        <input
          className={`text-black w-full md:w-96 h-8 p-2  ${
            name ? "bg-white" : "bg-transparent"
          } border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
          type="text"
          name='from_name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-lg rounded-md shadow-2xl underline underline-offset-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>Mail:</span>
        <input
          className={`text-black w-full md:w-96 h-8 p-2  ${
            email ? "bg-white" : "bg-transparent"
          } border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
          type="email"
          name='user_email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-lg rounded-md shadow-2xl underline underline-offset-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)' }}>Message:</span>
        <textarea
          className={`text-black w-full md:w-96 p-2 ${
            message ? "bg-white" : "bg-transparent"
          } border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500`}
          style={{ height: "10rem" }}
          value={message}
          name='message'
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
    </div>

    <button
      className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      type="submit"
    >
      Submit
    </button>
  </form>
     
</div>

  );
}

export default Contact;
