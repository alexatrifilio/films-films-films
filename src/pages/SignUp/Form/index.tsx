import { FC } from "react";

type Props = {
  onSubmit: (formData) => void;
};

const Form: FC<Props> = () => {
  return <form action=""></form>;
};

export { Form as SignUpForm };
