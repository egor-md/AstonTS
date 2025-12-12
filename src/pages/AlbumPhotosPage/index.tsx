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

  if (loading) return <p className="loader">Загрузка...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>Нет данных</p>;

  return (
    <div className="photosList">
      {
        photos.map(photo => (          
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        )
        )
      }
    </div>
  );
}
