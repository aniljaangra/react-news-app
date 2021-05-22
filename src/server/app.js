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
  const response = await searchEverything(query, page);
  res.send(response.articles);
});

app.get('/api/news/all', async (req, res) => {
  const response = await fetchTopHeadlines();
  res.send(response.articles);
});

module.exports = app;
