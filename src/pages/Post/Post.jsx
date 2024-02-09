import { FormattedDate } from "react-intl"
import { Link, useParams } from "react-router-dom"
import { usePosts } from "../../hooks/api"
import './Post.css'

const Post = () => {
  const { id } = useParams()
  const Posts = usePosts(id)
  const style = {}
  console.log('posts::', Posts)
  if (post.data.posts.photos[0]) 
  style.backgroundImage = 
 `url("http://localhost:3000/posts/${post.data.photos[0].name}")`

  return (
    <div id="post">
      <header style={style}>
        <Link to="/">⬅</Link>
        <h2>{Posts.data.posts.description}</h2>
      </header>
      <div className="metadata">
        <span className="author">Por {Posts.data.post.username}</span>
        {' - '}
        <span className="description">{Posts.data.post.description}</span>
        {' - '}
        <span className="date"><FormattedDate value={Posts.data.post.createdAt} month="long" day="numeric" /></span>
        {' - '}
      </div>
      <main>
        {posts.data.posts.description}
      </main>
    </div>
  )
}

export default Post
