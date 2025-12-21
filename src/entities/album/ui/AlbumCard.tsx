import type { Album } from "../model/types";
import { Link } from "react-router-dom";

type Props = {
    album: Album
    isLoading?: boolean
}

export function AlbumCard({ album, isLoading }: Props) {

    if (!album || isLoading) {
        return <div>Загрузка...</div>;
    }
    return (
        <>
            <Link to={`/albums/${album.id}/photos`}>{album.title}</Link>
        </>
    )
}