import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Email обязательное поле"),
  name: yup
    .string()
    .min(2, "Слишком короткое имя")
    .max(15, "Слишком длинное имя")
    .required("Имя обязательное поле"),
  surname: yup
    .string()
    .min(2, "Слишком короткая фамилия")
    .max(15, "Слишком длинная фамилия")
    .required("Фамилия обязательно поле"),
  password: yup
    .string()
    .min(6, "Слишком короткий пароль")
    .required("Пароль обязательное поле"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Повторите пароль"),
});
