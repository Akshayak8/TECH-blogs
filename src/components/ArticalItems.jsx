import React from "react";

// Function to format a given date string
function formatDate(inputText) {
  const inputDate = new Date(inputText);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return inputDate.toLocaleDateString(undefined, options);
}

// Function to extract content from HTML string using regex patterns
function extractContent(htmlString) {
  const h4Pattern = /<h4>(.*?)<\/h4>/s;
  const pPattern = /<p>(.*?)<\/p>/s;

  const h4Match = htmlString.match(h4Pattern);
  const pMatch = htmlString.match(pPattern);

  if (h4Match && pMatch) {
    const h4Content = h4Match[1];
    const pContent = pMatch[1];
    return `${h4Content} - ${pContent}`;
  } else if (pMatch) {
    const pContent = pMatch[1];
    return pContent;
  }
  return null;
}

// Function to extract the first image URL from the HTML string
function extractImage(htmlString) {
  const imgPattern = /<img[^>]+src="([^">]+)"/i;
  const imgMatch = htmlString.match(imgPattern);
  return imgMatch ? imgMatch[1] : null;
}

// Component to render article items
function ArticleItems({ article }) {
  const content = extractContent(article.description);
  const formattedDate = formatDate(article.pubDate);
  const imageSrc =
    article.thumbnail ||
    extractImage(article.description) ||
    "default-image-url.png"; // Use a default image if none found

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
            <h2 className="article-date">Published on : {formattedDate}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleItems;
