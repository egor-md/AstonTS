import { PostCard } from "../../entities/post/ui/PostCard";
import "./PostList.css";
import type { Post } from "../../entities/post/model/types";

interface PostProps {
    posts : Post[]
}

export function PostList({posts} :PostProps ) {
  return (
    <div className="postList">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} isLoading={false} />
      ))}
    </div>
  );
}