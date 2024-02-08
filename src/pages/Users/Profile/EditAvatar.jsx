import Avatar from './Avatar';

const EditAvatar = () => {
  const handleChangeAvatar = () => {
    console.log("Cambiar avatar del usuario");
  };

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <button onClick={handleChangeAvatar}>Cambiar Avatar</button>
      <Avatar />
    </div>
  );
};

export default EditAvatar;