import express from 'express';
import { addDataArticle } from '../model/model.js   ';

const route = express.Router();

route.post('/', async (req, res) => {
  try {
    const [result] = await addDataArticle(req.body);

    console.log(result);
    if (!result) {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
  res.send(`This is writer site using http method: ${req.method} `);
});

route.put('/', (req, res) => {
  res.send(`This is writer site using http method: ${req.method}`);
});

route.delete('/', (req, res) => {
  res.send(`This is writer site using http method: ${req.method}`);
});

export default route;
