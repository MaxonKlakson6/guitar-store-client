import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Email обязательное поле"),
  password: yup
    .string()
    .min(6, "Слишком короткий пароль")
    .required("Пароль обязательное поле"),
});
