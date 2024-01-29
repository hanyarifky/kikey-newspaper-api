import express from 'express';
import { addDataArticle, deleteDataArticle, showDataArticleById, updateDataArticle } from '../model/model.js';

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

route.put('/:id', async (req, res) => {
  try {
    const [resultData] = await showDataArticleById(req.params.id);
    const { 
      title_article = resultData[0]['title_article'], 
      writer_article = resultData[0]['writer_article'], 
      content_article = resultData[0]['content_article'] 
    } = req.body;
    
    console.log(req.body);

    const newData = {
      ...resultData[0],
      title_article,
      writer_article,
      content_article,
    };

    const [resultUpdate] = await updateDataArticle(newData, req.params.id);

    if (!resultUpdate) {
      res.status(400).send('Error');
      throw new Error();
    }

    res.send('Success');
  } catch (error) {
    console.log(error);
  }
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
