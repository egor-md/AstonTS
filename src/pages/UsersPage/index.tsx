import "./UsersPage.css";
import { useUsers } from "../../entities/user/hooks/useUsers";
import { Link } from "react-router-dom";

export function UsersPage() {
  const { data, loading, error } = useUsers();

  if (loading) return <p className="loader">Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Нет данных</p>;

  return (
    <ol className="UsersList">
      {data.map(user => (
        <li key={user.id} className="userI">
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ol>
  );
}
