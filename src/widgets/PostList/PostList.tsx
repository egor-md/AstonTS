import { PostCard } from "../../entities/post/ui/PostCard.tsx";
import './PostList.css'
import React from "react";
import type { Post } from "../../entities/post/Post.ts";

type Props = {
    posts: Post[]
}

export function PostList({ posts }: Props) {
    return (

        <ul className="postList">
            {
                posts.map(post => (
                    <React.Fragment key={post.id}>
                        <PostCard post={post} />
                    </React.Fragment>
                ))
            }
        </ul>


    )
}