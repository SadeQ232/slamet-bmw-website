const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    namaBengkel: "Bengkel Slamet",
    slogan: "Bengkel Khusus Mobil BMW • Profesional & Panggilan",
    nomorWA: "6281234567890"
  });
});

app.listen(port, () => {
  console.log(`Bengkel Slamet running di http://localhost:${port}`);
});
