import "./CommentCard.css";
import type { Comment } from "../model/types";

type Props = {
    comment: Comment;   
};

export function CommentCard({ comment }: Props) {
    return (
        <div className="commentCard">
            <div className="commentCardHeader">{comment.email}</div>
            <div className="commentCardBody">{comment.body}</div>
        </div>
    );
}
