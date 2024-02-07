import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../IntlContext';
import UserInfo from './UserInfo';
import './Header.css';
import { listPosts } from '../../hooks/api';

const Header = () => {
  const [lang, setLang] = useLang();
  const [theme, setTheme] = useState('light'); // Estado para el tema
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Función para manejar cambios en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Función para manejar la búsqueda y la navegación a la página de resultados
  const handleSearch = async () => {
    try {
      const posts = await listPosts(searchTerm); // Llama a la función listPosts con el término de búsqueda
      setSearchResult(posts);
      // Después de obtener los resultados, navegar a la página de resultados
    } catch (error) {
      console.error('Error al buscar publicaciones:', error);
    }
  };

  return (
    <header className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <nav>
        <Link to="/">
          <button>
            <span>Instragram</span>
          </button>
        </Link>
        <Link to="/posts">Publicar</Link>
      </nav>

      <span>
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

      {/* Usamos el componente Link para envolver el botón de búsqueda */}
      <Link
        to={{
          pathname: '/search-results',
          search: `?query=${searchTerm}`,
          state: { results: searchResult }
        }}
      >
        <button onClick={handleSearch}>Buscar</button>
      </Link>

      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
      </button>

      <UserInfo />
    </header>
  );
};

export default Header;
