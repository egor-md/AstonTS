import { Routes, Route } from "react-router-dom";
import { PostsPage } from "../../../pages/PostsPage/PostsPage";
import { PostPage } from "../../../pages/PostPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage";
import { UserTodosPage } from "../../../pages/UserTodosPage";
import { UserPostsPage } from "../../../pages/UserPostsPage/UserPostsPage";
import { UsersPage } from "../../../pages/UsersPage/UsersPage";
import { UserPage } from "../../../pages/UserPage/UserPage";

export function AppRouter() {
    return (
        <Routes>

            <Route path="/posts" element={<PostsPage />} />
            <Route path="/users" element={<UsersPage />} />
            
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
            <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
            <Route path="/users/:id/todos" element={<UserTodosPage />} />
            <Route path="/users/:id/posts" element={<UserPostsPage />} />

        </Routes>
    );
}
