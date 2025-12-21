import { useEffect, useState } from "react";
import type { Post } from "../../../../entities/post/Post";

export function usePost(id: string | undefined) {
    const [data, setData] = useState<Post & { comments?: any[] } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        let canceled = false;

        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(async post => {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
                );
                const comments = await res.json();
                return ({ ...post, comments });
            })
            .then(postWithComments => {
                if (!canceled) {
                    setData(postWithComments);
                }
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
