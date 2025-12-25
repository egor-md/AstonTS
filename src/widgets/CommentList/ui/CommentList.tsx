import { useState, useCallback } from "react";
import { CommentCard } from "../../../entities/comment/ui/CommentCard";
import type { Comment } from "../../../entities/comment/model/types";
import { Button } from "../../../shared/ui/Button/Button";
import './CommentList.css'

type Props = {
    comments: Comment[];
};

export function CommentList({ comments }: Props) {
    const [open, setOpen] = useState(false);

    const toggleComments = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    return (
        <div className="commentList">
            <Button className="button showCommentsButton" onClick={toggleComments}>{`комментарии ${comments?.length || 0}`}</Button>
            {open && comments.map(comment => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </div>
    );
}
