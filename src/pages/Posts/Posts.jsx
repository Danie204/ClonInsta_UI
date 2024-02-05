import { FormattedDate } from "react-intl"
import { Link, useParams } from "react-router-dom"
import { usePosts } from "../../hooks/api"
import './Posts.css'


const Posts = () => {
  const { id } = useParams()
  const posts = usePosts(id)
  const style = {}
  console.log('posts::', posts)
  if (posts.data.posts.photos[0]) 
  style.backgroundImage = 
 `url("http://localhost:3000/posts/${posts.data.posts.photos[0].name}")`

  return (
    <div id="posts">
      <header style={style}>
        <Link to="/">⬅</Link>
        <h2>{posts.data.posts.description}</h2>
      </header>
      <div className="metadata">
        <span className="author">Por {posts.data.posts.username}</span>
        {' - '}
        <span className="description">En {posts.data.posts.description}</span>
        {' - '}
        <span className="date"><FormattedDate value={posts.data.posts.createdAt} month="long" day="numeric" /></span>
        {' - '}
      </div>
      <main>
        {posts.data.posts.description}
      </main>
    </div>
  )
}

export default Posts
