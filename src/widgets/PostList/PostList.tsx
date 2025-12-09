import { PostCard } from "../../entities/post/ui/PostCard";
import { useState, useMemo, useCallback } from "react";
import "./PostList.css";
import type { Post } from "../../entities/post/Post";
import { PostLengthFilter } from "../../features/ThemeSwitcher/ui/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/ThemeSwitcher/ui/PostLengthFilter/lib/filterByLength";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";


export function PostList() {

  const Setttt = usePosts('https://jsonplaceholder.typicode.com/posts');

  const [posts, setPosts] = useState<Post[]>([]);

  setPosts(Setttt);
  
  const data = usePosts('https://jsonplaceholder.typicode.com/posts')

  console.log(data);

  return (
    <div className="postList">      

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
