import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useFormik } from "formik";

import IconButton from "src/components/UI/IconButton";
import { useSignInMutation } from "src/api/authApi";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { signIn as signInAction } from "src/store/reducers/authSlice";
import { signInSchema } from "src/validation/signInSchema";
import { ROUTE_NAMES } from "src/router/routeNames";
import closeButton from "src/static/icons/cancel.png";
import styleClasses from "src/components/AuthForms/styles.module.scss";

interface SignInFormProps {
  isOpen: boolean;
  handleClose: () => void;
  handleOpenAnother: () => void;
}

const SignInForm = ({
  isOpen,
  handleClose,
  handleOpenAnother,
}: SignInFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signIn, { data }] = useSignInMutation();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: () => {
      signIn(values);
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(signInAction(data.token));
      navigate(ROUTE_NAMES.PROFILE);
      handleClose();
    }
  }, [data]);

  return (
    <Modal show={isOpen} className={styleClasses.modal} onHide={handleClose}>
      <div className={styleClasses.wrapper}>
        <IconButton
          imageUrl={closeButton}
          imageAlt="Закрыть"
          buttonClassName={styleClasses.closeButton}
          onClick={handleClose}
        />
        <form onSubmit={handleSubmit}>
          <h2 className={styleClasses.title}>Вход в аккаунт</h2>
          <input
            type="email"
            placeholder="Email"
            className={styleClasses.input}
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Пароль"
            className={styleClasses.input}
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <button type="submit" className={styleClasses.submitButton}>
            Войти
          </button>
        </form>
        <button
          className={styleClasses.emptyButton}
          onClick={handleOpenAnother}
        >
          Если у вас нет аккаунта - зарегистрируйтесь
        </button>
      </div>
    </Modal>
  );
};

export default SignInForm;
