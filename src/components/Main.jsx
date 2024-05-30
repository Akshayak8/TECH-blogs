import React from "react";
import logo from "./images/logo.png";

function Main({ onCategoryChange }) {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="heading">
            <h1>
              TECH
              <br />
              Blogs
            </h1>
          </div>
          <div className="About">
            <a onClick={() => onCategoryChange("All")}>Home</a>
            <a>Blogs</a>
          </div>
          <div className="About1">
            <a onClick={() => onCategoryChange("About")}>About</a>
          </div>
        </nav>
      </header>
      <div className="Categories">
        <a onClick={() => onCategoryChange("All")}>All</a>
        <a onClick={() => onCategoryChange("data-science")}>Data Science</a>
        <a onClick={() => onCategoryChange("data-analysis")}>Data Analysis</a>
        <a onClick={() => onCategoryChange("data-visualization")}>
          Data Visualization
        </a>
        <a onClick={() => onCategoryChange("web-development")}>
          Web Development
        </a>
      </div>
    </div>
  );
}

export default Main;
