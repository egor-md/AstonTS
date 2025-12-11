import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { Album } from "../Album";


export function useAlbum( id : string | undefined) {
    return useFetch<Album[]>(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
}