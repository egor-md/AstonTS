import { useParams } from "react-router-dom";
import { useUsersPosts } from "../../entities/post/hooks/useUsersPosts";
import { PostList } from "../../widgets/PostList/PostList";

export function UserPostsPage() {
  const { id } = useParams();


  const { data, loading, error } = useUsersPosts(id);

  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Нет данных</div>

  return (
    <>
      <h1>Посты пользователя</h1>
      <PostList posts={data}></PostList>
    </>
  )
}