import { useState } from "react"
import { useUserActions } from "../../hooks/api"
import './Like.css'

const Like = ({ id, initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked)
  const userActions = useUserActions()

  const toggleLike = () => {
    setLiked(!liked)
    if (liked) {
      userActions.unlike(id)
    } else {
      userActions.like(id)
    }
  }

  return (
    <span onClick={toggleLike} className={'like ' + (liked ? 'active' : 'inactive')}>❤️</span>
  )
}

export default Like
