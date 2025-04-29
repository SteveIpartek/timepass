const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>¡Bienvenido a la página final!</h1>
    <p>Estás en la ruta: /endroute</p>
  `);
});

module.exports = router;