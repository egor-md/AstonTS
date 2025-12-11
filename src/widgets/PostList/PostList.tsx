import { PostCard } from "../../entities/post/ui/PostCard";
import { useState, useMemo } from "react";
import "./PostList.css";
import type { Post } from "../../entities/post/Post";
import { PostLengthFilter } from "../../features/ThemeSwitcher/ui/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/ThemeSwitcher/ui/PostLengthFilter/lib/filterByLength";

type Props = {
    data: Post[];
};

export function PostList({ data }: Props) {
    const [maxLength, setMaxLength] = useState<number>(0);

    const filteredPosts = useMemo(() => {
        if (maxLength <= 0) return data;
        return filterByLength(data, maxLength);
    }, [data, maxLength]);

    return (
        <div className="postList">

            <PostLengthFilter
                value={maxLength}
                onChange={setMaxLength}
            />

            {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
