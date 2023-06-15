import { User } from "src/types/user";

export type ProfileForm = Omit<User, "password">;
