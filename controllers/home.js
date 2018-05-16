const express = require('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('69f83c84a33c475584137f95b7eef274');

router.get('/', (req, res) => {
  newsapi.v2.topHeadlines({
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  let articles = [];
  let articlesLength = response.articles.length;
  articles = response.articles.map(article => {
                return article;
              }).sort((article_1,article_2) => {
                  return article_1.publishedAt > article_2.publishedAt; 
            });

  // for (i = 0; i < articlesLength; i++){
    // articles.push(response.articles[i]);
  // }
  //console.log(articles[1].title);
  res.render('home', {newsArticles: articles});
}).catch((err) => {
    console.log(err);
    res.render('/');
  })
});

module.exports = router;
