import { useParams } from "react-router-dom";

export function UserAlbumsPage() {
  const { id } = useParams();

  return <h1>Albums of user {id}</h1>;
}