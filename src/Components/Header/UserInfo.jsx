import { Link } from "react-router-dom";
import { useMyInfo } from "../../hooks/api";
import { useUser } from "./../../UserContext";
import "./Header.css";
import { FormattedMessage } from "react-intl";

const UserInfo = () => {
  const [user] = useUser();

  if (user) return <UserInfoLoggedIn />;

  return (
    <button>
      <Link to="/login">
        <FormattedMessage id="userInfo.login" />
      </Link>
    </button>
  );
};

const UserInfoLoggedIn = () => {
  const [, setUser] = useUser();
  const info = useMyInfo();
  return (
    <span className="userinfo">
      <img src={`http://localhost:3000/${info.data.user.avatar}`} />
      <Link
        to={`/profile/${info.data.user.id}`}
        onClick={() =>
          setTimeout(() => {
            window.location.reload();
          }, "100")
        }
      >
        {" "}
        {info.data.user.username}{" "}
      </Link>

      <span className="logout" onClick={() => setUser()}>
        ⏻
      </span>
    </span>
  );
};

export default UserInfo;
