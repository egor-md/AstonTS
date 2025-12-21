import './PostCard.css'
import type { Post } from '../model/types'
import { useTheme } from '../../../shared/lib/theme/ThemeContext'
import { CommentList } from '../../../widgets/CommentList/ui/CommentList'
import { Link } from 'react-router-dom'
import type { Comment } from '../../comment/model/types'

type Props = {
    post: Post
    comments?: Comment[]
    isLoading: boolean
}

export function PostCard({ post, comments, isLoading }: Props) {


    if (!post) {
        return <div>Загрузка поста...</div>;
    }

    const { theme } = useTheme();
    return (
        <li className={`postCard ${theme}`}>
            <div className="postCardHeader">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
            <div className="postCardBody">{post.body}</div>
            {isLoading ? <div className='loader'>loading</div> :
                comments ? <CommentList comments={comments} /> : <></>
            }
        </li>
    )
}