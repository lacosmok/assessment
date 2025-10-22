import { useNavigate } from "react-router-dom";
import { useData } from "../state/DataContext";

export default function SearchBar() {
  const { search, setSearch } = useData();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/`);
  };
  const clearInput = () => setSearch("");
  return (
    <form onSubmit={handleSearch}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <input
          type="text"
          className="border b-solid mx-4 px-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        {search && (
          <button
            onClick={clearInput}
            style={{
              position: "absolute",
              right: "5px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            aria-label="Clear input"
          >
            ×
          </button>
        )}
      </div>
    </form>
  );
}
