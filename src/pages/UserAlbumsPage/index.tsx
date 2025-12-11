import { useParams } from "react-router-dom";
import { useAlbum } from "../../entities/album/hooks/useAlbum";
import './UserAlbumsPage.css'
import { Link } from "react-router-dom";


export function UserAlbumsPage() {
  const { id } = useParams();

  const { data, loading, error } = useAlbum(id);


  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Нет данных</div>;

  return (
    <div className="albumList">
      <h1>Альбомы</h1>
      {
        data.map(album => (
          <Link key={album.id} to={`/albums/${album.id}/photos`}><div className="album">{album.title}</div></Link>          
        )
        )
      }
    </div>
  );
}