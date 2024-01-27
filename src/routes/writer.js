import express from 'express';

const route = express.Router();

route.post('/', (req, res) => {
  res.send(`This is writer site using http method: ${req.method} `);
});

route.put('/', (req, res) => {
  res.send(`This is writer site using http method: ${req.method}`);
});

route.delete('/', (req, res) => {
  res.send(`This is writer site using http method: ${req.method}`);
});

export default route;
