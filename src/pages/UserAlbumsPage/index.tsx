import { useParams } from "react-router-dom";
import { useGetAlbumsByUserIdQuery } from "../../entities/album/api/albumsApi";
import './UserAlbumsPage.css'
import { ItemList } from "../../shared/ui/ItemList/ItemList";
import { AlbumCard } from "../../entities/album/ui/AlbumCard";
import type { Album } from "../../entities/album/model/types";


export function UserAlbumsPage() {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  
  useGetAlbumsByUserIdQuery(userId)
  const { data: albums, isLoading } = useGetAlbumsByUserIdQuery(userId);

  if (isLoading || !albums) return <div>Загрузка...</div>;

  return (
    <ItemList<Album>
          items={albums}
          className={'albumListNew'}
          keyExtractor={(album) => album.id}
          renderItem={(album) => <AlbumCard album={album} />}
        />
  );
}