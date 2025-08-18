import { useContext, useRef } from "react";
import PostlistProv, { Postlist } from "../Store/Postlist";

const CreatePost = () => {
  const { addPost } = useContext(Postlist);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User ID here
          </label>
          <input
            ref={userIdElement}
            type="text"
            placeholder="Your User ID"
            className="form-control"
            id="userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            placeholder="How are feeling today.."
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            rows="4"
            type="text"
            placeholder="Tell us more about it.."
            className="form-control"
            id="body"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            placeholder="How many people's reacted to this post"
            className="form-control"
            id="reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            ref={tagsElement}
            type="text"
            placeholder="Please enter tags using space"
            className="form-control"
            id="tag"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
