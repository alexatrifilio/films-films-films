import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useAuth, usePosts } from "../../../hooks";
import { Comment, User } from "../../../types";
import { CommentForm } from "../CommentForm";

type Props = {
  image?: string;
  title: string;
  author: Pick<User, "id" | "name" | "lastname" | "avatar">;
  date: string;
  detail: string;
  id: string;
  comments: Comment[];
};

const PostCard: FC<Props> = ({
  image,
  title,
  author,
  date,
  detail,
  id,
  comments,
}) => {
  const { updatePost } = usePosts();
  const { me } = useAuth();

  return (
    <Card className="post" key={id}>
      <Card.Body>
        <Row>
          {image && (
            <Col className="md-4">
              <Card.Img src={`https://image.tmdb.org/t/p/w500/${image}`} />
            </Col>
          )}
          <Col>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>
              {`${author.name} ${author.lastname}`} <span>{date}</span>
            </Card.Subtitle>
            <Card.Text>{detail}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      {comments &&
        comments.map((comment) => {
          return (
            <div className="comment" key={comment.user.id}>
              <img src={comment.user.avatar} alt="" />
              <Card>
                <Card.Body>
                  <Card.Text>
                    <span>{`${comment.user.name} ${comment.user.lastname}`}</span>
                    <p>{detail}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer> {date} </Card.Footer>
              </Card>
            </div>
          );
        })}
      {me && (
        <CommentForm
          onComment={() => {
            updatePost(id, {
              comments: [
                ...comments, //y este spread tampoco está bien pero no me doy cuenta como hacerlo
                {
                  // sé que me falta el spread operator para que se agregue la ino del formulario pero no se como llamarla por así decirlo...
                  date: new Date(),
                  user: {
                    id: me.id,
                    name: me.name,
                    lastname: me.lastname,
                    avatar: me.avatar,
                  },
                },
              ],
            });
          }}
        />
      )}
    </Card>
  );
};

export { PostCard };
