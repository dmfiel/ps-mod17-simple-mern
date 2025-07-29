import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
function Post({ post }) {
  return (
    <div className="flex flex-col gap-2 p-5 rounded-md border">
      <div>
        <h4 className="text-xl font-bold">{post.title}</h4>
        <p className="text-md">{post.body}</p>
      </div>
      <div className="flex gap-2">
        <FcLike />
        <BiUpvote />
        <BiDownvote />
      </div>
    </div>
  );
}

export default Post;
