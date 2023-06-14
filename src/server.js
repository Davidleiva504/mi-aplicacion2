const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = 3001;

const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Leiva',
  password: 'Hola1212',
  database: 'directorio',
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

app.get('/nombrec', (req, res) => {
  connection.query('SELECT * FROM nombrec', (error, results) => {
    if (error) {
      console.error('Error al obtener los datos de la tabla nombrec:', error);
      res.status(500).json({ error: 'Error al obtener los datos de la tabla nombrec' });
    } else {
      res.json(results);
    }
  });
});
  
  
  app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en el puerto ${PORT}`);
  });

 
  