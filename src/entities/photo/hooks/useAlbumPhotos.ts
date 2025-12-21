import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { Photo } from "../model/types";
export function useAlbumPhotos( id : string | undefined) {
    return useFetch<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
}