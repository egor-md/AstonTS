import { useParams } from "react-router-dom";
import { useUsersPosts } from "../../entities/post/hooks/useUsersPosts";
import { PostList } from "../../widgets/PostList/PostList";

export function UserPostsPage() {
  const { id } = useParams();


  const { data, loading, error } = useUsersPosts(id);

  if (loading) return <p className="loader">Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Нет данных</p>

  return (
    <>
      <h1>Посты пользователя</h1>
      <PostList posts={data}></PostList>
    </>
  )
}