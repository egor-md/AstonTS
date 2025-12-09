import { useParams } from "react-router-dom";

export function UserTodosPage() {
  const { id } = useParams();

  return <h1>Todos of user {id}</h1>;
}