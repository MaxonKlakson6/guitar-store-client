import { User, UserFormData } from "src/types/user";
import { rootApi } from "src/api";
import { saveToken } from "src/store/reducers/authSlice";

export interface SignInResponse {
  message: string;
  token: string;
}

interface UpdateUserRequest {
  fieldName: string;
  value: string;
}

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => ({
        url: "/user",
      }),
      providesTags: ["UserInfo"],
    }),
    createUnauthorizedUser: builder.mutation<string, void>({
      query: () => ({
        url: "/user",
        method: "POST",
      }),
      onQueryStarted: async (args, api) => {
        const postResult = await api.queryFulfilled;
        api.dispatch(saveToken(postResult.data));
      },
    }),
    updateUnauthorizedUser: builder.mutation<string, UserFormData>({
      query: (userData) => ({
        url: "/user",
        method: "PUT",
        body: userData,
      }),
    }),
    signIn: builder.mutation<SignInResponse, Pick<User, "email" | "password">>({
      query: (body) => ({
        url: "/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User", "UserInfo"],
    }),
    updateUserInfo: builder.mutation<string, UpdateUserRequest>({
      query: (body) => ({
        url: "/user",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["UserInfo"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateUnauthorizedUserMutation,
  useUpdateUnauthorizedUserMutation,
  useSignInMutation,
  useUpdateUserInfoMutation,
} = authApi;
