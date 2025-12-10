import { useFetch } from "./useFetch";
import type { User } from "../../../../entities/user/User";

export function useUsers(){
    return useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
}