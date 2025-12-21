import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { postsSelectors } from '../../entities/post/model/slice/postSlice';
import { useSelector } from 'react-redux';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import type { Post } from '../../entities/post/model/types';
import { PostCard } from '../../entities/post/ui/PostCard';

export function PostsPage() {
  const { isLoading, error } = useGetPostsQuery();
  const posts = useSelector(postsSelectors.selectAll);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <ItemList<Post>
      items={posts}
      keyExtractor={(post) => post.id}
      renderItem={(post) => <PostCard post={post} />}
    />
  );
}
