import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { User } from "../model/types";

export function useUser(id : string | undefined){
    return useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
}