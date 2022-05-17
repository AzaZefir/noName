import React from "react";
import { MyPosts } from "./../myPost/MyPost";

export const MyPostsList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1
        style={{
          textAlign: "center",
          color: "teal",
          margin: "100px 0 100px 0",
        }}
      >
        Posts not found
      </h1>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "teal" }}>{title}</h1>
      {posts.map((post, index) => (
        <MyPosts remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};
