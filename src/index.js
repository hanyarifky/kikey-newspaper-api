import express from 'express';
import mysql from 'mysql2/promise';
import executeTimes from './execute_time.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;
app.use(executeTimes);

// set database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kikey_newspaper_app',
});

app.get('/', async (req, res) => {
  try {
    const [results, fields] = await connection.query('SELECT * FROM article');

    console.log(results);
    console.log(fields);
  } catch (error) {
    console.log(error);
  }
  res.send('Hello, World');
});

app.post('/', async (req, res) => {
  try {
    const query = `INSERT INTO article 
                  VALUES('AT-003', 'Cesare Casadei Dipulangkan Lebih Awal', 'Muhammad Rifky Ramadhani',
                  'Secara mengejutkan chelsea memulangkan pemain pinjamannya lebih awal dari kontrak', '2024-01-22')`;

    const [result] = await connection.query(query);
    if (!result) {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
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
