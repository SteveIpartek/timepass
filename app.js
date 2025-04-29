const express = require('express');
const path = require('path');
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

const app = express();
const port = 3000;

// Middleware para obtener la hora en todas las peticiones
app.use(horaMiddleware);

// Ruta principal
app.use('/', indexRouter);

// Ruta protegida por el middleware de validación de hora
app.use('/endroute', validarHora, endrouteRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});