import "./UsersPage.css";
import { useUsers } from "../../entities/user/hooks/useUsers";
import { Link } from "react-router-dom";

export function UsersPage() {
  const { data, loading, error } = useUsers();

  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Нет данных</div>;

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
