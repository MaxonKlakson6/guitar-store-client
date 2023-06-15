import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import loc from "react-phone-input-2/lang/ru.json";
import "react-phone-input-2/lib/style.css";

import IconButton from "src/components/UI/IconButton";
import ErrorInput from "src/components/UI/ErrorInput";
import { useUpdateUnauthorizedUserMutation } from "src/api/authApi";
import { usePhoneInput } from "src/hooks/usePhoneInput";
import { signUpSchema } from "src/validation/signUpSchema";
import { signUpFormInitialState } from "src/constants/initialValues";
import closeIcon from "src/static/icons/cancel.png";
import styleClasses from "src/components/AuthForms/styles.module.scss";

// @ts-ignore
const ReactPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;

interface SignUpFormProps {
  isOpen: boolean;
  handleClose: () => void;
  handleOpenAnother: () => void;
}

const SignUpForm = ({
  isOpen,
  handleClose,
  handleOpenAnother,
}: SignUpFormProps) => {
  const [updateUser] = useUpdateUnauthorizedUserMutation();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: signUpFormInitialState,
      validationSchema: signUpSchema,
      onSubmit: () => {
        if (isValidPhone) {
          const { confirm, ...form } = values;
          updateUser(form).then(() => {
            handleOpenAnother();
          });
        }
      },
    });

  const { isValidPhone, checkIsValidPhone, handleChangePhone } = usePhoneInput({
    isValid: false,
    handleChange,
  });

  const isValid = (_: string, country: object) => {
    return checkIsValidPhone(_, country, values.phoneNumber);
  };

  return (
    <Modal show={isOpen} onHide={handleClose} className={styleClasses.modal}>
      <div className={styleClasses.wrapper}>
        <IconButton
          imageUrl={closeIcon}
          imageAlt="Закрыть"
          buttonClassName={styleClasses.closeButton}
          onClick={handleClose}
        />
        <form onSubmit={handleSubmit}>
          <h2 className={styleClasses.title}>Регистрация</h2>
          <ErrorInput error={errors.email} isTouched={touched.email}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className={styleClasses.input}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </ErrorInput>
          <ErrorInput error={errors.name} isTouched={touched.name}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className={styleClasses.input}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </ErrorInput>
          <ErrorInput error={errors.surname} isTouched={touched.surname}>
            <input
              type="text"
              name="surname"
              placeholder="Фамилия"
              className={styleClasses.input}
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </ErrorInput>
          <ErrorInput
            error={errors.phoneNumber}
            isTouched={touched.phoneNumber}
          >
            <ReactPhoneInput
              country="by"
              localization={loc}
              containerClass={styleClasses.phoneInputContainer}
              inputClass={styleClasses.phoneInput}
              value={values.phoneNumber}
              inputProps={{
                name: "phoneNumber",
              }}
              onChange={handleChangePhone}
              isValid={isValid}
              onBlur={handleBlur}
            />
          </ErrorInput>
          <ErrorInput error={errors.password} isTouched={touched.password}>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className={styleClasses.input}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </ErrorInput>
          <ErrorInput error={errors.confirm} isTouched={touched.confirm}>
            <input
              type="password"
              name="confirm"
              placeholder="Повторите пароль"
              className={styleClasses.input}
              value={values.confirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </ErrorInput>
          <button type="submit" className={styleClasses.submitButton}>
            Зарегистрироваться
          </button>
        </form>
        <button
          className={styleClasses.emptyButton}
          onClick={handleOpenAnother}
        >
          Уже есть аккаунт? Войдите
        </button>
      </div>
    </Modal>
  );
};

export default SignUpForm;
