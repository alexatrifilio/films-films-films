import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PostPayload } from "../../../types";
import { defaultValuesPost } from "./defaultValues";

type Props = {
  onPost: (payload: Pick<PostPayload, "title" | "detail">) => void;
};

const PostForm: FC<Props> = ({ onPost }) => {
  const { register, handleSubmit } = useForm<
    Pick<PostPayload, "title" | "detail">
  >({
    defaultValues: defaultValuesPost,
  });

  return (
    <Form onSubmit={handleSubmit(onPost)}>
      <Form.Control
        type="text"
        placeholder="Ingresá el título de tu publicación"
        {...register("title")}
      />
      <Form.Control
        as={"textarea"}
        placeholder="¿Qué estás pensando?"
        {...register("detail")}
      />
      <Button type="submit" variant="dark">
        Publicar
      </Button>
    </Form>
  );
};

export { PostForm };
