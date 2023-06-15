import { useState } from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";

import IconButton from "src/components/UI/IconButton";
import SignUpForm from "src/components/AuthForms/SignUpForm";
import SignInForm from "src/components/AuthForms/SignInForm";
import Overlay from "src/components/UI/Overlay";
import { useAppSelector } from "src/hooks/reduxHooks";
import { useGetUserQuery } from "src/api/authApi";
import { ROUTE_NAMES } from "src/router/routeNames";
import logo from "src/static/images/logo.png";
import profileIcon from "src/static/icons/profile.png";
import styleClasses from "src/components/Header/styles.module.scss";

interface ProfileIconProps {
  navigateToProfile: () => void;
}

interface IsOpen {
  signIn: boolean;
  signUp: boolean;
}

const ProfileIcon = ({ navigateToProfile }: ProfileIconProps) => {
  const { data = { name: "" } } = useGetUserQuery();
  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<IsOpen>({
    signIn: false,
    signUp: false,
  });
  const isSignedIn = useAppSelector((state) => state.auth.isSignedIn);

  const handleToggle = (modalName: keyof IsOpen) => {
    const anotherModal = modalName === "signIn" ? "signUp" : "signIn";
    setIsOpenPopover(false);
    // @ts-ignore
    setIsOpen({
      [anotherModal]: false,
      [modalName]: !isOpen[modalName],
    });
  };

  return (
    <>
      {isSignedIn ? (
        <Overlay
          trigger={["focus", "hover"]}
          overlay={
            <Popover.Body>
              <div>
                <h1 className={styleClasses.popoverTitle}>
                  Добро пожаловать, {data.name}
                </h1>
                <div className={styleClasses.popoverListWrapper}>
                  <ul>
                    <li>
                      <Link to={ROUTE_NAMES.NOT_FOUND}>Текущие заказы</Link>
                    </li>
                    <li>
                      <Link to={ROUTE_NAMES.FAVOURITE}>Избранные товары</Link>
                    </li>
                    <li>
                      <Link to={ROUTE_NAMES.CART}>Корзина</Link>
                    </li>
                    <li>
                      <Link to={ROUTE_NAMES.PROFILE}>Аккаунт</Link>
                    </li>
                  </ul>
                  <img className={styleClasses.logo} src={logo} alt="Logo" />
                </div>
              </div>
            </Popover.Body>
          }
          placement="bottom"
          popoverClassName={styleClasses.popover}
        >
          <IconButton
            imageUrl={profileIcon}
            imageAlt="Profile"
            innerText="Профиль"
            imageClassName={styleClasses.navIcon}
            onClick={navigateToProfile}
          />
        </Overlay>
      ) : (
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          show={isOpenPopover}
          overlay={
            <Popover className={styleClasses.popover}>
              <Popover.Body>
                <div>
                  <h1 className={styleClasses.popoverTitle}>
                    Добро пожаловать
                  </h1>
                  <div className={styleClasses.popoverButtonsHolder}>
                    <button
                      className={styleClasses.popoverButton}
                      onClick={() => handleToggle("signIn")}
                    >
                      Войти
                    </button>
                    <button
                      className={styleClasses.popoverButton}
                      onClick={() => handleToggle("signUp")}
                      style={{ background: "#EB1010" }}
                    >
                      Зарегистрироваться
                    </button>
                  </div>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <span>
            <IconButton
              imageUrl={profileIcon}
              imageAlt="Profile"
              innerText="Профиль"
              imageClassName={styleClasses.navIcon}
              onClick={() => setIsOpenPopover(true)}
            />
          </span>
        </OverlayTrigger>
      )}
      {isOpen.signUp && (
        <SignUpForm
          isOpen={isOpen.signUp}
          handleClose={() => handleToggle("signUp")}
          handleOpenAnother={() => handleToggle("signIn")}
        />
      )}
      {isOpen.signIn && (
        <SignInForm
          isOpen={isOpen.signIn}
          handleClose={() => handleToggle("signIn")}
          handleOpenAnother={() => handleToggle("signUp")}
        />
      )}
    </>
  );
};

export default ProfileIcon;
