import { FormattedDate } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';
import './Posts.css';
import Like from './Like';

const Posts = ({ data }) => {
  const style = {};
  const slug = data.description.toLowerCase().replaceAll(' ', '-');
  const navigate = useNavigate();

  return (
    <>
    <Link className="Posts" style={style} to={`/posts/${data.id}/${slug}`}>
      <h3>{data.description}</h3>
      <div className='Posts' style= {{ backgroundImage : `url("http://localhost:3000/${data.imagenURL}")`}}>
        <span className="author">Por 
        <button
      className="profile-button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        navigate(`/profile/${data.userId}`);
      }}
    >
      {data.username}
    </button>
        </span>
        {' - '}
        <span className="date"><FormattedDate value={data.createdAt} month="long" day="numeric" /></span>
      </div>
    </Link>
    <Like/> 
    </>
  );
}

export default Posts;






