import express from 'express';
import { addDataArticle, deleteDataArticle } from '../model/model.js   ';

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

route.delete('/:id', async (req, res) => {
  try {
    const [result] = await deleteDataArticle(req.params.id);

    console.log(result);
    if (!result) {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
  res.send(`This is writer site using http method: ${req.method}`);
});

export default route;
