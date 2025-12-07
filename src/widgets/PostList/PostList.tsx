import { PostCard } from "../../entities/post/ui/PostCard";
import { useState, useMemo, useCallback } from "react";
import "./PostList.css";
import type { Post } from "../../entities/post/Post";
import { PostLengthFilter } from "../../features/ThemeSwitcher/ui/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/ThemeSwitcher/ui/PostLengthFilter/lib/filterByLength";

type Props = {
  data: Post[];
};

export function PostList({ data }: Props) {
  const [order, setOrder] = useState<"min" | "max">("max");
  const [isSorted, setIsSorted] = useState(false);

  const sortedPosts = useMemo(() => {
    return isSorted ? filterByLength(data, order) : data;
  }, [data, order, isSorted]);

  const toggleOrder = useCallback(() => {
    setIsSorted(true);
    setOrder((prev) => (prev === "min" ? "max" : "min"));
  }, []);

  return (
    <div className="postList">
      <PostLengthFilter onClick={toggleOrder}>
        Сортировать по заголовкам от {order}
      </PostLengthFilter>

      {sortedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
