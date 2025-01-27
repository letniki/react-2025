import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.tsx";
import {commentSliceActions} from "../../redux/slices/commentSlice/commentSlice.ts";
import {postSliceActions} from "../../redux/slices/postSlice/postSlice.tsx";
import {UserComponent} from "../user/UserComponent.tsx";
import {PostComponent} from "../post/PostComponent.tsx";
import {CommentComponent} from "../comment/CommentComponent.tsx";

export const ComplexComponent = () => {
    const {userSlice:{users} ,postSlice:{posts}, commentSlice:{comments}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(!users.length){
            dispatch(userSliceActions.loadUsers())
        }
        if(!comments.length){
            dispatch(commentSliceActions.loadComments())
        }
        if(!posts.length){
            dispatch(postSliceActions.loadPosts())
        }
    }, []);
    return (
        <div>
            {users && users.map(user=><UserComponent key={user.id} user={user}/>)}
            <hr/>
            {posts && posts.map(post=><PostComponent key={post.id} post={post}/>)}
            <hr/>
            {comments && comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

