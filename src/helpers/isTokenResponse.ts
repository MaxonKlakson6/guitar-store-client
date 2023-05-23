import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

type TokenResponse =
  | { data: string }
  | { error: FetchBaseQueryError | SerializedError };

export const isTokenResponse = (
  response: TokenResponse
): response is { data: string } => {
  return "data" in response;
};
