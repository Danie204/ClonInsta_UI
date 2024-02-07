import { useState } from "react";
import { useUserActions } from "../../hooks/api";
import "./Like.css";

const Like = ({ postId, initialLiked, likes }) => {
  const [liked, setLiked] = useState(initialLiked);
  const [n, setN] = useState(likes);
  const userActions = useUserActions();

  const toggleLike = async () => {
    setLiked(!liked);
    const response = await userActions.like(postId);
    console.log("::", response);
    setN(response.data.numLikes);
  };

  return (
    <div>
      <span
        onClick={toggleLike}
        className={"like " + (liked ? "active" : "inactive")}
      ></span>{" "}
      {n} {n === 1 ? "Like" : "Likes"}
    </div>
  );
};

export default Like;
