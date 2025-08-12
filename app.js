require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rutas de prueba
app.get('/', (req, res) => res.send('Hola desde /'));
app.get('/about', (req, res) => res.send('Página About'));

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
