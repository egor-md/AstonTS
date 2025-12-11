import './PostCard.css'
import type { Post } from '../Post'
import { useTheme } from '../../../shared/lib/theme/ThemeContext'

interface Props {
    post: Post
}

export function PostCard({ post }: Props) {

    const { theme } = useTheme();

    return (
        <>
            <li className={`postCard ${theme}`}>
                <div className="postCardHeader">{post.title}</div>
                <div className="postCardBody">{post.body}</div>
            </li>
        </>

    )
}