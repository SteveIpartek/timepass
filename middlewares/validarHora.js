function validarHora(req, res, next) {
    const now = new Date();
    const currentHour = now.getHours();
  
    if (currentHour >= 12 && currentHour < 24) {
      next(); // La hora es válida, permite el acceso a la siguiente ruta
    } else {
      res.send('Aún no son las 12 de la mañana.');
    }
  }
  
  module.exports = validarHora;