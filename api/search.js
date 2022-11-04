import express from 'express';
import { googleSearch, bingSearch } from './jetweb-search.js';
const searchRouter = express.Router();


searchRouter.get('/bing', async (req, res, next) => {
  try {
    const results = await bingSearch(req.query.term, req.query.pages);
    res.send(results);
  } catch(err) {
    res.send(err);
  }
});

searchRouter.get('/google', async (req, res, next) => {
  try {
    const results = await googleSearch(req.query.term, req.query.pages);
    res.send(results);
  } catch(err) {
    res.send(err);
  }
});

export default searchRouter;