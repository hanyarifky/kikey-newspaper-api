import express from 'express';
import { showDataArticle, showDataArticleById } from '../model/model.js';

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const [result] = await showDataArticle();

    res.json({
      status: 'Success',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

route.get('/:id', async (req, res) => {
  try {
    const [result] = await showDataArticleById(req.params.id);
    res.status(200);
    res.json({
      status: 'Success',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

export default route;
