import { useEffect, useState } from "react";
import type { Post } from "../../../../entities/post/Post";

export function useUsersPosts(id: string | undefined) {
  const [data, setData] = useState<(Post & { comments: any[] })[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    let canceled = false;

    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(posts => {
        return Promise.all(
          posts.map((post: Post) =>
            fetch(
              `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            )
              .then(res => res.json())
              .then(comments => ({ ...post, comments }))
          )
        );
      })
      .then(postsWithComments => {
        if (!canceled) setData(postsWithComments);
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
  }, [id]);

  return { data, loading, error };
}
