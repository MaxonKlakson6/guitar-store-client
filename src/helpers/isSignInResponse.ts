import { SignInResponse } from "src/api/authApi";

export const isSignInResponse = (
  response: any
): response is { data: SignInResponse } => {
  try {
    return (
      "data" in response &&
      "token" in response.data &&
      "message" in response.data
    );
  } catch (error) {
    return false;
  }
};
