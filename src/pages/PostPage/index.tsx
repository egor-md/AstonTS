import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../entities/post/api/postsApi';
import { useGetCommentsByPostIdQuery } from '../../entities/comment/api/commentsApi';
import { postsSelectors } from '../../entities/post/model/slice/postSlice';
import { useSelector } from 'react-redux';
import { PostCard } from '../../entities/post/ui/PostCard';

export function PostPage() {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  useGetPostByIdQuery(postId);
  
  const { data: comments, isLoading } = useGetCommentsByPostIdQuery(postId);

  const posts = useSelector(state =>
    postsSelectors.selectById(state, postId)
  );

  return (
    <PostCard post={posts} comments={comments} isLoading={isLoading}/>
  );
}
