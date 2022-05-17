import React, { useMemo } from "react";
import MyForm from "./myForm/MyForm";
import { MyPostsList } from "./myPostsList/MyPostsList";
import PostFilter from "./postFilter/PostFilter";
import MyModal from "../UI/myModal/MyModal";
import Img from "./../assets/img/js.jpg";

export const Main = ({
  filter,
  setFilter,
  posts,
  setPosts,
  modal,
  setModal,
}) => {
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }, [filter.search, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="main">
      <div className="main__content">
        <div className="main__description">
          <h1>Why JS?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            ducimus officia asperiores ea, sint illo minima fuga sapiente
            perferendis similique velit, deleniti mollitia porro delectus qui
            minus quisquam pariatur temporibus ut! Non enim vitae molestias
            beatae deleniti iste laudantium placeat, aut laborum unde
            repellendus quibusdam recusandae voluptates consequatur sit
            dignissimos.
          </p>
        </div>
        <div className="main__img">
          <img src={Img} alt="" />
        </div>
      </div>

      <button
        onClick={() => setModal(true)}
        className="btn-floating btn-large waves-effect "
      >
        +
      </button>

      <MyModal active={modal} setActive={setModal}>
        <MyForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <MyPostsList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Posts list"}
      />
    </div>
  );
};
