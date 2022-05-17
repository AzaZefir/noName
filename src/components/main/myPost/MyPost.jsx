import React from "react";
import { MyBotton } from "../../UI/myButton/MyBotton";

export const MyPosts = ({ post, number, remove }) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {number}. {post.title}
          </strong>
          <p>{post.body}</p>
        </div>
        <div className="post__btn">
          <MyBotton onClick={() => remove(post)}>delete</MyBotton>
        </div>
      </div>
    </div>
  );
};
