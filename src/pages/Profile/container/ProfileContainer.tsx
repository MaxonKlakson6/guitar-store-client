import ProfileLayout from "src/pages/Profile/components/ProfileLayout";
import Loader from "src/components/UI/Loader";
import { useGetUserQuery, useUpdateUserInfoMutation } from "src/api/authApi";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { setToInitialState } from "src/store/reducers/authSlice";
import { userInitialValue } from "src/constants/initialValues";

const ProfileContainer = () => {
  const dispatch = useAppDispatch();
  const { data = userInitialValue, isLoading } = useGetUserQuery();
  const [updateUser] = useUpdateUserInfoMutation();

  const updateField = (
    fieldName: string,
    value: string,
    errors: Record<string, string>
  ) => {
    if (!errors[fieldName]) {
      updateUser({ fieldName, value });
    }
  };

  const handleLogout = () => {
    dispatch(setToInitialState());
  };

  return (
    <Loader isLoading={isLoading}>
      <ProfileLayout
        user={data}
        updateField={updateField}
        handleLogout={handleLogout}
      />
    </Loader>
  );
};

export default ProfileContainer;
