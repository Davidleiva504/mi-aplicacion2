import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://api/contactos')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error al obtener los contactos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de contactos</h2>
      {contacts.map((contact) => (
        <div key={contact.id} className="card">
          <h3>{contact.nombre}</h3>
          <p>Teléfono: {contact.telefono}</p>
          <p>Email: {contact.email}</p>
          {/* Agrega aquí otros campos que desees mostrar en la tarjeta */}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
