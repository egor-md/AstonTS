import { PostList } from "../../widgets/PostList/PostList";
import { useFetch } from "../../shared/lib/hooks/useFetch";
import type { Post } from "../../entities/post/Post";
import "./PostsPage.css";

export function PostsPage() {
  const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div className="loader">{error}</div>;

  if (data) return (
    <PostList posts={data}></PostList>
  );
}
