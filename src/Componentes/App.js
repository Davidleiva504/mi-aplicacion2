import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div>
      <h1>Aplicación de Directorio de Contactos</h1>
      <ContactList />
      <ContactForm />
    </div>
  );
};

export default App;
