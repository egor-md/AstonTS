import { useState, useEffect } from "react";
import './WithLoading.css'
import type { Post } from "../../../entities/post/Post";

export function WithLoading(Wrapped: React.ComponentType<any>) {
  return function WithLoadingComponent(props: any) {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
  fetch(props.url)
    .then(res => res.json())
    .then(async jsonData => {
      if (props.url === 'https://jsonplaceholder.typicode.com/posts') {       
        const postsWithComments = await Promise.all(
          jsonData.map(async (post: Post) => {
            const comments = await fetch(
              `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
            ).then(res => res.json());

            return { ...post, comments };
          })
        );

        setData(postsWithComments);
        setLoading(false);
        return;
      }

      setData(jsonData);
      setLoading(false);
    });
}, [props.url]);

    if (loading) return <div className="loader">Загрузка...</div>;

    return <Wrapped {...props} data={data} />;
  };
}