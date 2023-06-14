import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [nombrec, setContacts] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:3001/nombrec')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error al obtener los datos de la tabla nombrec:', error));
  }, []);

  return (
    <div>
      <h2>Lista de contactos</h2>
      {nombrec.map((nombrec) => (
        <div key={nombrec.id}  >
          <h3>{nombrec.nombre}</h3>
          <p>apellido_paterno: {nombrec.apellido_paterno}</p>
          <p>apellido_materno: {nombrec.apellido_materno}</p>
          {/* Agrega aquí otros campos que desees mostrar en la tarjeta */}
        </div>
      ))}
    </div>
  );
 
};

export default ContactList;
