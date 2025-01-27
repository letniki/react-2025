import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {postSliceActions} from "../../redux/slices/postSlice/postSlice.tsx";
import {PostComponent} from "../post/PostComponent.tsx";


export const PostsComponent = () => {
    const {posts} = useAppSelector(({postSlice}) =>postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
                dispatch(postSliceActions.loadPosts());
    }, []);
    return (
        <div>
            {
                posts.map(post=> <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

