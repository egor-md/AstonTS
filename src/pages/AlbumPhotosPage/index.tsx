import { useParams } from "react-router-dom";
import { useAlbumPhotos } from "../../entities/photo/hooks/useAlbumPhotos"
import { useMemo } from "react";
import './AlbumPhotosPage.css'
import type { Photo } from "../../entities/photo/model/types";
import { PhotoItem } from "../../entities/photo/ui/PhotoItem";
import { ItemList } from "../../shared/ui/ItemList/ItemList";


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
    <ItemList<Photo>
      items={photos}
      className="photosListNew"
      keyExtractor={(photo) => photo.id}
      renderItem={(photo) => <PhotoItem photo={photo}/>}
    />
  );
}
