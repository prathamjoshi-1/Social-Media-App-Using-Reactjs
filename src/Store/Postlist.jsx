import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postID);
  } else if (action.type === "ADD_POST") {
    return [action.payload, ...currPostList];
  }
  return currPostList;
};
//React Component
const PostlistProv = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userID, postTitle, postBody, reactions, tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userID: userID,
        tags: tags,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  return (
    <Postlist.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Hi Friends I am going to Mumbai for my vacation going to enjoy a lot.",
    reaction: 2,
    userID: "user-9",
    tags: ["vacation", "mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going To Pune",
    body: "Hi Friends I am going to Pune for my vacation going to enjoy a lot.",
    reaction: 15,
    userID: "user-10",
    tags: ["vacation", "Pune", "Enjoying"],
  },
];
export default PostlistProv;
