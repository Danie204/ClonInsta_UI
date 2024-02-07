import { FormattedDate } from "react-intl"
import { Link, useParams } from "react-router-dom"
import { usePosts } from "../../hooks/api"
import './Post.css'

const Post = () => {
  const { id } = useParams()
  const post = usePosts(id)
  const style = {}
  console.log('posts::', post)
  if (post.data.posts.photos[0]) 
  style.backgroundImage = 
 `url("http://localhost:3000/posts/${post.data.photos[0].name}")`

  return (
    <div id="post">
      <header style={style}>
        <Link to="/">⬅</Link>
        <h2>{post.data.post.description}</h2>
      </header>
      <div className="metadata">
        <span className="author">Por {post.data.post.username}</span>
        {' - '}
        <span className="description">En {post.data.post.description}</span>
        {' - '}
        <span className="date"><FormattedDate value={post.data.post.createdAt} month="long" day="numeric" /></span>
        {' - '}
      </div>
      <main>
        {post.data.post.description}
      </main>
    </div>
  )
}

export default Post
