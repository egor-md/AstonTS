import { useParams } from "react-router-dom";
import { useUser } from '../../entities/user/hooks/useUser';
import { Link } from 'react-router-dom';
import './UserPage.css'

export function UserPage() {

    const { id } = useParams();
    const { data, loading, error } = useUser(id)

    if (loading) return <p className="loader">Загрузка...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return <p>Нет данных</p>;

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