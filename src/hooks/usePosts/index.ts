import { useContext, useEffect } from "react";
import { postApi } from "../../api";
import { StorageContext } from "../../contexts";
import { Comment, Post, PostPayload } from "../../types";

const usePosts = () => {
  const { posts, updatePosts } = useContext(StorageContext);

  useEffect(() => {
    !posts && getPosts();
  }, []);

  const getPosts = async () => {
    const response = await postApi.getAll();
    updatePosts(
      response.sort((a: Comment, b: Comment) =>
        a.date.getTime() <= b.date.getTime() ? -1 : 1
      )
    );
  };

  const savePost = async (payload: PostPayload) => {
    await postApi.save(payload);
    getPosts();
  };

  const updatePost = async (post: Post) => {
    await postApi.patch(post);
  };

  return { savePost, getPosts, updatePost };
};

export { usePosts };
