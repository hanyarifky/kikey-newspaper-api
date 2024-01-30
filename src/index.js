import express from 'express';
import executeTimes from './execute_time.js';
import 'dotenv/config';
import user from './routes/user.js';
import writer from './routes/writer.js';

const app = express();
const port = process.env.PORT || 4000;
app.set("view engine", "")
app.use(executeTimes);
app.use(express.json());
app.use('/', user);
app.use('/writer', writer);

app.listen(port, 'localhost', () => {
  console.log(`Server sedang berjalan di ${port}`);
});
