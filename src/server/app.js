/**
 * Created by Anil Jangra on 5/20/2021
 */
const express = require('express');
const cors = require('cors');
const { searchEverything } = require('./news.controller');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));

app.get('/api/news/search', async ({ query: { query, page = 1 } }, res) => {
  try {
    const { articles, totalResults } = await searchEverything(query, page);
    res.send({ articles, hasMore: ((page + 1) * 20) < totalResults });
  } catch (err) {
    // console.log(err);
    res.send({ error: 'Error Fetching News..' });
  }
});

module.exports = app;
