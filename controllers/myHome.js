const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('69f83c84a33c475584137f95b7eef274');

function myHome(req, res){
  newsapi.v2.topHeadlines({
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  let articles = [];
  let articlesLength = response.articles.length;
  for (i = 0; i < articlesLength; i++){
    articles.push(response.articles[i]);
  }
  //console.log(articles[1].title);
  res.render('home', {newsArticles: response.articles});
}).catch((err) => {
    console.log(err);
    res.render('/');
});
}

module.exports = myHome;
