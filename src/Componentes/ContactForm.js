import React, { useState } from 'react';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      nombre,
      telefono,
    };

    fetch('http://localhost:3001/nombrec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContact),
      })
      
  };

  return (
    <div>
      <h2>Agregar contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default ContactForm;
