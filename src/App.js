import React from 'react';
import ContactList from './Componentes/ContactList';
import ContactForm from './Componentes/ContactForm';


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
