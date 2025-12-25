import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { Album } from "../model/types";


export function useAlbum( id : string | undefined) {
    return useFetch<Album[]>(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
}