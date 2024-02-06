import { useState } from "react";
import { useUserActions } from "../../hooks/api";
import "./Like.css";

const Like = ({ postId, initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);
  const userActions = useUserActions();

  const toggleLike = () => {
    setLiked(!liked);
    userActions.like(postId);
  };

  return (
    <span
      onClick={toggleLike}
      className={"like " + (liked ? "active" : "inactive")}
    >
      ❤️
    </span>
  );
};

export default Like;
