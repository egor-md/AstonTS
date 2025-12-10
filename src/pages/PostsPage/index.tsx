import { PostCard } from "../../entities/post/ui/PostCard";
import "./PostList.css";
import type { Post } from "../../entities/post/Post";
import { useFetch } from "../../features/PostList/model/hooks/useFetch";

export function PostsPage() {
  const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div className="loader">{error}</div>;

  if (data) return (
    <ul className="postList">
      {data.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
