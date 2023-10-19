import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Contacto = () => 
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Restablece los campos del formulario y muestra un mensaje de éxito
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('¡Correo electrónico enviado con éxito!');
        setErrorMessage('');
        router.push('/')
      } else {
        setErrorMessage('Error al enviar el correo electrónico');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error al enviar el correo electrónico');
      setSuccessMessage('');
    }
  };

  return (
<Layout>
    <div className="container">
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Contacto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje:</label>
              <textarea
                id="message"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
</Layout>
  );
};

export default Contacto;
