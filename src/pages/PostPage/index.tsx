import { useParams } from "react-router-dom";
import { usePost } from "../../entities/post/hooks/usePost";
import { PostCard } from "../../entities/post/ui/PostCard";

export function PostPage() {
  const { id } = useParams();
  const { data, loading, error } = usePost(id);

  if (loading) return <p className="loader">Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Нет данных</p>;

  return (
    <PostCard post = {data}></PostCard>
  );
}