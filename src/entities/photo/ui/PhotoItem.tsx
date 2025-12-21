import type { Photo } from '../model/types';

type Props = {
    photo: Photo
}

export function PhotoItem({ photo }: Props) {

    if (!photo) {
        return <div>Загрузка...</div>;
    }
    return (
        <img src={photo.thumbnailUrl} alt={photo.title} />
    )
}