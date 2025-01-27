import {IComment} from "../../models/IComment.ts";

type CommentComponentPropType = {
    comment: IComment;
}

export const CommentComponent = ({comment}: CommentComponentPropType ) => {
    return (
        <div>
            <h3>CommentId: {comment.id}. {comment.name}</h3>
             <p>{comment.email} - PostId: {comment.postId}</p>
            <p>{comment.body}</p>
        </div>
    );
};

