const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Bienvenido a la página principal</h1>
    <p>La hora actual es: ${req.currentTime}</p>
    <button onclick="window.location.href='/endroute'">Ir a la página final</button>
    <script>
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('click', function(event) {
          fetch(this.getAttribute('onclick').split("'")[1])
            .then(response => response.text())
            .then(data => {
              document.body.innerHTML = data;
            });
          event.preventDefault(); // Evita la navegación directa
        });
      });
    </script>
  `);
});

module.exports = router;