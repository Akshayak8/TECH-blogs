import React from "react";

function formatDate(inputText) {
  const inputDate = new Date(inputText);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return inputDate.toLocaleDateString(undefined, options);
}

function extractContent(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  const firstParagraph = div.querySelector("p");
  return firstParagraph ? firstParagraph.textContent : "";
}

function extractImage(htmlString) {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  const img = div.querySelector("img");
  return img ? img.src : "default-image-url.png";
}

const ArticleItems = ({ article }) => {
  const content = extractContent(article.content);
  const formattedDate = formatDate(article.pubDate);
  const imageSrc = article.thumbnail || extractImage(article.content);

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

export default ArticleItems;
