import { ADD_POST, DELETE_POST, SET_POST } from "./Types";

let initialState = {
  postsData: [
    { id: 1, title: "achat2chatazat", body: "cdescription" },
    { id: 2, title: "bchat2chat", body: "bdescription" },
    { id: 3, title: "cchat2chat", body: "adescription" },
  ],
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Date.now(),
        title: state.title,
        body: state.body,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        title: "",
        body: "",
      };
    }
    case SET_POST:
      return {
        ...state,
        postsData: action.postsData,
      };
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.post.id),
      };
    }
    default:
      return state;
  }
};

export default PostsReducer;
