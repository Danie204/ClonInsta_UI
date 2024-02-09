import { FormattedDate } from "react-intl";
import { usePostsById } from "../../hooks/api";
import "./Post.css";
import Like from "../Home/Like";

const Post = () => {
  const postId = window.location.pathname.split("/")[2];
  const result = usePostsById(postId);
  const data = result.data.post;

  return (
    <>
      <div
        className="Posts"
        style={{
          backgroundImage: `url("http://localhost:3000/${data.imagenURL}")`,
        }}>
        <h3>{data.description}</h3>
        <span className="author">
          Por
          <button
            className="profile-button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate(`/profile/${data.userId}`);
            }}
          >
            {data.username}
          </button>
        </span>
        {" - "}
        <span className="date">
          <FormattedDate value={data.createdAt} month="long" day="numeric" />
        </span>
        {" - "}
      </div>
      <Like postId={data.id} likes={data.likes} />
    </>
  );
};

export default Post;
