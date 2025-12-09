import { NavLink } from "react-router-dom";

export function UserTabs() {    

    return (
        <nav className="userTabs">
            <NavLink to={`/posts`}>Posts</NavLink>
            <NavLink to={`/posts111`}>Posts111</NavLink>
            <NavLink to={`/contacts`}>Contacts</NavLink>
        </nav>
    );
}
