import { FC, useEffect, useState } from "react";
import { useAuth, usePosts } from "../../hooks";
import { Post } from "../../types";
import { PostCard } from "./Card";

type Props = {
  newPost: {};
};

const Posts: FC = () => {
  const { getPosts, updatePost } = usePosts();
  const [data, setData] = useState<Post[]>();
  const { me } = useAuth();

  useEffect(() => {
    const myPosts = async () => {
      const resp = await getPosts();
      setData(resp);
    };
    myPosts();
  }, [updatePost]);

  return (
    <div>
      {me &&
        data?.map(({ comments, date, detail, id, title, user, image }) => {
          return (
            <PostCard
              author={user}
              comments={comments}
              date={date}
              detail={detail}
              id={id}
              image={image}
              title={title}
              key={`postcard${id}`}
            />
          );
        })}
    </div>
  );
};

export { Posts };
