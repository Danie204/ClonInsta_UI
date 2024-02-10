import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../IntlContext";
import UserInfo from "../../Components/Header/UserInfo";
import "./Header.css";
import { useUser } from "../../UserContext";

const Header = ({ setFiltros }) => {
  const [lang, setLang] = useLang();
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [user] = useUser();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    setFiltros(searchTerm);
    setSearchTerm("");
  };

  return (
    <header className={theme === "light" ? "light-theme" : "dark-theme"}>
      <nav>
        <Link to="/">
          <button>
            <span>Instragram</span>
          </button>
        </Link>
      </nav>
      <Link to="/posts">
        <button>
          <span>Publicar</span>
        </button>
      </Link>

      <span className="lang">
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">🇬🇧 en</option>
          <option value="es">🇪🇸 es</option>
        </select>
      </span>

      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <button onClick={handleSearch}>Buscar</button>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Tema oscuro" : 
        "Tema claro"}
      </button>
      <UserInfo />
    </header>
  );
};

export default Header;
