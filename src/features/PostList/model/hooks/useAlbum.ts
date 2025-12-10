import { useFetch } from "./useFetch";
import type { Album } from "../../../../entities/album/Album";


export function useAlbum( id : string | undefined) {
    return useFetch<Album[]>(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
}