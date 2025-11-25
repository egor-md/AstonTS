import './PostCard.css'
import type { Post } from '../Post'

type Props = {
    post: Post
}

export function PostCard({ post }: Props) {
    return (
        <div className="postCard">
            <div className="postCardHeader">{post.title}</div>
            <div className="postCardBody">{post.body}</div>
        </div>
    )
}