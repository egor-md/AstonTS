import './PostCard.css'
import type { Post } from '../Post'
import { useTheme } from '../../../shared/lib/theme/ThemeContext'
import { CommentList } from '../../../widgets/CommentList/ui/CommentList'

type Props = {
    post: Post
}

/* type isVisibleComments = {
    isVisibleComments: true | false
} */

export function PostCard({ post }: Props) {

    const { theme } = useTheme();

    return (
        <div className={`postCard ${theme}`}>
            <div className="postCardHeader">{post.title}</div>
            <div className="postCardBody">{post.body}</div>
            <CommentList comments={post.comments} />
        </div>
    )
}