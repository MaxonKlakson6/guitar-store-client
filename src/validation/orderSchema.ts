import * as yup from "yup";

export const orderSchemaWithoutSignIn = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(2).max(15).required(),
  surname: yup.string().min(2).max(15).required(),
  deliveryMethod: yup.string().required(),
});
