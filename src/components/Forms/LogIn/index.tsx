import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { LogInPayload } from "../../../types";
import { validationSchema } from "../validationSchema";
import { defaultValues } from "./defaultValues";

type Props = {
  onLogin: (formData: LogInPayload) => void;
  className?: string;
};

const LogInForm: FC<Props> = ({ onLogin, className }) => {
  const { register, handleSubmit, formState, watch } = useForm<LogInPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <Form onSubmit={handleSubmit(onLogin)} className={`form ${className}`}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ej: sharonstone@gmail.com"
          {...register("email")}
        />
        {formState.errors.email && (
          <Form.Text className="text-muted">
            {formState.errors.email?.message}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contrasea</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contrasea aquí"
          {...register("password")}
        />
        {formState.errors.password && (
          <Form.Text className="text-muted">
            {formState.errors.password?.message}
          </Form.Text>
        )}
      </Form.Group>
      <Button variant="dark" type="submit">
        Ingresar!
      </Button>
    </Form>
  );
};

export { LogInForm };
