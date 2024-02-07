import { useState } from 'react';
import Avatar from './Avatar'

const Profile = () => {
  const [showPosts, setShowPosts] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  // Función para simular la obtención de las publicaciones del usuario
  const fetchUserPosts = () => {
    // Aquí iría la lógica para obtener las publicaciones del usuario
    // Por ahora, simularemos que obtenemos algunos datos
    const posts = [
      { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1' },
      { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2' },
      { id: 3, title: 'Publicación 3', content: 'Contenido de la publicación 3' }
    ];
    setUserPosts(posts);
    setShowPosts(true);
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <button onClick={fetchUserPosts}>Ver Publicaciones</button>
      {showPosts && (
        <div>
          <h2>Publicaciones del Usuario</h2>
          {userPosts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
 }; 
<Avatar /> 

export default Profile;
