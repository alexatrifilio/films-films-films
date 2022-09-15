import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { countries, Country } from "../../../data/countries";
import { SignUpPayload } from "../../../types";
import { validationSchema } from "./validationSchema";
import { defaultValues } from "./defaultValues";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {
  onLogin: (formData: SignUpPayload) => void;
  className?: string;
};

const Form: FC<Props> = ({ onLogin, className }) => {
  const { register, handleSubmit, formState } = useForm<SignUpPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });
  const [selectCountry, setSelectCountry] = useState<Country>({
    name: "",
    cities: [""],
  });

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <div>
        <label htmlFor="name"> Nombre</label>
        <input type="text" id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="last-name"> Apellido</label>
        <input type="text" id="last-name" {...register("lastname")} />
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="password"> Contraseña </label>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div>
        <label htmlFor="avatar">Avatar</label>
        <input type="url" id="avatar" {...register("avatar")} />
      </div>
      <div>
        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <input type="date" id="birthdate" {...register("birthdate")} />
      </div>

      <div>
        <label htmlFor="countries"> País </label>
        <select
          name="countries"
          id="countries"
          onChange={(e) => {
            setSelectCountry((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        >
          {countries.map((country) => {
            return <option value={country.name}>{country.name}</option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor="cities"> Ciudad </label>
        <select name="cities" id="cities">
          {countries
            .find((country) => country.name === selectCountry.name)
            ?.cities.map((city) => {
              return <option value={city}> {city} </option>;
            })}
        </select>
      </div>

      <button>Registrarme!</button>
    </form>
  );
};

export { Form as SignUpForm };
