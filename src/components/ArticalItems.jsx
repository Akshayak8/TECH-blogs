import React from "react";

const extractContent = (htmlString) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || "";
};

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const ArticleItem = ({ article }) => {
  const content = extractContent(article.description);
  const formattedDate = formatDate(article.pubDate);
  const imageSrc = article.thumbnail || "default-image-url.png"; // Use a default image if none found

  return (
    <div className="article-card">
      <div className="article-body">
        <div className="article-image">
          <img className="article-img" src={imageSrc} alt={article.title} />
        </div>
        <div className="article-info">
          <div className="article-header">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="article-title"
            >
              {article.title}
            </a>
            <p className="article-description">
              {content}
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                Read more..
              </a>
            </p>
          </div>
          <div className="article-details">
            <h2 className="article-date">Published on: {formattedDate}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
