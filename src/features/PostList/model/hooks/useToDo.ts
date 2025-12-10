import { useFetch } from "./useFetch";
import type { ToDo } from "../../../../entities/todo/ToDo";

export function useToDo( id : string | undefined) {
    return useFetch<ToDo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
}