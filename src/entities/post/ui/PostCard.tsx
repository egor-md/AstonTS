import './PostCard.css'
import type { Post } from '../model/types'
import { useTheme } from '../../../shared/lib/theme/ThemeContext'
import { Link } from 'react-router-dom'
import type { Comment } from '../../comment/model/types'
import { ItemList } from '../../../shared/ui/ItemList/ItemList'
import { CommentCard } from '../../comment/ui/CommentCard'
import { Button } from '../../../shared/ui/Button/Button'
import { useState } from 'react'

type Props = {
    post: Post
    comments?: Comment[]
    isLoading?: boolean
}

export function PostCard({ post, comments, isLoading }: Props) {


    const [isShow, setIsShow] = useState(false);

    const toggleComments = () => {
        setIsShow(prev => !prev);
    }

    if (!post) {
        return <div>Загрузка поста...</div>;
    }

    const { theme } = useTheme();
    return (
        <div className={`postCard ${theme}`}>
            <div className="postCardHeader">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
            <div className="postCardBody">{post.body}</div>
            {isLoading ? <div className='loader'>loading</div> :
                comments ?
                    <>
                        <Button className="button showCommentsButton" onClick={toggleComments}>{`комментарии ${comments?.length || 0}`}</Button>
                        {isShow ?
                            <ItemList items={comments} keyExtractor={comment => comment.id} renderItem={comment => <CommentCard comment={comment} />} />
                            : <></>}
                    </>
                    : <></>
            }
        </div>
    )
}