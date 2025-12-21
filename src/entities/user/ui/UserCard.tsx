import './UserCard.css'
import { Link } from 'react-router-dom'
import type { User } from '../model/types'

type Props = {
    user: User
    isLoading?: boolean
}

export function UserCard({ user, isLoading }: Props) {

    if (!user || isLoading) {
        return <div>Загрузка...</div>;
    }
    return (
        <>
            <div className="userCard">
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>                  
        </>
    )
}