import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { ToDo } from "../ToDo";

export function useToDo( id : string | undefined) {
    return useFetch<ToDo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
}