import { FC } from "react";
import { SignUpPayload } from "../../../types";

type Props = {
  onSubmit: (formData: SignUpPayload) => void;
};

const Form: FC<Props> = ({ onSubmit }) => {
  return (
    <form action="">
      <div>
        <label htmlFor="name"> Nombre</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="last-name"> Apellido</label>
        <input type="text" name="last-name" id="last-name" />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password"> Contraseña </label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label htmlFor="avatar">Avatar</label>
        <input type="url" name="avatar" id="avatar" />
      </div>
      <div>
        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <input type="date" name="birthdate" id="birthdate" />
      </div>

      {/* País y ciudad deberían ser selects*/}
      <div>
        <label htmlFor="country">País</label>
        <input type="text" name="country" id="country" />
      </div>
      <div>
        <label htmlFor="city">Ciudad</label>
        <input type="text" name="city" id="city" />
      </div>
      {/* País y ciudad deberían ser selects*/}

      <button>Registrarme!</button>
    </form>
  );
};

export { Form as SignUpForm };
