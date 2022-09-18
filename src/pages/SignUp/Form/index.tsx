import { FC } from "react";
import { useForm } from "react-hook-form";
import { countries } from "../../../data/countries";
import { SignUpPayload } from "../../../types";
import { validationSchema } from "./validationSchema";
import { defaultValues } from "./defaultValues";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Form } from "react-bootstrap";

type Props = {
  onLogin: (formData: SignUpPayload) => void;
  className?: string;
};

const SignUpForm: FC<Props> = ({ onLogin, className }) => {
  const { register, handleSubmit, formState, watch } = useForm<SignUpPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  return (
    <Form onSubmit={handleSubmit(onLogin)} className={`form ${className}`}>
      <Container>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Sharon"
            {...register("name")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last-name">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Stone"
            {...register("lastname")}
          />
        </Form.Group>
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
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña aquí"
            {...register("password")}
          />
          {formState.errors.password && (
            <Form.Text className="text-muted">
              {formState.errors.password?.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="avatar">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            type="url"
            placeholder="Ingrese la URL de su avatar"
            {...register("avatar")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="birthdate">
          <Form.Label>Fecha de nacimiento</Form.Label>
          <Form.Control type="date" {...register("birthdate")} />
        </Form.Group>
        <Form.Select size="sm" {...register("country")}>
          <option disabled>Seleccione su país</option>
          {countries.map((country) => {
            return <option value={country.name}>{country.name}</option>;
          })}
        </Form.Select>
        <Form.Select size="sm" {...register("city")}>
          <option disabled>Seleccione su ciudad</option>
          {countries
            .find((country) => country.name === watch("country"))
            ?.cities.map((city) => {
              return <option value={city}> {city} </option>;
            })}
        </Form.Select>
        <Button variant="light" type="submit">
          Registrarme!
        </Button>
      </Container>
    </Form>
  );
};

export { SignUpForm };
