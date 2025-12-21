import type { Post } from "../../../../../entities/post/model/types";

export function filterByLength(posts: Post[], lengthValue: 'min' | 'max'): Post[] {
    return [...posts].sort((a, b) => {
        if (lengthValue === 'min') {
            return a.title.length - b.title.length;
        } else {
            return b.title.length - a.title.length;
        }
    });
}