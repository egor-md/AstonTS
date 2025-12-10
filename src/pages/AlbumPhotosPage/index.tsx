import { useParams } from "react-router-dom";
import { useAlbum } from "../../features/PostList/model/hooks/useAlbum";


export function AlbumPhotosPage() {
  const { id } = useParams();

  const { data, loading, error } = useAlbum(id);


  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Нет данных</div>;

  return (
    <div className="albumList">
      {
        data.map(album => (
          <div>{album.title}</div>
        )
        )
      }
    </div>
  );
}