import { useGetUsersQuery } from '../../entities/user/api/usersApi';
import { usersSelectors } from '../../entities/user/model/slice/userSlice';
import { useSelector } from 'react-redux';
import type { User } from '../../entities/user/model/types';
import { UserCard } from '../../entities/user/ui/UserCard';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import './UsersPage.css'

export function UsersPage() {
  const { isLoading, error } = useGetUsersQuery();
  const users = useSelector(usersSelectors.selectAll);


  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <ItemList<User>
      items={users}
      className={'usersList'}
      keyExtractor={(user) => user.id}
      renderItem={(user) => <UserCard user={user} />}
    />
  );
}
