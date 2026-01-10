import type { Post } from "../../../../../entities/post/Post";

export function filterByLength(posts: Post[], maxLength: number): Post[] {
    return posts.filter(post => post.title.length <= maxLength);
}