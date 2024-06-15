import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticalItems";

const mediumRssFeedUrl =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akshayak8";

const Articles = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(mediumRssFeedUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setArticles(data.items);
        } else {
          setError("No articles found");
        }
      })
      .catch((err) => {
        setError("Failed to fetch articles");
      });
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      selectedCategory === "All" ||
      article.categories.includes(selectedCategory)
  );

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="article__container container grid">
      {filteredArticles.map((article, index) => (
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
