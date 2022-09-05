import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./postSlice";

const PostView = () => {
  const { loading, posts, error } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h2>PostView</h2>
      {posts &&
        posts.map((post) => {
          return (
            <div
              key={post.id}
              style={{
                width: 600,
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 0 10px #666",
                padding: "16px",
                margin: "0 auto",
                marginBottom: 24,
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default PostView;
