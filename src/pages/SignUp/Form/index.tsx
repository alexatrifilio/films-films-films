import { FC } from "react";
import { User } from "../../../types";

type Props = {
  onSubmit: (formData: User) => void;
};

const Form: FC<Props> = ({ onSubmit }) => {
  return (
    <form action="">
      <div>
        <label htmlFor=""> Nombre</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor=""> Apellido</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Correo Electrónico</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor=""> Contraseña </label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Avatar</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Fecha de nacimiento</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Ciudad</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">País</label>
        <input type="text" />
      </div>
    </form>
  );
};

export { Form as SignUpForm };
