import { useParams } from "react-router-dom";
import { useAlbum } from "../../entities/album/hooks/useAlbum";
import './UserAlbumsPage.css'
import { Link } from "react-router-dom";


export function UserAlbumsPage() {
  const { id } = useParams();

  const { data, loading, error } = useAlbum(id);


  if (loading) return <p className="loader">Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Нет данных</p>;

  return (
    <div className="albumList">
      <h1>Альбомы</h1>
      {
        data.map(album => (
          <Link key={album.id} to={`/albums/${album.id}/photos`}><p className="album">{album.title}</p></Link>          
        )
        )
      }
    </div>
  );
}