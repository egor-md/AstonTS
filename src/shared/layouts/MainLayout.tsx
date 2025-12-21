import { useEffect, useState } from 'react';
import { PostList } from '../../widgets/PostList/PostList';
import { WithLoading } from '../lib/hoc/withLoading';
import type { Post } from '../../entities/post/Post';
import { Header } from '../../widgets/LayoutHeader/Header';
import { Footer } from '../../widgets/LayoutFooter/Footer';

const url = 'https://jsonplaceholder.typicode.com/posts';
const PostListWithLoading = WithLoading(PostList);

export function MainLayout() {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const posts = await fetch(url).then(r => r.json());

            const postsWithComments = await Promise.all(
                posts.map(async (post: Post) => {
                    const comments = await fetch(
                        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
                    ).then(r => r.json());

                    return { ...post, comments };
                })
            );

            setData(postsWithComments);
            setLoading(false);
        }

        load();
    }, []);

    return (
        <>
            <Header />
            <PostListWithLoading
                loading={loading}
                data={data}
            />
            <Footer />
        </>

    );
}
