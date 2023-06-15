import storage from "redux-persist/lib/storage";

export const authConfig = {
  key: "auth",
  storage,
  blacklist: ["isUpdated"],
};
