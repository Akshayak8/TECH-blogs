import React, { useState, useEffect } from "react";
import ArticleItem from "./ArticalItems";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const mediumRssFeedUrl = "https://medium.com/feed/@akshayak8";
const fetchUrl = `${proxyUrl}${mediumRssFeedUrl}`;

const Articles = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(fetchUrl)
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
        <ArticleItem key={index} article={article} />
      ))}
    </div>
  );
};

export default Articles;
