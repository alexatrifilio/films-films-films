import { FC, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useAuth, usePosts } from "../../hooks";
import { Post } from "../../types";

type Props = {
  newPost: {};
};

const Posts: FC = () => {
  const { getPosts } = usePosts();
  const [data, setData] = useState<Post[]>();
  const { me } = useAuth();

  useEffect(() => {
    const myPosts = async () => {
      const resp = await getPosts();
      setData(resp);
      console.log(resp, "hola");
    };
    myPosts();
  }, []);

  console.log(data);

  return (
    <div>
      {me &&
        data?.map(({ comments, date, detail, id, title, user, image }) => {
          return (
            <Card key={id}>
              {image && image.length > 0 && (
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${image}`} />
              )}
              <Card.Body>
                <Card.Title>{`${user.name} ${user.lastname}`}</Card.Title>
                <Card.Subtitle>{title}</Card.Subtitle>
                <Card.Text>{detail}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export { Posts };
