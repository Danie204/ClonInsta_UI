import { useState } from 'react';
import Avatar from './Avatar';
//import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

const Profile = () => {
  const [showPosts, setShowPosts] = useState(false);
  const [userPosts, setUserPosts] = useState([]);

  // Función para obtener las publicaciones del usuario desde el servidor
  const fetchUserPosts = async () => {
    try {
      // Realiza una solicitud GET al servidor para obtener las publicaciones del usuario
      const response = await axios.get(`http://localhost:3000/posts/${userId}`); // Reemplaza userId con el ID del usuario actual

      // Actualiza el estado userPosts con las publicaciones obtenidas
      setUserPosts(response.data);
      setShowPosts(true);
    } catch (error) {
      console.error('Error al obtener las publicaciones del usuario:', error);
    }
  };

  const handleChangeAvatar = () => {
    // Lógica para cambiar el avatar del usuario
    // Esto podría incluir una redirección a la página de cambio de avatar
    // o la apertura de un modal, etc.
    // Por ahora, simplemente se imprime un mensaje en la consola.
    console.log("Cambiar avatar del usuario");
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <button onClick={fetchUserPosts}>Ver Publicaciones</button>
      <button onClick={handleChangeAvatar}>Cambiar Avatar</button>
      <Avatar />
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

export default Profile;
