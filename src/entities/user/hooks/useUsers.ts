import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { User } from "../User";

export function useUsers(){
    return useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
}