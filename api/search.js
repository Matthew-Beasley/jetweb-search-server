const express = require('express');
const googleSearch = require('jetweb-search');
const searchRouter = express.Router();


searchRouter.get('/', async (req, res, next) => {
  try {
    const results = await googleSearch(req.query.term, req.query.pages);
    console.log(results)
    res.send(results);
  } catch(err) {
    res.send(err);
  }
});

module.exports = searchRouter;