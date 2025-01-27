import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/commentSlice/commentSlice.ts";
import {CommentComponent} from "../comment/CommentComponent.tsx";

const CommentsComponent = () => {
    const {comments} = useAppSelector(({commentSlice})=>commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);
    return (
        <div>
            {comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;