import './PostCard.css'
import type { Post } from '../Post'
import { useTheme } from '../../../shared/lib/theme/ThemeContext'
import { CommentList } from '../../../widgets/CommentList/ui/CommentList'
import { Link } from 'react-router-dom'

type Props = {
    post: Post
}

export function PostCard({ post }: Props) {

    const { theme } = useTheme();
    return (
        <li className={`postCard ${theme}`}>
            <div className="postCardHeader">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                
                </div>
            <div className="postCardBody">{post.body}</div>
            <CommentList comments={post.comments} />
        </li>
    )
}