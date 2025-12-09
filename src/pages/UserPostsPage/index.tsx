import { useParams } from "react-router-dom";

export function UserPostsPage() {
  const { id } = useParams();

  return <h1>Posts of user {id}</h1>;
}