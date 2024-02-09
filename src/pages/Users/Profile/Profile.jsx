import { useMyInfo, usePostsById } from "../../../hooks/api";

const Profile = () => {
  const info = useMyInfo();
  const posts = usePostsById(info.data.user.id);

  return (
    <>
      <div>
        <div>
          <h1>{info.data.user.username}</h1>
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
            <span>Seguidores</span>
          </div>
        </div>
      </div>
      <div>Las fotos en grilla
        {posts && posts.data.photos.map((e) => 
          <img src={`http://localhost:3000/${e.imagenURL}`} key={e.id} alt={`Publicación ${e.id}`} />
        )}
      </div>
    </>
  )
}

export default Profile;


/*
import { useMyInfo } from "../../../hooks/api";
import { usePostsById } from "../../../hooks/api";

const Profile = () => {
  const info = useMyInfo();
  const posts = usePostsById(info.data.user.id);

  return (
    <>
    <div>
      <div>
      <h1>{info.data.user.username}</h1>
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
    <div>Las fotos en grilla
    {posts && posts.data.photos.map((e) => 
      <img src={`http://localhost:3000/${e.imagenURL}`} key={e.id}/>)}
    </div>
</>
  )
}

export default Profile;*/