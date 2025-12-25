import { useParams } from "react-router-dom";
import { useGetAlbumsByUserIdQuery } from "../../entities/album/api/albumsApi";
import './UserAlbumsPage.css'
import { Link } from "react-router-dom";


export function UserAlbumsPage() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);


  useGetAlbumsByUserIdQuery(userId)
  const { data: albums, isLoading } = useGetAlbumsByUserIdQuery(userId);

  if (isLoading || !albums) return <div>Загрузка...</div>;

  return (
    <div className="albumList">
      <h1>Альбомы</h1>
      {
        albums.map(album => (
          <Link key={album.id} to={`/albums/${album.id}/photos`}><p className="album">{album.title}</p></Link>
        )
        )
      }
    </div>
  );
}