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
    <Form onSubmit={handleSubmit(onComment)}>
      <Form.Control type="text" {...register("commentDetail")} />
      <Button variant="dark" type="submit">
        Comentar
      </Button>
    </Form>
  );
};

export { CommentForm };
