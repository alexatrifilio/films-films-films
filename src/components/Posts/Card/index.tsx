import { FC } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { formatDate } from "../../../helpers";
import { useAuth, usePosts } from "../../../hooks";
import { Comment, User } from "../../../types";
import { CommentForm } from "../CommentForm";
import "./style.scss";

type Props = {
  image?: string;
  title: string;
  author: Pick<User, "id" | "name" | "lastname" | "avatar">;
  date: Date;
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
    <Card className="post-card" key={`card${id}`}>
      <Card.Body>
        <Row>
          {image && (
            <Col className="md-2">
              <Card.Img
                className="post-img"
                src={`https://image.tmdb.org/t/p/w500/${image}`}
              />
            </Col>
          )}
          <Col>
            <div className="post-author">
              <span>{`${author.name} ${author.lastname}`}</span>
              <span>{formatDate(date)}</span>
            </div>
            <Card.Title className="post-title">{title}</Card.Title>
            <Card.Text className="post-detail">{detail}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
      {comments &&
        comments.map((comment) => {
          return (
            <div className="comment" key={comments.indexOf(comment)}>
              <Card>
                <Card.Body className="comment-content">
                  <div className="img-container">
                    <img
                      src={comment.user.avatar}
                      alt="avatar"
                      className="user-avatar"
                    />
                  </div>
                  <Card.Text className="comment-text">
                    <span className="user">{`${comment.user.name} ${comment.user.lastname}`}</span>
                    <span className="comment-detail">
                      {comment.commentDetail}
                    </span>
                  </Card.Text>
                </Card.Body>
                <Card.Footer> {formatDate(comment.date)} </Card.Footer>
              </Card>
            </div>
          );
        })}
      {me && (
        <CommentForm
          onComment={(data: Pick<Comment, "commentDetail">) => {
            updatePost(id, {
              comments: [
                ...(comments || []),
                {
                  commentDetail: data.commentDetail,
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
