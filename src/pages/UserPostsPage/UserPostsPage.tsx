import { useParams } from 'react-router-dom';
import { useGetPostsByUserIdQuery } from '../../entities/post/api/postsApi';
import { PostList } from '../../widgets/PostList/PostList';
import './UserPostsPage'

export function UserPostsPage() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { isLoading, data:posts } = useGetPostsByUserIdQuery(userId);

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <PostList posts={posts}></PostList>
  );
}
