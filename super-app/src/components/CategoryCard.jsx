import "./CategoryCard.css";

function CategoryCard({
  category,
  selected,
  onSelect,
}) {
  return (
    <div
      className={`category-card ${selected ? "active" : ""}`}
      style={{ background: category.color }}
      onClick={() => onSelect(category.name)}
    >
      <div className="category-header">
        <h3>{category.name}</h3>

        {selected && (
          <span className="check">
            ✓
          </span>
        )}
      </div>

      <div className="emoji">
        {category.image}
      </div>
    </div>
  );
}

export default CategoryCard;