const express = require('express');
const googleSearch = require('jetweb-search');
const bingSearch = require('jetweb-search');
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

module.exports = searchRouter;