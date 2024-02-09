import { useState } from 'react';
import { usePosts, usePostsById, useUserById, usePostsByUserId } from "../../../hooks/api";
import "./Profile.css"


const Profile = () => {
  const userId = window.location.pathname.split("/")[2];
  //const info = useMyInfo();
  const info = useUserById(userId);
  const posts = usePostsByUserId(userId);
  const [avatar, setAvatar] = useState(info.data.user.avatar);
  console.log('posts', posts);
  //console.log('window.location.pathname', window.location.pathname);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Aquí puedes hacer lo que necesites con el resultado, como enviarlo al servidor
      // En este ejemplo, actualizamos el estado local `avatar` con la URL base64 de la imagen
      setAvatar(reader.result);

      // Envía la imagen al servidor
      uploadAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const uploadAvatar = async (base64Image) => {
    try {
      const response = await fetch('http://localhost:3000/users/avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ avatar: base64Image }),
      });

      if (!response.ok) {
        throw new Error('Error al subir el avatar');
      }

      // Actualizar el avatar en la API si es necesario
    } catch (error) {
      console.error('Error:', error);
      // Manejar el error según sea necesario
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>{info.data.user.username}</h1>
          <h2 className="avatarinfo">
            <label htmlFor="avatarInput">
              <img src={`http://localhost:3000/${avatar}`} alt="Avatar" />
            </label>
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleAvatarChange}
            />
          </h2>
        </div>
        <div>
          <div>
            <span>50</span>
            <span>Publicaciones</span>
          </div>
          <div>
            <span>492</span>
            <span>Seguidores</span>
          </div>
          <div>
            <span>950</span>
            <span>Seguidos</span>
          </div>
          <div>
            <span>50</span>
            <span>Publicaciones</span>
          </div>
        </div>
      </div>
      <div className="posts">
        {posts &&
          posts.data.photos.map((e) => (
            <img src={`http://localhost:3000/${e.imagenURL}`} key={e.id} />
          ))}
      </div>
    </>
  );
};

export default Profile;
