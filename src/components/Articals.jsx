import React, { useState, useEffect } from "react";
import ArticleItems from "./ArticalItems";

const mediumRSSFeed = "https://medium.com/feed/@akshayak8";
const rssToJsonServiceUrl = `https://cors-anywhere.herokuapp.com/https://api.rss2json.com/v1/api.json?rss_url=${mediumRSSFeed}`;

const Articles = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(rssToJsonServiceUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setArticles(data.items);
        } else {
          setError("No articles found");
        }
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
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
        <ArticleItems key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
