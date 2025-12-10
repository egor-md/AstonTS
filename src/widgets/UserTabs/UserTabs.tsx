import { NavLink } from "react-router-dom";
import "./UserTabs.css"

export function UserTabs() {    

    return (
        <nav className="userTabs">
            <NavLink to={`/posts`}>Посты</NavLink>
            <NavLink to={`/users`}>Пользователи</NavLink>
        </nav>
    );
}
