/**
 * Created by Anil Jangra on 5/22/2021
 */

const NewsAPI = require('newsapi');

if (!process.env.API_KEY) {
  console.error('No API_KEY Specified.. exiting...');
  process.exit(0);
}
const newsapi = new NewsAPI(process.env.API_KEY);

let ukNewsSources;

const setUKNewsSources = async () => {
  const response = await newsapi.v2.sources({
    country: 'gb',
  });
  ukNewsSources = response.sources.map(({ id }) => id);
};

const searchEverything = async (query = '', page = 1) => {
  if (!ukNewsSources) await setUKNewsSources();
  return newsapi.v2.everything({
    q: query,
    language: 'en',
    sortBy: 'relevancy',
    sources: ukNewsSources.join(','),
    page,
  });
};

// Set News Sources for UK on boot (assuming sources wont change frequently)
setUKNewsSources();

module.exports = { searchEverything };
