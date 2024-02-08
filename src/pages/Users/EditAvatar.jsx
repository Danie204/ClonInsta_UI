import Avatar from './Avatar';
//import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

const EditAvatar = () => {
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
    </div>
  );
};

export default EditAvatar;