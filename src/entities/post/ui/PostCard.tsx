import './PostCard.css'
import type { Post } from '../Post'
import { useTheme } from '../../../shared/lib/theme/ThemeContext'

interface Props {
    post: Post
}

export function PostCard({ post }: Props) {

    const { theme } = useTheme();

    return (
        <li className={`postCard ${theme}`}>
            <p className="postCardHeader">{post.title}</p>
            <p className="postCardBody">{post.body}</p>
        </li>
    )
}