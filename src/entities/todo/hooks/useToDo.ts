import { useFetch } from "../../../shared/lib/hooks/useFetch";
import type { Todo } from "../model/types";

export function useToDo( id : string | undefined) {
    return useFetch<Todo[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
}