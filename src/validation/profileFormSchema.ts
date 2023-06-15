import * as yup from "yup";

export const profileFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().min(2).max(15).required(),
  surname: yup.string().min(2).max(15).required(),
  phoneNumber: yup.string().min(19).required(),
  deliveryAddress: yup.string().required(),
  secondDeliveryAddress: yup.string().required(),
});
