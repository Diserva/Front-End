// components/Search.js

import  { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import style from "./Search.module.scss";

interface SearchProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <div className={style.searchContainer}>
      <SearchOutlined className={style.searchIcon} />
      <input
        type="text"
        value={query}
        placeholder="Пошук"
        className={style.searchInput}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button onClick={handleSearch} className={style.searchButton}>
        Знайти
      </button>
    </div>
  );
};

export default Search;