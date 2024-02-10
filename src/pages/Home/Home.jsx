import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import { listPosts } from "../../hooks/api";
import { useUser } from "../../UserContext";
import Posts from "./Posts";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = ({ filtros }) => {
  const [posts, setPosts] = useState([]);
  const [user] = useUser();
  const [theme] = useTheme();

  useEffect(() => {
    const getListPost = async () => {
      const respAPI = await listPosts(filtros);
      setPosts(respAPI.data.photos);
    };
    getListPost();
  }, [filtros]);

  return (
    <div id="home">
      <h2>Entradas Recientes </h2>
      {user && (
        <Link className="new-posts-link" to="/Posts">
          <h3 className="new-posts">Nuevo Post</h3>
        </Link>
      )}
      {posts && posts.map((e) => <Posts key={e.id} data={e} />)}
    </div>
  );
};

export default Home;
