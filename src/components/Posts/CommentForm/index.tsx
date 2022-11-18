import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Comment } from "../../../types";
import { defaultValuesComment } from "./defaultValues";

type Props = {
  onComment: (data: Pick<Comment, "commentDetail">) => void;
};

const CommentForm: FC<Props> = ({ onComment }) => {
  const { register, handleSubmit } = useForm<Pick<Comment, "commentDetail">>({
    defaultValues: defaultValuesComment,
  });
  return (
    <Form onSubmit={handleSubmit(onComment)} className="comment-form">
      <Form.Control
        type="text"
        {...register("commentDetail")}
        className="comment-input"
      />
      <Button variant="dark" type="submit" className="comment-btn">
        Comentar
      </Button>
    </Form>
  );
};

export { CommentForm };
