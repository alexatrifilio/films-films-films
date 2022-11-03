import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { randomKey } from "../../../helpers";
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
    <Card className="post" key={`card${id}`}>
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
            <div className="comment" key={comments.indexOf(comment)}>
              <img src={comment.user.avatar} alt="" />
              <Card>
                <Card.Body>
                  <Card.Text>
                    <span>{`${comment.user.name} ${comment.user.lastname}`}</span>
                    <p>{comment.commentDetail}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer> {date} </Card.Footer>
              </Card>
            </div>
          );
        })}
      {me && (
        <CommentForm
          onComment={(data: Pick<Comment, "commentDetail">) => {
            console.log(data);
            updatePost(id, {
              comments: [
                ...comments, //y este spread tampoco está bien pero no me doy cuenta como hacerlo
                {
                  commentDetail: data.commentDetail,
                  date: new Date().toLocaleDateString("en-US"),
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
