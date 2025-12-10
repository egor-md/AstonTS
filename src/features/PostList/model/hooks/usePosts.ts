import { useFetch } from "./useFetch";
import type { Post } from "../../../../entities/post/Post";


interface UsePostResult {
  data: Post[];
  loading: boolean;
  error: string | null;
}

export function usePosts() : UsePostResult{
    return useFetch('https://jsonplaceholder.typicode.com/posts')
}