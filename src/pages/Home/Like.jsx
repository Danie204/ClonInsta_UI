import React, { useState } from "react";
import { useUserActions } from "../../hooks/api";
import { FormattedMessage } from "react-intl";
import "./Like.css";

const Like = ({ postId, initialLiked, likes }) => {
  const [liked, setLiked] = useState(initialLiked);
  const [n, setN] = useState(likes);
  const [errorMessage, setErrorMessage] = useState(null);
  const userActions = useUserActions();

  const toggleLike = async () => {
    try {
      const response = await userActions.like(postId);
      setLiked(!liked);
      setN(response.data.numLikes);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(<FormattedMessage id="error-message" />);
      }
      
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
  };

  return (
    <div style={{ textAlign: "center" }}> 
      {errorMessage && (
        <div
          style={{
            color: "black",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
            borderRadius: "5px"
          }}
        > 
          {errorMessage}
        </div>
      )}
      <button className="Btn" onClick={toggleLike}> 
        <span className="leftContainer">
          <svg
            fill={liked ? "white" : "white"}
            viewBox="0 0 512 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
          </svg>
          <span className="like"></span>
        </span>
        <span className="likeCount">
          {n} {n === 1 ? "Like" : "Likes"}
        </span>
      </button>
    </div>
  );
};

export default Like;




