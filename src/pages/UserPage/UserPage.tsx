import './UserPage.css'
import { useParams } from "react-router-dom";
import { useUser } from '../../features/PostList/model/hooks/useUser';
import { Link } from 'react-router-dom';

export function UserPage() {

    const { id } = useParams();
    const { data, loading, error } = useUser(id)

    if (loading) return <div className="loader">Загрузка...</div>;
    if (error) return <div>{error}</div>;
    if (!data) return <div>Нет данных</div>;

    return (
        <div className="UserPage">
            <h3 className="userName">{data.name}</h3>
            <div className="userInfoWrap">
                <Link to={`/users/${id}/posts`}>Посты пользователя</Link>
                <Link to={`/users/${id}/albums`}>Альбомы пользователя</Link>
                <Link to={`/users/${id}/todos`}>ToDo пользователя</Link>
            </div>
        </div>
    )
}