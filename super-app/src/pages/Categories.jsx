import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../utils/constants";
import useStore from "../store/useStore";
import "./Categories.css";

function Categories() {
  const navigate = useNavigate();
  const { setCategories } = useStore();

  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");

  const handleSelect = (category) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      setSelected([...selected, category]);
    }

    setError("");
  };

  const handleNext = () => {
    if (selected.length < 3) {
      setError("Minimum 3 categories required");
      return;
    }

    setCategories(selected);
    localStorage.setItem("categories", JSON.stringify(selected));

    navigate("/dashboard");
  };

  return (
    <div className="categories-page">

      <div className="left-panel">

        <h1 className="logo">Super app</h1>

        <h2>Choose your entertainment category</h2>

        <div className="selected-list">
          {selected.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

      </div>

      <div className="right-panel">

        <div className="cards-grid">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              selected={selected.includes(category.name)}
              onSelect={handleSelect}
            />
          ))}

        </div>

        <button className="next-btn" onClick={handleNext}>
          Next Page
        </button>

      </div>

    </div>
  );
}

export default Categories;