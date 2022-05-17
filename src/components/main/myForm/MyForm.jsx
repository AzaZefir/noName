import React, { useState } from "react";
import { MyBotton } from "../../UI/myButton/MyBotton";
import MyInput from "../../UI/myInput/MyInput";

const MyForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="post name"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="post description"
      />
      <MyBotton onClick={addNewPost}>Create post</MyBotton>
    </form>
  );
};

export default MyForm;
