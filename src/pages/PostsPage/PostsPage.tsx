import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { postsSelectors } from '../../entities/post/model/slice/postSlice';
import { useSelector } from 'react-redux';
import { PostList } from '../../widgets/PostList/PostList';

export function PostsPage() {
  const { isLoading, error } = useGetPostsQuery();
  const posts = useSelector(postsSelectors.selectAll);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;
  
  return (
    <PostList posts={posts}></PostList>
  );
}
