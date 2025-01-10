import {IPost} from "../../models/IPost.ts";
import './PostComponent.css'
interface IPostProps {
    post: IPost;
}

export const PostComponent = ({post} :IPostProps) => {
    return (
        <div className="block">
            <h2>{post.id}. {post.title}</h2>
            <h3>Likes: {post.reactions.likes}</h3>
            <h3>Dislikes: {post.reactions.dislikes}</h3>
            <p>{post.body}</p>
        </div>
    );
};

