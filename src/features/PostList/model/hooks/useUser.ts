import { useFetch } from "./useFetch";
import type { User } from "../../../../entities/user/User";

export function useUser(id : string | undefined){
    return useFetch<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
}