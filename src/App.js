import "./App.css";
import { useState } from "react";
import Articles from "./components/Articals";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Main onCategoryChange={handleCategoryChange} />
      <Articles selectedCategory={selectedCategory} />
      <Footer />
    </div>
  );
}

export default App;
