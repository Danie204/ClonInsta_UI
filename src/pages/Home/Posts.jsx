import { FormattedDate } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import "./Posts.css";
import Like from "./Like";
import DeletePost from "../Post/DeletePost";
import { FormattedMessage } from "react-intl";

const Posts = ({ data }) => {
  const style = {};
  const slug = data.description.toLowerCase().replaceAll(" ", "-");
  const navigate = useNavigate();
  const createdAt = new Date(data.createdAt);
  const currentDate = new Date();
  const differenceInHours = Math.round((currentDate - createdAt) / 3600000);
  const isMoreThanOneDay = differenceInHours >= 24;

  let timeAgoText = "";

  if (isMoreThanOneDay) {
    const differenceInDays = Math.floor(differenceInHours / 24);
    timeAgoText = `${differenceInDays} día${differenceInDays === 1 ? "" : "s"}`;
  } else {
    timeAgoText = `${differenceInHours} hora${
      differenceInHours === 1 ? "" : "s"
    }`;
  }

  return (
    <>
      <Link className="Posts" style={style} to={`/posts/${data.id}`}>
        <div
          className="Posts"
          style={{
            backgroundImage: `url("http://localhost:3000/${data.imagenURL}")`,
          }}
        >
          <h3>{data.description}</h3>

          <span className="author">
            <FormattedMessage id="posts.author" />
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
          <FormattedMessage id="posts.date" />
          <span className="date">
            <FormattedDate value={data.createdAt} month="long" day="numeric" />
          </span>
          {" - "}
          <span className="time-ago"> Hace {timeAgoText}</span>
        </div>
      </Link>
      <Like postId={data.id} likes={data.likes} />
      <DeletePost postId={data.id} />
    </>
  );
};

export default Posts;
