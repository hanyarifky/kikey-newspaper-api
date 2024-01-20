import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.post('/', (req, res) => {
  res.send(`${req.method} is used`);
});

app.put('/', (req, res) => {
  res.send(`${req.method} is used`);
  const method = req.method;
  console.log(method);
});

app.delete('/', (req, res) => {
  res.send(`${req.method} is used`);
});

app.listen(port, 'localhost', () => {
  console.log(`Server sedang berjalan di ${port}`);
});
