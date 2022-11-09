import { useContext, useEffect } from "react";
import { postApi } from "../../api";
import { StorageContext } from "../../contexts";
import { Post, PostPayload } from "../../types";

const usePosts = () => {
  const { posts, updatePosts } = useContext(StorageContext);

  useEffect(() => {
    !posts && getPosts();
  }, []);

  const getPosts = async () => {
    let response = await postApi.getAll();
    const reverseResponse = response.reverse();

    return reverseResponse;
  };

  const savePost = async (payload: PostPayload) => {
    await postApi.save(payload);
    getPosts();
  };

  const updatePost = async (id: string, payload: Partial<Post>) => {
    await postApi.patch(id, payload);
    console.log(payload);
  };

  return { savePost, getPosts, updatePost };
};

export { usePosts };
