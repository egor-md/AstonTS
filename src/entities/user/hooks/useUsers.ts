import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { User } from "../model/types";

export function useUsers(){
    return useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
}