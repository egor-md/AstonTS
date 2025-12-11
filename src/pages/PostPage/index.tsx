import { useParams } from "react-router-dom";
import { usePost } from "../../entities/post/hooks/usePost";
import { PostCard } from "../../entities/post/ui/PostCard";

export function PostPage() {
  const { id } = useParams();
  const { data, loading, error } = usePost(id);

  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Нет данных</div>;

  return (
    <PostCard post = {data}></PostCard>
  );
}