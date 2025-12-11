import { useParams } from "react-router-dom";
import { useAlbumPhotos } from "../../entities/photo/hooks/useAlbumPhotos"
import { useMemo } from "react";
import './AlbumPhotosPage.css'


export function AlbumPhotosPage() {
  const { id } = useParams();

  const { data, loading, error } = useAlbumPhotos(id);
  
  const photos = useMemo(() => {
    if (!data) return [];

    return data.map(photo => {
      const arr = photo.url.split('/');
      const last = arr[arr.length - 1];

      return {
        ...photo,
        url: `https://placehold.co/600/${last}/png`,
        thumbnailUrl: `https://placehold.co/150/${last}/png`,
      };
    });
  }, [data]);

  if (loading) return <div className="loader">Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Нет данных</div>;

  return (
    <div className="photosList">
      {
        photos.map(photo => (
          
          <img key={photo.id} src={photo.thumbnailUrl} alt="" />
        )
        )
      }
    </div>
  );
}
