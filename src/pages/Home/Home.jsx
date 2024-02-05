import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import { usePosts } from "../../hooks/api";
import { useUser } from "../../UserContext";
import {  FormattedMessage  } from "react-intl";
import Posts from "./Posts";
import './Home.css'

const Home = () => {
  const posts = usePosts();
  const [user] = useUser();
  const [theme] = useTheme();

  <p><FormattedMessage id="home.theme" values={{ theme: <FormattedMessage id={`themes.${theme}`} /> }} /></p>
  return (
    <div id="home">
      <p><FormattedMessage id="home.welcome"/></p>
      <h2>Entradas Recientes </h2>
      {user &&
        <Link className="new-posts-link" to="/Posts">Nuevo Post</Link>
      }
      {posts && posts.data.photos.map(e =>
        <Posts key={e.id} data={e} />
      
      )} 
    </div>
  );
}

export default Home;
