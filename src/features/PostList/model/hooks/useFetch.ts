import { useEffect, useState } from "react";
import type { Post } from "../../../../entities/post/Post";

export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T = unknown>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;
    setLoading(true);

    fetch(url)
      .then(res => res.json())
      .then(async json => {
        if (canceled) return;

        if (url === "https://jsonplaceholder.typicode.com/posts") {
          const posts = json as Post[];

          const postsWithComments = await Promise.all(
            posts.map(async post => {
              const comments = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
              ).then(res => res.json());

              return { ...post, comments };
            })
          );

          setData(postsWithComments as T);
          return;
        }

        
        setData(json as T);
      })
      .catch(e => {
        if (!canceled) setError(e.message);
      })
      .finally(() => {
        if (!canceled) setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [url]);

  return { data, loading, error };
}
