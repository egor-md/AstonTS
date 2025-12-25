import { useGetUsersQuery } from '../../entities/user/api/usersApi';
import { usersSelectors } from '../../entities/user/model/slice/userSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './UsersPage.css'

export function UsersPage() {
  const { isLoading, error } = useGetUsersQuery();
  const users = useSelector(usersSelectors.selectAll); 


  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <ol className="UsersList">
      {users.map(user => (
        <li key={user.id} className="userI">
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ol>
  );
}
