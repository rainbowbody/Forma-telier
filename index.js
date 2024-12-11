const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit-inquiry', (req, res) => {
  console.log(req.body);
  res.send('Inquiry submitted! Thank you.');
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
