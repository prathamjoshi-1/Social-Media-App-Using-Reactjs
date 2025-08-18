import { useContext } from "react";
import Post from "./Post";
import { Postlist } from "../Store/Postlist";

const PostList = () => {
  const { postlist } = useContext(Postlist);
  return (
    <>
      {postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
