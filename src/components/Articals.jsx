import { useState, useEffect } from "react";
import ArticleItems from "./ArticalItems";

const mediumArticle =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akshayak8";

const Articles = ({ selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(mediumArticle)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data.items); // Log the fetched data
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
