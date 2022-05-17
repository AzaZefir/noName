import { ADD_POST, DELETE_POST, SET_POST } from "./Types";

export const addPost = () => ({ type: ADD_POST })

export const setPost = (postsData) => ({ type: SET_POST, postsData })

export const deletePost = (id) => {
    return { type: DELETE_POST, id };
  };

export const addPostsss = ()=> {
    return (dispatch) => {
        dispatch({
            type: 'add',
        });
    };
}
export const setPostsss = (postsData)=> {
return (dispatch) => {
    dispatch({
        type: 'add',
        payload: postsData
    });
};
}