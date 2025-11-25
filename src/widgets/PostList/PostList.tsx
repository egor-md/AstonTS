import { PostCard } from "../../entities/post/ui/PostCard.tsx";
import './PostList.css'
import type { Post } from "../../entities/post/Post.ts";

type Props = {
    posts : Post[]
}

export function PostList({posts} : Props){
    return(
        <div className="postList">
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }            
        </div>
    )
}