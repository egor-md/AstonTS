import { PostCard } from "../../entities/post/ui/PostCard";
import "./PostList.css";
import type { Post } from "../../entities/post/model/types";
import { useInvalidatePostsMutation } from "../../entities/post/api/postsApi";

interface PostProps {
  posts: Post[]
}

export function PostList({ posts }: PostProps) {

  const [invalidatePosts, { isLoading }] = useInvalidatePostsMutation();
  
  return (
    <div className="postList">
      <button onClick={() => invalidatePosts()} disabled={isLoading}>
        Инвалидировать посты
      </button>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} isLoading={false} />
      ))}
    </div>
  );
}