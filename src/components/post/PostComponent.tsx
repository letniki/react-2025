import {IPost} from "../../models/IPost.ts";

type UserComponentPropType = {
    post:IPost
}
export const PostComponent = ({post}: UserComponentPropType) => {
    return (
        <div>
            <h3>{post.id}. {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};
